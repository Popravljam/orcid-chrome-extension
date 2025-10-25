# Contributing to ORCID ID Detector

Thank you for your interest in contributing to ORCID ID Detector! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. **Check existing issues** to avoid duplicates
2. **Create a detailed issue** with:
   - Clear description of the problem or suggestion
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Browser version and OS
   - Screenshots if applicable

### Submitting Changes

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** following the coding standards below
4. **Test thoroughly** in Chrome (and Edge if possible)
5. **Commit your changes** with clear, descriptive messages
6. **Push to your fork** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request** with a clear description

## Coding Standards

### JavaScript

- Use modern ES6+ syntax
- Add comments for complex logic
- Handle errors gracefully
- Avoid blocking operations
- Keep functions focused and small

### CSS

- Follow existing naming conventions
- Support both light and dark modes
- Ensure accessibility (WCAG 2.1)
- Test with different zoom levels
- Avoid !important unless absolutely necessary

### HTML

- Use semantic HTML5 elements
- Include proper ARIA labels
- Keep structure clean and readable

## Testing

Before submitting changes:

1. **Load the extension** in developer mode
2. **Test on various websites** with different ORCID ID formats
3. **Check browser console** for errors
4. **Verify dark/light mode** compatibility
5. **Test popup functionality**
6. **Ensure no memory leaks** on long-running pages

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

## Development Setup

1. Clone the repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the project directory
5. Make changes and reload the extension to test

## Questions?

Feel free to open an issue for:
- Questions about the codebase
- Clarification on features
- Discussion of potential changes

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Happy Contributing! 🎉**
