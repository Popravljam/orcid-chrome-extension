# ORCID ID Detector - Chrome Extension (v1.1)

Automatically detect ORCID IDs on web pages and display researcher information in interactive popups.

## ⚠️ Important Disclaimer

**This is a third-party browser extension, NOT created or endorsed by ORCID. This is NOT official ORCID software.**

This independent tool uses ORCID's public API to enhance the browsing experience when encountering ORCID identifiers on web pages. ORCID® is a registered trademark of ORCID, Inc.

## 🌟 Features

- **🔍 Automatic Detection**: Finds ORCID IDs in various formats across any webpage
- **✨ Visual Enhancement**: Adds clickable magnifying glass icons next to detected IDs
- **📋 Profile Previews**: Shows researcher information in beautiful popup tooltips
- **🔗 Direct Links**: Quick access to full ORCID profiles
- **⚡ Real-time Processing**: Works with dynamic content and single-page apps
- **🎨 Responsive Design**: Adapts to different screen sizes and themes
- **🌙 Dark Mode Support**: Automatically adapts to dark/light theme preferences
- **♿ Accessibility**: Supports high contrast and reduced motion preferences

## 📸 Screenshots

### ORCID ID Detection
When the extension detects an ORCID ID on a page, it:
- Highlights the ID in green with an underline
- Adds a small magnifying glass icon next to it
- Makes both clickable for profile viewing

### Profile Popup
Clicking on an enhanced ORCID ID shows:
- Researcher's name and verified ORCID iD
- Current institutional affiliation
- Number of research works listed
- External links (personal website, social profiles)
- Direct link to full ORCID profile

## 🚀 Installation

### Method 1: Load Unpacked Extension (Developer Mode)

1. **Download the extension files** to your computer
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** (toggle in the top right)
4. **Click "Load unpacked"** and select the extension folder
5. **The extension is now active!** Look for the ORCID logo in your toolbar

### Method 2: From Chrome Web Store (Future)
*This extension is not yet published to the Chrome Web Store*

## 📖 Usage

### Automatic Detection
The extension automatically scans web pages for ORCID IDs in these formats:
- `https://orcid.org/0000-0000-0000-0000`
- `https://www.orcid.org/0000-0000-0000-0000`
- `orcid.org/0000-0000-0000-0000`
- `0000-0000-0000-0000` (plain format)
- Works with sandbox URLs too

### Viewing Profiles
1. **Look for the green underlined ORCID IDs** with small magnifying glass icons
2. **Click on either the ID or logo** to view profile information
3. **Profile popup shows**:
   - Researcher name
   - Current affiliation
   - Research works count
   - External links
4. **Click outside** or the X button to close the popup

### Extension Management
Click the magnifying glass icon in your Chrome toolbar to:
- Toggle the extension on/off
- View detection statistics
- Access extension information

## 🔧 Technical Details

### ORCID ID Detection
- Uses robust regex patterns to match various ORCID ID formats
- Processes both static and dynamic content
- Handles single-page applications with mutation observers
- Avoids duplicate processing for performance

### API Integration
- Uses ORCID's public API (no authentication required)
- Fetches profile data in real-time
- Caches responses to avoid duplicate API calls
- Handles API errors gracefully

### Privacy & Security

**🔒 100% Privacy-Friendly - Zero Data Collection**

This extension is designed with your privacy as the top priority:

- **✅ No data collection**: Extension doesn't collect, store, or transmit ANY personal data
- **✅ No remote servers**: We don't operate any servers - no data is sent to us
- **✅ Local processing only**: All ORCID ID detection happens locally in your browser
- **✅ No tracking**: Zero analytics, no usage statistics, no behavior tracking
- **✅ No cookies**: No tracking cookies or persistent identifiers
- **✅ Public API only**: Only accesses publicly available ORCID information via direct API calls
- **✅ You're in control**: API calls only happen when YOU click on an ORCID ID
- **✅ Memory-only cache**: Temporary caching in browser memory only, cleared when you close the browser
- **✅ Open source**: All code is visible and auditable

**The ONLY external communication** is direct API calls from your browser to ORCID's public API (pub.orcid.org) when you explicitly click on an ORCID ID. These calls retrieve publicly available researcher information.

See our [Privacy Policy](PRIVACY_POLICY.md) for complete details.

## 🛠 Development

### File Structure
```
orcid-chrome-extension/
├── manifest.json          # Extension configuration
├── content.js            # Main content script
├── styles.css            # Extension styles
├── popup.html            # Extension popup interface
├── icons/                # Extension icons (16px, 32px, 48px, 128px)
└── README.md            # This file
```

### Key Components

#### Content Script (`content.js`)
- Scans pages for ORCID IDs using regex
- Creates interactive elements
- Handles API calls to ORCID
- Manages popup display and positioning

#### Styles (`styles.css`)
- Defines popup appearance
- Handles theme adaptations (dark/light mode)
- Ensures accessibility compliance
- Prevents conflicts with host page styles

#### Popup (`popup.html`)
- Extension management interface
- Toggle functionality
- Usage statistics
- Feature overview

## 🔍 Supported ORCID ID Formats

The extension recognizes ORCID IDs in various formats commonly found on academic websites:

```
✅ https://orcid.org/0000-0000-0000-0000
✅ https://www.orcid.org/0000-0000-0000-0000
✅ http://orcid.org/0000-0000-0000-0000
✅ orcid.org/0000-0000-0000-0000
✅ 0000-0000-0000-0000
✅ ORCID: 0000-0000-0000-0000
✅ ORCID ID: 0000-0000-0000-0000
✅ Sandbox URLs (sandbox.orcid.org)
```

## 🌐 Browser Compatibility

- **Chrome**: Version 88+
- **Edge**: Chromium-based versions
- **Other Chromium browsers**: Should work but not officially tested

## 📋 Permissions Explained

The extension requests minimal permissions:

- **`activeTab`**: Allows reading content of the current tab when clicked
- **`https://pub.orcid.org/*`**: Enables API calls to fetch profile data
- **Host permissions**: Required to run content script on all websites

## 🐛 Troubleshooting

### Extension Not Working
1. Check if Developer Mode is enabled in `chrome://extensions/`
2. Reload the extension by clicking the refresh icon
3. Refresh the webpage you're testing on

### ORCID IDs Not Detected
1. Ensure the ID format is supported (see list above)
2. Check browser console for any JavaScript errors
3. Try disabling other extensions that might conflict

### Profile Popup Not Showing
1. Check your internet connection (API calls required)
2. Verify the ORCID ID is valid by visiting it directly
3. Some ORCID profiles may have limited public information

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use, modify, and distribute.

## 🔗 Related Links

- [ORCID Official Website](https://orcid.org)
- [ORCID API Documentation](https://info.orcid.org/documentation/)
- [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/)

## 📊 What's Next

Future features under consideration:
- Firefox extension version
- Batch ORCID ID processing
- Export functionality for detected researchers
- Integration with reference managers
- Custom highlighting styles
- Research collaboration suggestions

---

**Made with ❤️ for the research community**