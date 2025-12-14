# Quick Start: Publishing to Chrome & Firefox

## 📦 Packages Ready

You have two packages ready to submit:
- ✅ **Chrome**: `orcid-id-detector-v1.1.zip` 
- ✅ **Firefox**: `orcid-detector-firefox-v1.2.xpi`

## 🚀 Chrome Web Store (5-Step Process)

### 1. Setup ($5 fee)
- Go to: https://chrome.google.com/webstore/devconsole
- Pay $5 one-time registration fee
- Verify your email

### 2. Prepare Assets
You need:
- **3-5 screenshots** (1280x800 or 640x400)
  - Show ORCID IDs being detected
  - Show the profile popup
  - Show extension features
- **Promotional images** (440x280) 
  - Optional but recommended

### 3. Upload Extension
- Click "New Item"
- Upload `orcid-id-detector-v1.1.zip`
- Wait for automatic validation

### 4. Fill Store Listing
Copy from `CHROME_STORE_LISTING.md`:
- **Name**: ORCID ID Detector
- **Summary**: Short description
- **Description**: Full description
- **Category**: Productivity
- **Privacy Policy URL**: Upload PRIVACY_POLICY.md to GitHub first
- **Support Email**: Your email

### 5. Submit
- Upload screenshots
- Review all information
- Click "Submit for Review"
- Wait 1-3 days for review

## 🦊 Firefox Add-ons (5-Step Process)

### 1. Setup (FREE)
- Go to: https://addons.mozilla.org/developers/
- Sign up with Firefox Account (no fee!)
- Verify your email

### 2. Prepare Assets
- **Use same screenshots as Chrome** (Firefox is flexible with sizes)
- 3-5 screenshots recommended

### 3. Upload Extension
- Go to: https://addons.mozilla.org/developers/addon/submit/distribution
- Choose "On this site"
- Upload `orcid-detector-firefox-v1.2.xpi`
- Wait for automatic validation

### 4. Fill Add-on Details
- **Name**: ORCID ID Detector
- **Summary**: Same as Chrome
- **Description**: Use CHROME_STORE_LISTING.md description
- **Categories**: Search Tools, Privacy & Security
- **License**: MIT
- **Privacy Policy**: Same URL as Chrome
- **Support Email**: Same as Chrome
- **Version Notes**: 
  ```
  - Initial Firefox release
  - Improved icon positioning
  - Cross-browser compatibility
  ```

### 5. Submit
- Upload screenshots
- Review permissions
- Click "Submit Version"
- Wait 1-2 days for review (often faster!)

## ✅ Before Submitting (Both Platforms)

Make sure you have:
- [ ] Privacy policy uploaded to GitHub (get public URL)
- [ ] Support email set up
- [ ] 3-5 screenshots created
- [ ] Extension tested in target browser
- [ ] All documentation reviewed

## 📸 Creating Screenshots

### Easy Way:
1. Load extension in browser
2. Visit a page with ORCID IDs (e.g., research papers)
3. Use browser's built-in screenshot tool
4. Capture:
   - ORCID ID detection (green text + icon)
   - Profile popup open
   - Multiple detections on one page
   - Extension popup/settings

### Pro Tip:
- Use a clean, professional website
- Ensure text is readable
- Crop to relevant area
- Save as PNG

## 🔄 After Publishing

Once approved on both platforms:

1. **Update README.md** with install badges:
   ```markdown
   [![Chrome Web Store](https://img.shields.io/chrome-web-store/v/YOUR_EXTENSION_ID)](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)
   [![Firefox Add-on](https://img.shields.io/amo/v/orcid-id-detector)](https://addons.mozilla.org/firefox/addon/orcid-id-detector/)
   ```

2. **Share on social media**
3. **Monitor reviews** on both platforms
4. **Respond to user feedback**

## 📊 Key Differences

| Feature | Chrome | Firefox |
|---------|--------|---------|
| Cost | $5 one-time | FREE |
| Review Time | 1-3 days | 1-2 days |
| Package | .zip | .xpi |
| Updates | Manual review each time | Often automated |

## 🆘 Need Help?

- Full details in: `PUBLISHING_GUIDE.md`
- Chrome listing copy: `CHROME_STORE_LISTING.md`
- Privacy policy: `PRIVACY_POLICY.md`

## 🎉 You're Ready!

Both packages are created and ready to upload. Just follow the steps above for each platform.

**Good luck! 🚀**
