# Chrome Web Store Listing - ORCID ID Detector

This document contains all the information needed to publish the extension to the Chrome Web Store.

## Basic Information

### Name
```
ORCID ID Detector
```

### Summary (132 characters max)
```
Detect ORCID IDs on any webpage and view researcher profiles instantly. Privacy-friendly, all processing done locally.
```

### Description (Detailed)
```
ORCID ID Detector automatically finds ORCID identifiers on any webpage and lets you view detailed researcher information with a single click.

🔍 KEY FEATURES

• Automatic Detection - Instantly spots ORCID IDs in various formats on any webpage
• One-Click Profiles - View comprehensive researcher information in a beautiful popup
• Visual Enhancement - Adds a subtle magnifying glass icon next to each detected ORCID ID
• Rich Information - See publications, affiliations, education, funding, and more
• Fast & Efficient - Profile data is cached to minimize API calls
• Privacy First - 100% local processing, zero data collection

🔒 PRIVACY & SECURITY

Your privacy is our top priority:
• NO data collection or tracking whatsoever
• NO remote servers - we don't operate any servers
• ALL processing happens locally in your browser
• ONLY direct API calls to ORCID's public API when YOU click on an ID
• NO cookies, analytics, or persistent storage
• Open source and fully auditable

📋 WHAT YOU'LL SEE

When you click on an ORCID ID, a popup displays:
• Researcher's name and biography
• Current position and institution
• Education history
• Research statistics (publications, funding, etc.)
• Keywords and research areas
• External links (personal website, social profiles)
• Recent publications with direct access

🌐 WORKS EVERYWHERE

Detects ORCID IDs on:
• Academic journals and articles
• University faculty pages
• Research databases
• Conference proceedings
• Institutional repositories
• Any webpage containing ORCID identifiers

⚠️ IMPORTANT DISCLAIMER

This is a third-party browser extension, NOT created or endorsed by ORCID. This is NOT official ORCID software. ORCID® is a registered trademark of ORCID, Inc. This independent tool uses ORCID's public API to enhance your browsing experience.

🔗 RESOURCES

• Privacy Policy: Full details on data handling
• Open Source: View and audit the code
• Documentation: Complete usage guide included

Perfect for researchers, journalists, librarians, academic administrators, and anyone who frequently encounters ORCID identifiers online.
```

### Category
```
Productivity
```

### Language
```
English
```

## Privacy Practices

### Single Purpose Description
```
This extension detects ORCID identifiers on web pages and displays publicly available researcher profile information from ORCID's public API in a popup window.
```

### Permission Justifications

#### Host Permissions (`<all_urls>`)
```
Justification: Required to scan web pages for ORCID identifiers. The extension needs to read page content to detect ORCID IDs in various formats (plain text, URLs, etc.). All processing happens locally in the browser - no data is sent to any server.

User Benefit: Users can automatically detect and interact with ORCID IDs on any webpage they visit without manually searching.
```

#### Host Permission (`https://pub.orcid.org/*`)
```
Justification: Required to fetch publicly available researcher profile information from ORCID's public API. API calls are only made when the user explicitly clicks on a detected ORCID ID.

User Benefit: Users can view detailed researcher information instantly without leaving their current page.
```

#### Active Tab Permission
```
Justification: Required to access the current page content for ORCID ID detection when the extension is active.

User Benefit: Enables automatic detection of ORCID IDs on the page the user is currently viewing.
```

### Data Usage Disclosure

**Does this extension collect user data?**
```
NO - This extension does NOT collect any user data.
```

**Data Handling Certification:**
- [x] Not collecting user data
- [x] Not selling user data
- [x] Not using or transferring user data for purposes unrelated to the item's single purpose
- [x] Not using or transferring user data to determine creditworthiness or for lending purposes

## Store Listing Assets

### Icon
- **128x128**: `icon128.png` (magnifying glass icon in green)
- Already created and included

### Screenshots (1280x800 or 640x400)

**You'll need to create 3-5 screenshots showing:**

1. **Screenshot 1**: ORCID ID detected on a webpage with magnifying glass icon
   - Caption: "Automatically detects ORCID IDs on any webpage"

2. **Screenshot 2**: Profile popup showing researcher information
   - Caption: "View detailed researcher profiles with one click"

3. **Screenshot 3**: Research activity statistics display
   - Caption: "See publications, affiliations, and research statistics"

4. **Screenshot 4**: Extension popup/management interface
   - Caption: "Simple and intuitive extension management"

5. **Screenshot 5**: Multiple ORCID IDs detected on a page
   - Caption: "Works with multiple IDs on the same page"

### Promotional Tile (440x280)
- Create a tile with the magnifying glass icon and text: "ORCID ID Detector - Privacy-First Research Tool"

### Small Tile (440x280)
- Same as promotional tile

## Support Information

### Website
```
https://github.com/[your-username]/orcid-chrome-extension
```

### Support Email
```
[Your support email address]
```

### Privacy Policy URL
```
https://github.com/[your-username]/orcid-chrome-extension/blob/main/PRIVACY_POLICY.md
```

## Pre-Submission Checklist

- [x] Extension tested in Chrome
- [x] All console errors fixed
- [x] Version number set to 1.1
- [x] Privacy policy created
- [x] README documentation complete
- [x] manifest.json validated
- [x] Icons created (16, 32, 48, 128)
- [ ] Screenshots created (3-5 required)
- [ ] Promotional images created
- [ ] GitHub repository set up (if using)
- [ ] Support email configured
- [ ] Privacy policy URL accessible online
- [ ] Extension tested on various websites
- [ ] Verified ORCID API calls work correctly

## Post-Publication Tasks

1. Update README with Chrome Web Store link
2. Monitor user reviews and feedback
3. Respond to user questions
4. Track any reported issues
5. Plan future updates based on feedback

## Version History

### Version 1.1 (Initial Release)
- Automatic ORCID ID detection
- One-click profile viewing
- Comprehensive researcher information display
- 100% privacy-friendly (zero data collection)
- Support for multiple ORCID ID formats
- Magnifying glass icon visual enhancement
- Dark mode support
- Responsive popup design

---

**Note**: Before submitting, ensure all placeholder URLs and email addresses are replaced with actual values.