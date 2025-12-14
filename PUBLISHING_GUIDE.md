# Publishing Guide - ORCID ID Detector v1.2

## 🎉 Your Extension is Ready for Publication!

This guide will walk you through publishing your extension to both the Chrome Web Store and Firefox Add-ons.

## 📦 What's Included

Your extension package includes:

### Core Files
- ✅ `manifest.json` - Extension configuration (v1.2, Chrome & Firefox compatible)
- ✅ `content.js` - Main detection and popup logic
- ✅ `styles.css` - Styling for popups and elements
- ✅ `popup.html` - Extension management interface
- ✅ `icon16.png`, `icon32.png`, `icon48.png`, `icon128.png` - Extension icons

### Documentation
- ✅ `README.md` - Comprehensive user documentation with privacy details
- ✅ `PRIVACY_POLICY.md` - Full privacy policy (REQUIRED for Chrome Web Store)
- ✅ `LICENSE` - MIT License with ORCID disclaimer
- ✅ `CHROME_STORE_LISTING.md` - Complete store listing information
- ✅ `INSTALL.md` - Installation instructions for users

### Tools
- ✅ `package-extension.sh` - Chrome Web Store packaging script
- ✅ `package-firefox.sh` - Firefox Add-ons packaging script

## 🚀 Quick Publishing Steps

# Chrome Web Store Publishing

### Step 1: Create the Chrome Package

Run the packaging script:

```bash
./package-extension.sh
```

This will:
- Create a clean package directory
- Copy all necessary files
- Validate the manifest.json
- Create a ZIP file ready for upload
- Show you a checklist of remaining tasks

The script creates: `orcid-id-detector-v1.2.zip`

### Step 2: Create Required Assets

Before submitting, you need to create screenshots and promotional images:

#### Screenshots (3-5 required, 1280x800 or 640x400)

**How to create:**
1. Load the extension in Chrome
2. Visit a page with ORCID IDs (e.g., your test page at lazarcovs.com)
3. Take screenshots showing:
   - ORCID IDs detected with magnifying glass icons
   - The profile popup with researcher information
   - Research statistics display
   - Multiple IDs on one page
   - The extension popup/settings

**Tips:**
- Use a clean, professional-looking webpage
- Ensure text is readable
- Show the extension in action
- Highlight key features

#### Promotional Images (440x280)

Create 1-2 promotional tiles with:
- The magnifying glass icon
- Extension name "ORCID ID Detector"
- Tagline: "Privacy-First Research Tool"
- Use the ORCID green color (#A6CE39 or #8FB82B)

### Step 3: Set Up Prerequisites

Before submitting to Chrome Web Store, ensure you have:

1. **Developer Account**
   - Go to: https://chrome.google.com/webstore/devconsole
   - Pay the $5 one-time registration fee
   - Verify your email

2. **Support Email**
   - Set up a dedicated support email
   - Update `CHROME_STORE_LISTING.md` with the email

3. **Privacy Policy URL**
   - Upload `PRIVACY_POLICY.md` to GitHub (or your website)
   - Make it publicly accessible
   - Get the direct URL (e.g., `https://github.com/yourusername/orcid-chrome-extension/blob/main/PRIVACY_POLICY.md`)

4. **GitHub Repository (Recommended)**
   - Create a public GitHub repository
   - Upload all extension files
   - This shows transparency and allows users to audit the code

### Step 4: Submit to Chrome Web Store

1. **Go to Chrome Web Store Developer Dashboard**
   - https://chrome.google.com/webstore/devconsole

2. **Click "New Item"**

3. **Upload the ZIP file**
   - Upload `orcid-id-detector-v1.2.zip`

4. **Fill in Store Listing**
   - Copy information from `CHROME_STORE_LISTING.md`
   - **Name**: ORCID ID Detector
   - **Summary**: (see CHROME_STORE_LISTING.md)
   - **Description**: (see CHROME_STORE_LISTING.md)
   - **Category**: Productivity
   - **Language**: English

5. **Add Privacy Information**
   - **Single purpose**: Detect ORCID IDs and display researcher profiles
   - **Permission justifications**: (see CHROME_STORE_LISTING.md)
   - **Data usage**: NO data collection
   - **Privacy policy URL**: Your GitHub or website URL

6. **Upload Assets**
   - Icon: Already included in ZIP (icon128.png)
   - Screenshots: Upload 3-5 screenshots you created
   - Promotional images: Upload the 440x280 tiles

7. **Add Support Information**
   - Website: Your GitHub repo or personal site
   - Support email: Your support email address

8. **Review and Submit**
   - Review all information carefully
   - Click "Submit for Review"

### Step 5: Wait for Review

- **Review time**: Usually 1-3 business days (can be longer)
- **Email notifications**: You'll receive updates via email
- **Review status**: Check the developer dashboard for status

## ✅ Pre-Submission Checklist

Before clicking "Submit", verify:

- [ ] Extension ZIP uploaded and accepted
- [ ] All store listing fields filled out
- [ ] Privacy policy URL accessible online
- [ ] Support email configured
- [ ] 3-5 screenshots uploaded
- [ ] Promotional images uploaded (440x280)
- [ ] Permission justifications provided
- [ ] Single purpose clearly stated
- [ ] Data usage disclosure completed (NO data collection)
- [ ] Extension tested thoroughly in Chrome
- [ ] All console errors fixed
- [ ] ORCID API calls working correctly

## 🔍 What Chrome Reviewers Check

The review team will verify:

1. **Functionality**: Extension works as described
2. **Privacy**: Follows privacy policy and data usage claims
3. **Permissions**: Only requests necessary permissions
4. **Content**: No misleading or inappropriate content
5. **Branding**: Doesn't violate trademarks (our disclaimers cover this)
6. **Metadata**: Store listing accurately describes the extension

## 📧 After Publication

Once approved, you should:

1. **Update README**
   - Add Chrome Web Store badge
   - Add installation link

2. **Monitor Reviews**
   - Respond to user reviews
   - Address issues promptly

3. **Track Analytics**
   - Monitor installation numbers
   - Check user feedback

4. **Plan Updates**
   - Based on user feedback
   - Fix any reported bugs
   - Add requested features

## 🐛 If Your Submission is Rejected

Don't worry! Rejections are common. Usually for:

1. **Privacy issues**: Make sure privacy policy is clear and accessible
2. **Permission justification**: Ensure all permissions are explained
3. **Misleading content**: Verify store listing accurately describes features
4. **Brand issues**: Our disclaimers should cover ORCID trademark concerns

If rejected:
- Read the rejection email carefully
- Fix the specified issues
- Resubmit with explanations

## 📞 Support Resources

- **Chrome Web Store Help**: https://support.google.com/chrome_webstore/
- **Developer Policies**: https://developer.chrome.com/docs/webstore/program-policies/
- **Best Practices**: https://developer.chrome.com/docs/extensions/mv3/

## 🎯 Success Tips

1. **Be patient**: Review can take time
2. **Be thorough**: Complete all fields in the store listing
3. **Be transparent**: Clear privacy policy and permissions
4. **Be responsive**: Answer user questions promptly
5. **Be iterative**: Update based on feedback

## 📊 Key Points About Your Extension

**Strengths for Review:**
- ✅ Clear single purpose (ORCID ID detection)
- ✅ No data collection (privacy-friendly)
- ✅ Transparent about being third-party
- ✅ Only uses public APIs
- ✅ Well-documented code
- ✅ Comprehensive privacy policy
- ✅ Minimal permissions requested

**Potential Questions (and Answers):**
- Q: "Why do you need access to all URLs?"
  A: To detect ORCID IDs on any webpage the user visits
  
- Q: "What data do you collect?"
  A: None. All processing is local, no data sent to our servers
  
- Q: "Are you affiliated with ORCID?"
  A: No, clearly stated in disclaimers throughout

---

# Firefox Add-ons Publishing

## 📦 Firefox-Specific Steps

### Step 1: Create the Firefox Package

Run the Firefox packaging script:

```bash
./package-firefox.sh
```

This creates: `orcid-detector-firefox-v1.2.xpi`

### Step 2: Set Up Firefox Developer Account

1. **Create Account**
   - Go to: https://addons.mozilla.org/developers/
   - Sign up or log in with Firefox Account
   - No registration fee required (unlike Chrome)

2. **Verify Email**
   - Confirm your email address

### Step 3: Submit to Firefox Add-ons

1. **Go to Developer Hub**
   - https://addons.mozilla.org/developers/addon/submit/distribution

2. **Choose Distribution**
   - Select "On this site" (for Firefox Add-ons store)

3. **Upload the XPI File**
   - Upload `orcid-detector-firefox-v1.2.xpi`
   - Firefox will automatically validate the package

4. **Fill in Add-on Details**
   - **Name**: ORCID ID Detector
   - **Summary**: Automatically detect ORCID IDs and display researcher profiles
   - **Description**: (use description from CHROME_STORE_LISTING.md)
   - **Categories**: Search Tools, Privacy & Security
   - **License**: MIT
   - **Privacy Policy**: Same URL as Chrome version
   - **Support Email**: Your support email
   - **Support Website**: Your GitHub repo URL

5. **Upload Screenshots**
   - Use the same screenshots as Chrome (Firefox accepts various sizes)
   - 3-5 screenshots recommended

6. **Version Notes**
   - Add release notes for version 1.2:
     ```
     - Initial Firefox release
     - Improved icon positioning
     - Cross-browser compatibility
     ```

7. **Technical Details**
   - Firefox will show detected permissions
   - Review and confirm they're accurate

8. **Submit for Review**
   - Click "Submit Version"
   - Firefox review is typically faster than Chrome (1-2 days)

### Step 4: Automated vs Manual Review

Firefox has two review tracks:

- **Automated Review**: Usually completes in minutes to hours
- **Manual Review**: Required for:
  - First-time submission
  - Permissions changes
  - Code obfuscation

Your extension will likely go through manual review initially.

## ✅ Firefox-Specific Checklist

- [ ] Firefox developer account created
- [ ] XPI package created and tested
- [ ] Extension tested in Firefox
- [ ] All listing information prepared
- [ ] Screenshots uploaded
- [ ] Privacy policy URL accessible
- [ ] Support information provided
- [ ] Version notes added

## 🔍 What Firefox Reviewers Check

1. **Security**: No malicious code or vulnerabilities
2. **Privacy**: Follows stated privacy policy
3. **Performance**: No excessive resource usage
4. **Quality**: Works as described
5. **Compliance**: Follows Firefox add-on policies

## 📧 After Firefox Publication

1. **Get Your Add-on URL**
   - Will be: `https://addons.mozilla.org/firefox/addon/orcid-id-detector/`

2. **Add Firefox Badge to README**
   ```markdown
   [![Firefox Add-on](https://img.shields.io/amo/v/orcid-id-detector)](https://addons.mozilla.org/firefox/addon/orcid-id-detector/)
   ```

3. **Monitor Reviews**
   - Respond to user reviews on both platforms

## 📊 Firefox vs Chrome Publishing

| Aspect | Chrome | Firefox |
|--------|--------|--------|
| Registration Fee | $5 one-time | Free |
| Review Time | 1-3 days | 1-2 days |
| Automated Review | No | Yes (for some) |
| Package Format | .zip | .xpi |
| Developer Dashboard | chrome.google.com/webstore | addons.mozilla.org |

---

## 🎉 Ready to Publish!

Your extension is well-prepared for submission. The combination of:
- Strong privacy protections
- Clear documentation
- Transparent disclaimers
- Useful functionality

...should result in a smooth review process.

**Good luck with your submission! 🚀**

If you have questions, refer to `CHROME_STORE_LISTING.md` for detailed store listing information.