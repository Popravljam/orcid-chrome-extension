# Privacy Policy for ORCID ID Detector

**Last Updated**: October 25, 2025  
**Version**: 1.1

## Overview

ORCID ID Detector is a browser extension that enhances your browsing experience by automatically detecting ORCID identifiers on web pages and displaying researcher information. This privacy policy explains how the extension handles data.

## Data Collection and Processing

### What We DO NOT Collect

**ORCID ID Detector does NOT collect, store, or transmit any personal data whatsoever.**

Specifically, the extension does NOT:

- ❌ Collect any personal information
- ❌ Track your browsing history
- ❌ Store any data on remote servers
- ❌ Send any information to third parties
- ❌ Use cookies or tracking technologies
- ❌ Collect analytics or usage statistics
- ❌ Store your search queries or interactions
- ❌ Access your private data or credentials

### How the Extension Works

**All processing happens locally in your browser:**

1. **Detection**: The extension scans web pages locally in your browser to detect ORCID IDs
2. **API Calls**: When you click on a detected ORCID ID, the extension makes a direct API call to ORCID's public API (pub.orcid.org) to retrieve publicly available researcher information
3. **Display**: The retrieved information is displayed in a popup window in your browser
4. **Caching**: Profile data is temporarily cached in your browser's memory during your browsing session to improve performance and reduce API calls

### Third-Party Services

The extension uses **ORCID's Public API** (https://pub.orcid.org) to retrieve publicly available researcher profiles. These API calls are:

- Made directly from your browser to ORCID's servers
- Only triggered when you explicitly click on an ORCID ID
- Only access publicly available information
- Not logged or stored by this extension

Please refer to [ORCID's Privacy Policy](https://orcid.org/privacy-policy) for information about how ORCID handles API requests.

## Permissions

The extension requests the following permissions:

### Required Permissions

- **`activeTab`**: Allows the extension to read content on the page you're currently viewing to detect ORCID IDs
  - **Why needed**: To scan web pages for ORCID identifiers
  - **What we access**: Only text content on the current page
  - **What we DON'T do**: We don't send this data anywhere or store it

- **`https://pub.orcid.org/*`**: Allows the extension to fetch profile data from ORCID's public API
  - **Why needed**: To retrieve researcher information when you click on an ORCID ID
  - **What we access**: Only public ORCID profile data
  - **What we DON'T do**: We don't send your personal information to ORCID

## Data Storage

- **Local Only**: All processing and temporary caching happens locally in your browser's memory
- **No Remote Storage**: No data is sent to any server operated by us
- **Session-Based**: Cached data is cleared when you close your browser
- **No Persistent Tracking**: No data persists between browsing sessions

## Your Rights

Since we don't collect any data, there is:

- No data to request
- No data to delete
- No data to export
- No data to modify

## Changes to This Policy

We may update this privacy policy from time to time. Any changes will be reflected in the extension's documentation with an updated "Last Updated" date.

## Contact

If you have questions about this privacy policy or the extension's data practices, please contact:

- **GitHub Issues**: [Report an issue or ask a question]
- **Email**: [Your contact email]

## Legal Disclaimer

This extension is not created, maintained, or endorsed by ORCID. ORCID® is a registered trademark of ORCID, Inc. This is an independent third-party tool that uses ORCID's public API.

## Compliance

This extension complies with:

- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Other applicable privacy laws

---

**Summary**: ORCID ID Detector is completely privacy-friendly. It performs all operations locally in your browser, collects no personal data, and sends no information to any servers except the direct API calls to ORCID's public API when you explicitly click on an ORCID ID.