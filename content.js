// ORCID ID Detector - Content Script
// Automatically detect ORCID IDs on web pages and make them interactive

(function() {
    'use strict';

    // Prevent multiple instances of the extension running
    if (window.orcidDetectorLoaded) {
        return;
    }
    window.orcidDetectorLoaded = true;

    // ORCID ID regex pattern - matches various formats
    const ORCID_REGEX = /(?:(?:https?:\/\/)?(?:www\.)?(?:sandbox\.)?orcid\.org\/)?(?:orcid\/)?(?:id\/)?(\d{4}-\d{4}-\d{4}-\d{3}[\dX])/gi;
    
    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        if (typeof text !== 'string') return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Cache for ORCID profile data to avoid duplicate API calls
    const profileCache = new Map();
    
    // Track processed elements to avoid duplicate processing
    const processedElements = new WeakSet();
    
    // Track processed text to avoid reprocessing the same content
    const processedTextContent = new Set();
    
    // Track processed ORCID links to avoid duplicate processing
    const processedORCIDLinks = new WeakSet();

    // Process existing ORCID links with logos (e.g., orcid_16x16.png)
    function processExistingORCIDLinks() {
        // Find all links to orcid.org
        const orcidLinks = document.querySelectorAll('a[href*="orcid.org/"]');
        
        orcidLinks.forEach(link => {
            // Skip if already processed
            if (processedORCIDLinks.has(link)) return;
            
            // Skip if it's one of our own detector links
            if (link.closest('.orcid-detector-container') || 
                link.classList.contains('orcid-detector-container')) {
                return;
            }
            
            // Extract ORCID ID from the href
            const href = link.getAttribute('href');
            const match = href.match(/orcid\.org\/(\d{4}-\d{4}-\d{4}-\d{3}[\dX])/);
            
            if (!match) return;
            
            const orcidId = match[1];
            
            // Check if this link contains an ORCID logo image
            const hasORCIDImage = link.querySelector('img[src*="orcid"]');
            
            if (hasORCIDImage) {
                // Mark as processed
                processedORCIDLinks.add(link);
                
                // Add our magnifying glass icon after the link
                const logoSpan = document.createElement('span');
                logoSpan.className = 'orcid-detector-logo-external';
                logoSpan.style.marginLeft = '4px';
                logoSpan.style.display = 'inline-block';
                logoSpan.innerHTML = `
                    <svg width="16" height="16" viewBox="-10 -10 300 300" style="vertical-align: middle; cursor: pointer;">
                        <circle cx="120" cy="120" r="85" fill="none" stroke="#8FB82B" stroke-width="24"/>
                        <circle cx="120" cy="120" r="42" fill="none" stroke="#8FB82B" stroke-width="18"/>
                        <line x1="175" y1="175" x2="250" y2="250" stroke="#8FB82B" stroke-width="28" stroke-linecap="round"/>
                    </svg>
                `;
                logoSpan.title = 'View ORCID profile details';
                
                // Add click handler
                logoSpan.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showORCIDPopup(orcidId, logoSpan);
                });
                
                // Insert after the link
                link.parentNode.insertBefore(logoSpan, link.nextSibling);
            }
        });
    }

    // Initialize the extension
    function init() {
        console.log('ORCID ID Detector: Initializing...');
        
        // Process existing ORCID links with logos
        processExistingORCIDLinks();
        
        // Process the initial page content
        processPage();
        
        // Set up mutation observer for dynamic content
        setupMutationObserver();
        
        console.log('ORCID ID Detector: Initialized');
    }

    // Process the entire page for ORCID IDs
    function processPage() {
        const textNodes = getTextNodes(document.body);
        textNodes.forEach(processTextNode);
    }

    // Get all text nodes in the document
    function getTextNodes(element) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    // Skip script and style tags
                    const parent = node.parentElement;
                    if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    
                    // Skip already processed nodes AND elements with orcid-detector class
                    if (processedElements.has(parent) || 
                        parent.closest('.orcid-detector-container') ||
                        parent.classList.contains('orcid-detector-container') ||
                        parent.classList.contains('orcid-detector-text') ||
                        parent.classList.contains('orcid-detector-logo')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    
                    // Only process nodes that might contain ORCID IDs
                    if (ORCID_REGEX.test(node.textContent)) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    
                    return NodeFilter.FILTER_REJECT;
                }
            }
        );

        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        return textNodes;
    }

    // Process individual text nodes for ORCID IDs
    function processTextNode(textNode) {
        const parent = textNode.parentElement;
        if (!parent || processedElements.has(parent)) return;

        // Skip if this is already an ORCID detector element
        if (parent.closest('.orcid-detector-container') ||
            parent.classList.contains('orcid-detector-container') ||
            parent.classList.contains('orcid-detector-text') ||
            parent.classList.contains('orcid-detector-logo')) {
            return;
        }

        const text = textNode.textContent;
        
        // Create a unique identifier for this text content
        const textHash = text + parent.tagName + (parent.className || '');
        if (processedTextContent.has(textHash)) {
            return;
        }
        
        const matches = [...text.matchAll(ORCID_REGEX)];
        
        if (matches.length === 0) return;

        // Mark as processed to avoid duplicate processing
        processedElements.add(parent);
        processedTextContent.add(textHash);

        // Create document fragment with enhanced ORCID IDs
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        matches.forEach((match) => {
            const fullMatch = match[0];
            const orcidId = match[1]; // The captured ORCID ID
            const startIndex = match.index;
            const endIndex = startIndex + fullMatch.length;

            // Add text before the match
            if (startIndex > lastIndex) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex, startIndex)));
            }

            // Create enhanced ORCID ID element
            const orcidElement = createORCIDElement(fullMatch, orcidId);
            fragment.appendChild(orcidElement);

            lastIndex = endIndex;
        });

        // Add remaining text
        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        // Replace the original text node
        parent.replaceChild(fragment, textNode);
    }

    // Create interactive ORCID ID element
    function createORCIDElement(originalText, orcidId) {
        const container = document.createElement('span');
        container.className = 'orcid-detector-container';
        container.style.position = 'relative';
        container.style.display = 'inline';

        // Original ORCID text (now clickable)
        const textSpan = document.createElement('span');
        textSpan.textContent = originalText;
        textSpan.className = 'orcid-detector-text';
        textSpan.style.cursor = 'pointer';
        textSpan.style.color = '#A6CE39';
        textSpan.style.textDecoration = 'underline';
        textSpan.title = 'Click to view ORCID profile';

        // Magnifying glass icon
        const logoSpan = document.createElement('span');
        logoSpan.className = 'orcid-detector-logo';
        logoSpan.innerHTML = `
            <svg width="16" height="16" viewBox="-10 -10 300 300" style="margin-left: -2px; vertical-align: 2px; cursor: pointer;">
                <circle cx="120" cy="120" r="85" fill="none" stroke="#8FB82B" stroke-width="24"/>
                <circle cx="120" cy="120" r="42" fill="none" stroke="#8FB82B" stroke-width="18"/>
                <line x1="175" y1="175" x2="250" y2="250" stroke="#8FB82B" stroke-width="28" stroke-linecap="round"/>
            </svg>
        `;
        logoSpan.title = 'View ORCID profile';

        // Add click handlers
        const clickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            showORCIDPopup(orcidId, e.target);
        };

        textSpan.addEventListener('click', clickHandler);
        logoSpan.addEventListener('click', clickHandler);

        container.appendChild(textSpan);
        container.appendChild(logoSpan);

        return container;
    }

    // Show ORCID profile popup
    async function showORCIDPopup(orcidId, targetElement) {
        // Remove any existing popups
        removeExistingPopups();

        // Show loading popup first
        const loadingPopup = createLoadingPopup();
        document.body.appendChild(loadingPopup);
        positionPopup(loadingPopup, targetElement);

        try {
            // Fetch ORCID profile data
            const profileData = await fetchORCIDProfile(orcidId);
            
            // Remove loading popup
            document.body.removeChild(loadingPopup);
            
            // Create and show profile popup
            const popup = createProfilePopup(orcidId, profileData);
            document.body.appendChild(popup);
            positionPopup(popup, targetElement);

            // Add click outside to close
            setTimeout(() => {
                document.addEventListener('click', handleOutsideClick);
            }, 100);

        } catch (error) {
            console.error('Error fetching ORCID profile:', error);
            document.body.removeChild(loadingPopup);
            
            // Show error popup
            const errorPopup = createErrorPopup(orcidId, error.message);
            document.body.appendChild(errorPopup);
            positionPopup(errorPopup, targetElement);
        }
    }

    // Fetch ORCID profile data from API
    async function fetchORCIDProfile(orcidId) {
        // Check cache first
        if (profileCache.has(orcidId)) {
            return profileCache.get(orcidId);
        }

        // Fetch multiple endpoints for comprehensive profile data
        const endpoints = {
            person: `https://pub.orcid.org/v3.0/${orcidId}/person`,
            works: `https://pub.orcid.org/v3.0/${orcidId}/works`,
            employments: `https://pub.orcid.org/v3.0/${orcidId}/employments`,
            educations: `https://pub.orcid.org/v3.0/${orcidId}/educations`,
            fundings: `https://pub.orcid.org/v3.0/${orcidId}/fundings`
        };

        const results = {};
        
        // Fetch all endpoints in parallel
        const promises = Object.entries(endpoints).map(async ([key, url]) => {
            try {
                const response = await fetch(url, {
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    results[key] = await response.json();
                } else {
                    results[key] = null;
                }
            } catch (error) {
                console.warn(`Failed to fetch ${key}:`, error);
                results[key] = null;
            }
        });

        await Promise.all(promises);
        
        // Cache the result
        profileCache.set(orcidId, results);
        
        return results;
    }

    // Create loading popup
    function createLoadingPopup() {
        const popup = document.createElement('div');
        popup.className = 'orcid-detector-popup loading';
        popup.innerHTML = `
            <div class="orcid-popup-content">
                <div class="loading-spinner"></div>
                <p>Loading ORCID profile...</p>
            </div>
        `;
        return popup;
    }

    // Create profile popup
    function createProfilePopup(orcidId, profileData) {
        const popup = document.createElement('div');
        popup.className = 'orcid-detector-popup';

        // Extract data from different API endpoints
        const person = profileData.person || {};
        const works = profileData.works || {};
        const employments = profileData.employments || {};
        const educations = profileData.educations || {};
        const fundings = profileData.fundings || {};

        // Person information
        const name = person.name ? 
            (person.name['given-names']?.value || '') + ' ' + (person.name['family-name']?.value || '') : 'Name not available';
        const biography = person.biography?.content || null;
        const urls = person['researcher-urls']?.['researcher-url'] || [];
        const keywords = person.keywords?.keyword || [];
        const emails = person.emails?.email || [];
        
        // Work information
        const worksList = works['works-summary'] || [];
        const worksCount = worksList.length;
        
        // Employment information
        const employmentsList = employments['employment-summary'] || [];
        const currentEmployment = employmentsList[0] || null;
        
        // Education information
        const educationsList = educations['education-summary'] || [];
        const highestEducation = educationsList[0] || null;
        
        // Funding information
        const fundingsList = fundings.group || [];
        const fundingsCount = fundingsList.length;

        popup.innerHTML = `
            <div class="orcid-popup-content">
                <div class="orcid-popup-header">
                    <div class="orcid-logo-header">
                        <svg width="20" height="20" viewBox="-10 -10 300 300">
                            <circle cx="120" cy="120" r="85" fill="none" stroke="white" stroke-width="24"/>
                            <circle cx="120" cy="120" r="42" fill="none" stroke="white" stroke-width="18"/>
                            <line x1="175" y1="175" x2="250" y2="250" stroke="white" stroke-width="28" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <button class="orcid-popup-close">&times;</button>
                </div>
                
                <div class="orcid-profile-info">
                    <h3>${escapeHtml(name.trim()) || 'Name not provided'}</h3>
                    <p class="orcid-id">
                        <a href="https://orcid.org/${escapeHtml(orcidId)}" target="_blank" rel="noopener">
                            https://orcid.org/${escapeHtml(orcidId)}
                        </a>
                    </p>
                    
                    ${biography ? `
                        <div class="orcid-section">
                            <h4>Biography</h4>
                            <p class="biography">${escapeHtml(biography.length > 150 ? biography.substring(0, 150) + '...' : biography)}</p>
                        </div>
                    ` : ''}
                    
                    ${currentEmployment ? `
                        <div class="orcid-section">
                            <h4>Current Position</h4>
                            <p><strong>${escapeHtml(currentEmployment['role-title'] || 'Position not specified')}</strong></p>
                            <p>${escapeHtml(currentEmployment.organization?.name || 'Organization not specified')}</p>
                            ${currentEmployment['start-date'] ? `
                                <p class="date-info">Since ${escapeHtml(currentEmployment['start-date'].year?.value || '')}</p>
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    ${highestEducation ? `
                        <div class="orcid-section">
                            <h4>Education</h4>
                            <p><strong>${escapeHtml(highestEducation['role-title'] || 'Degree not specified')}</strong></p>
                            <p>${escapeHtml(highestEducation.organization?.name || 'Institution not specified')}</p>
                            ${highestEducation['end-date'] ? `
                                <p class="date-info">${escapeHtml(highestEducation['end-date'].year?.value || '')}</p>
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    <div class="orcid-section orcid-stats">
                        <h4>Research Activity</h4>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-number">${worksCount}</span>
                                <span class="stat-label">Works</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">${employmentsList.length}</span>
                                <span class="stat-label">Positions</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">${educationsList.length}</span>
                                <span class="stat-label">Education</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">${fundingsCount}</span>
                                <span class="stat-label">Funding</span>
                            </div>
                        </div>
                    </div>
                    
                    ${keywords.length > 0 ? `
                        <div class="orcid-section">
                            <h4>Keywords</h4>
                            <div class="keywords">
                                ${keywords.slice(0, 5).map(keyword => `
                                    <span class="keyword-tag">${escapeHtml(keyword.content || keyword)}</span>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${urls.length > 0 ? `
                        <div class="orcid-section">
                            <h4>External Links</h4>
                            <div class="external-links">
                                ${urls.slice(0, 4).map(url => `
                                    <a href="${escapeHtml(url.url.value)}" target="_blank" rel="noopener" class="orcid-link">
                                        ${escapeHtml(url['url-name'] || 'Link')}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${worksCount > 0 ? `
                        <div class="orcid-section">
                            <h4>Recent Works</h4>
                            ${worksList.slice(0, 3).map(work => `
                                <div class="work-item">
                                    <p class="work-title">${escapeHtml(work.title?.title?.value || 'Untitled work')}</p>
                                    <p class="work-type">${escapeHtml(work.type || 'Unknown type')} ${work['publication-date']?.year?.value ? '(' + escapeHtml(work['publication-date'].year.value) + ')' : ''}</p>
                                </div>
                            `).join('')}
                            ${worksCount > 3 ? `<p class="more-info">+${escapeHtml(worksCount - 3)} more works</p>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        // Add close button handler
        const closeButton = popup.querySelector('.orcid-popup-close');
        closeButton.addEventListener('click', () => {
            removeExistingPopups();
        });

        return popup;
    }

    // Create error popup
    function createErrorPopup(orcidId, errorMessage) {
        const popup = document.createElement('div');
        popup.className = 'orcid-detector-popup error';
        popup.innerHTML = `
            <div class="orcid-popup-content">
                <div class="orcid-popup-header">
                    <h3>Error Loading Profile</h3>
                    <button class="orcid-popup-close">&times;</button>
                </div>
                <div class="orcid-profile-info">
                    <p>Could not load profile for ${escapeHtml(orcidId)}</p>
                    <p class="error-message">${escapeHtml(errorMessage)}</p>
                    <p class="orcid-id">
                        <a href="https://orcid.org/${escapeHtml(orcidId)}" target="_blank" rel="noopener">
                            View on ORCID.org
                        </a>
                    </p>
                </div>
            </div>
        `;

        const closeButton = popup.querySelector('.orcid-popup-close');
        closeButton.addEventListener('click', removeExistingPopups);

        return popup;
    }

    // Position popup relative to target element
    function positionPopup(popup, targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        popup.style.position = 'absolute';
        popup.style.top = (rect.bottom + scrollTop + 5) + 'px';
        popup.style.left = (rect.left + scrollLeft) + 'px';
        popup.style.zIndex = '10000';

        // Adjust if popup goes outside viewport
        const popupRect = popup.getBoundingClientRect();
        if (popupRect.right > window.innerWidth) {
            popup.style.left = (window.innerWidth - popupRect.width - 10) + 'px';
        }
        if (popupRect.bottom > window.innerHeight) {
            popup.style.top = (rect.top + scrollTop - popupRect.height - 5) + 'px';
        }
    }

    // Remove existing popups
    function removeExistingPopups() {
        const existingPopups = document.querySelectorAll('.orcid-detector-popup');
        existingPopups.forEach(popup => popup.remove());
        document.removeEventListener('click', handleOutsideClick);
    }

    // Handle clicks outside popup
    function handleOutsideClick(e) {
        if (!e.target.closest('.orcid-detector-popup') && 
            !e.target.closest('.orcid-detector-container')) {
            removeExistingPopups();
        }
    }

    // Setup mutation observer for dynamic content
    function setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            let hasNewContent = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        // Skip our own ORCID detector elements
                        if (node.nodeType === Node.ELEMENT_NODE && 
                            (node.classList?.contains('orcid-detector-container') ||
                             node.classList?.contains('orcid-detector-popup') ||
                             node.closest?.('.orcid-detector-container'))) {
                            return;
                        }
                        
                        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
                            hasNewContent = true;
                        }
                    });
                }
            });

            if (hasNewContent) {
                // Debounce processing to avoid excessive calls
                clearTimeout(window.orcidDetectorTimeout);
                window.orcidDetectorTimeout = setTimeout(() => {
                    // Process any new ORCID links with logos
                    processExistingORCIDLinks();
                    // Process text nodes for ORCID IDs
                    const newTextNodes = getTextNodes(document.body);
                    newTextNodes.forEach(processTextNode);
                }, 500);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();