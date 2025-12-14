#!/bin/bash

# Package ORCID ID Detector for Firefox
# Creates a .xpi file for Firefox Add-ons submission

VERSION=$(grep -o '"version": "[^"]*"' manifest.json | cut -d'"' -f4)
OUTPUT_FILE="orcid-detector-firefox-v${VERSION}.xpi"

echo "Creating Firefox package: ${OUTPUT_FILE}"

# Create zip file with .xpi extension
zip -r "${OUTPUT_FILE}" \
  manifest.json \
  content.js \
  styles.css \
  popup.html \
  icon16.png \
  icon32.png \
  icon48.png \
  icon128.png \
  LICENSE \
  -x "*.DS_Store" \
  -x "__MACOSX/*"

echo "Firefox package created: ${OUTPUT_FILE}"
echo ""
echo "To test in Firefox:"
echo "1. Open Firefox"
echo "2. Go to about:debugging#/runtime/this-firefox"
echo "3. Click 'Load Temporary Add-on'"
echo "4. Select the manifest.json file"
echo ""
echo "To submit to Firefox Add-ons:"
echo "1. Go to https://addons.mozilla.org/developers/"
echo "2. Upload ${OUTPUT_FILE}"
