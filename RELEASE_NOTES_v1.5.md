# Release Notes - ORCID ID Detector v1.5

**Release Date:** December 24, 2024

## 🐛 Bug Fixes

### Fixed ORCID Profile Statistics Display
- **Issue:** Profile popups were showing "0" for Works, Positions, and Education even when researchers had content in these sections
- **Root Cause:** The extension was parsing ORCID API responses using incorrect property names that don't exist in the API structure
- **Fix:** Updated API response parsing to use correct ORCID v3.0 API structure:
  - Works: Now correctly reads from `group` array instead of non-existent `works-summary`
  - Employments: Now correctly reads from `affiliation-group` array instead of non-existent `employment-summary`
  - Education: Now correctly reads from `affiliation-group` array instead of non-existent `education-summary`
  - Works display: Now properly extracts `work-summary` from within each group

### What Changed
- Line 375: `works['works-summary']` → `works.group`
- Line 379: `employments['employment-summary']` → `employments['affiliation-group']`
- Line 383: `educations['education-summary']` → `educations['affiliation-group']`
- Lines 491-500: Updated works display to iterate through groups and extract work-summary items

## ✅ Testing
Verified with ORCID ID `0009-0009-1707-1845` which correctly displays:
- 5 Works
- 1 Position
- 2 Education entries
- 0 Funding (correctly showing zero)

## 📦 Impact
This fix ensures that researchers' profiles display accurate statistics and that their works, positions, and education are properly shown to users browsing web pages.

## 🔗 Links
- [ORCID API v3.0 Documentation](https://info.orcid.org/documentation/api-tutorials/api-tutorial-read-data-on-a-record/)
- [GitHub Repository](https://github.com/Popravljam/orcid-chrome-extension)
