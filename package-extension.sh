#!/bin/bash

# ORCID ID Detector - Chrome Web Store Package Preparation Script
# This script prepares the extension for submission to the Chrome Web Store

echo "📦 Preparing ORCID ID Detector for Chrome Web Store submission..."
echo ""

# Set variables
EXTENSION_NAME="orcid-id-detector"
# Read version from manifest.json (prefer jq; fallback to grep)
if command -v jq &> /dev/null; then
  VERSION=$(jq -r '.version' manifest.json)
else
  VERSION=$(grep -o '"version": "[^"]*"' manifest.json | cut -d'"' -f4)
fi
PACKAGE_DIR="${EXTENSION_NAME}-v${VERSION}"
ZIP_NAME="${EXTENSION_NAME}-v${VERSION}.zip"

# Create clean package directory
echo "🗂️  Creating package directory..."
rm -rf "$PACKAGE_DIR"
mkdir -p "$PACKAGE_DIR"

# Copy required files
echo "📄 Copying extension files..."
cp manifest.json "$PACKAGE_DIR/"
cp content.js "$PACKAGE_DIR/"
cp styles.css "$PACKAGE_DIR/"
cp popup.html "$PACKAGE_DIR/"
cp icon16.png "$PACKAGE_DIR/"
cp icon32.png "$PACKAGE_DIR/"
cp icon48.png "$PACKAGE_DIR/"
cp icon128.png "$PACKAGE_DIR/"

# Copy documentation (optional but recommended)
echo "📚 Copying documentation..."
cp README.md "$PACKAGE_DIR/"
cp PRIVACY_POLICY.md "$PACKAGE_DIR/"
cp LICENSE "$PACKAGE_DIR/" 2>/dev/null || echo "⚠️  No LICENSE file found (optional)"

# Validate manifest.json
echo ""
echo "🔍 Validating manifest.json..."
if command -v jq &> /dev/null; then
    if jq empty "$PACKAGE_DIR/manifest.json" 2>/dev/null; then
        echo "✅ manifest.json is valid JSON"
    else
        echo "❌ manifest.json is invalid JSON"
        exit 1
    fi
else
    echo "⚠️  jq not installed, skipping JSON validation"
fi

# Check required files
echo ""
echo "📋 Checking required files..."
REQUIRED_FILES=("manifest.json" "content.js" "styles.css" "popup.html" "icon16.png" "icon32.png" "icon48.png" "icon128.png")
ALL_PRESENT=true

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$PACKAGE_DIR/$file" ]; then
        echo "✅ $file"
    else
        echo "❌ Missing: $file"
        ALL_PRESENT=false
    fi
done

if [ "$ALL_PRESENT" = false ]; then
    echo ""
    echo "❌ Some required files are missing. Please add them before packaging."
    exit 1
fi

# Check file sizes
echo ""
echo "📊 Checking file sizes..."
TOTAL_SIZE=$(du -sh "$PACKAGE_DIR" | cut -f1)
echo "Total package size: $TOTAL_SIZE"

# Create ZIP archive
echo ""
echo "🗜️  Creating ZIP archive..."
cd "$PACKAGE_DIR"
zip -r "../$ZIP_NAME" . -x "*.DS_Store" "*.git*" > /dev/null
cd ..

if [ -f "$ZIP_NAME" ]; then
    ZIP_SIZE=$(du -h "$ZIP_NAME" | cut -f1)
    echo "✅ Created: $ZIP_NAME ($ZIP_SIZE)"
else
    echo "❌ Failed to create ZIP archive"
    exit 1
fi

# Final checklist
echo ""
echo "📝 Pre-submission checklist:"
echo ""
echo "✅ Extension files packaged"
echo "✅ Version set to $VERSION"
echo "✅ Privacy policy included"
echo "✅ Documentation included"
echo ""
echo "⚠️  Before submitting to Chrome Web Store, ensure:"
echo "   - You have created 3-5 screenshots (1280x800 or 640x400)"
echo "   - You have created promotional images (440x280)"
echo "   - You have set up a support email address"
echo "   - Privacy policy is accessible online (e.g., GitHub)"
echo "   - You have tested the extension thoroughly"
echo ""
echo "📦 Package ready: $ZIP_NAME"
echo ""
echo "🚀 Next steps:"
echo "   1. Go to: https://chrome.google.com/webstore/devconsole"
echo "   2. Click 'New Item'"
echo "   3. Upload: $ZIP_NAME"
echo "   4. Fill in the store listing information (see CHROME_STORE_LISTING.md)"
echo "   5. Add screenshots and promotional images"
echo "   6. Submit for review"
echo ""
echo "✨ Good luck with your submission!"