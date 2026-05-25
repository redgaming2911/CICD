# AI Agent Guidelines for CICD Project

## Project Overview
A minimal CI/CD TODO web application with login functionality. This is a compact, single-page project using Node.js with Vitest and Playwright for testing.

## Folder Structure

```
├── src/                 # Application logic (modules, utilities, stores)
│   └── loginStore.js   # Login authentication logic
├── styles/            # CSS stylesheets
│   └── main.css       # Main application styles
├── tests/             # Test files (mirror src structure)
│   └── unit/          # Unit tests (currently empty)
├── index.html         # Main entry point
├── gioi_thieu.html    # Introduction page
└── package.json       # Project dependencies and scripts
```

### Folder Usage Guidelines

- **`src/`**: Place all JavaScript modules here. Keep files focused and single-purpose. As the app grows, organize into subdirectories (e.g., `src/utils/`, `src/components/`, `src/stores/`)
- **`tests/unit/`**: Add test files matching the structure in `src/`. Example: create `tests/unit/loginStore.test.js` for testing `src/loginStore.js`
- **`styles/`**: Keep CSS organized by component or feature
- **Root**: Only HTML entry points and configuration files

## Build & Test Commands

```bash
# Run tests
npm test  # Currently not configured, needs setup

# Development server
npm run dev  # Not yet configured, use http-server to serve

# Serve files
npx http-server
```

### Required Setup
The project has Vitest and Playwright installed but test scripts are not configured. Before running tests, tasks like `npm run test` need proper configuration in `package.json`.

## Code Conventions

- **Language**: Comments are in Vietnamese (đăng nhập = login, mật khẩu = password)
- **Module Pattern**: Export individual functions from modules (e.g., `export function checkEmail()`)
- **Validation Functions**: Keep validation logic separate (e.g., `checkEmail`, `checkPassword` are separate from `login`)

## Quick Agent Tasks

### When adding new features:
1. Place new logic in `src/` with descriptive function names
2. Export all public functions
3. Add corresponding test file in `tests/unit/`
4. Update styles in `styles/main.css` if needed

### When testing:
1. Create test file in `tests/unit/` (e.g., `loginStore.test.js`)
2. Configure `npm test` script in `package.json` to run Vitest
3. Example test structure:
   ```javascript
   import { describe, it, expect } from 'vitest';
   import { checkEmail, checkPassword } from '../../src/loginStore.js';
   
   describe('loginStore', () => {
     it('should validate emails', () => {
       expect(checkEmail('')).toBe(false);
       expect(checkEmail('test@example.com')).toBe(true);
     });
   });
   ```

### When deploying:
- The app is a static site; use http-server or any static hosting
- Ensure `index.html` is the entry point for the main app

## Important Notes

- This is a very compact project—keep it organized for future growth
- Test files are currently not implemented despite Vitest being installed
- The login validation is basic; enhance security as the project matures
