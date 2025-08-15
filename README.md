
# Playwright Commands

Below is a list of commonly used Playwright commands for testing and debugging:

### Installation
- **Install Playwright:**
  ```bash
  npm init playwright@latest

### Running Tests
- **Run all test cases:**
  ```bash
  npx playwright test

- **Show the test report:**
  ```bash
  npx playwright show-report

- **Run tests for a specific project (e.g., Chromium):**
  ```bash
  npx playwright test --project=chromium

- **Run tests in headed mode (with browser UI):**
  ```bash
  npx playwright test --project=chromium --headed

- **Run a specific test file:**
  ```bash
  npx playwright test example.spec.ts --project=chromium

- **Run a specific test case by name:**
  ```bash
  npx playwright test -g "has title" --project=chromium

### Debugging and Tracing
- **Run tests in UI mode:**
  ```bash
  npx playwright test --ui

- **Run tests with tracing enabled:**
  ```bash
  npx playwright test --project=chromium --trace on

- **Run tests in debug mode:**
  ```bash
  npx playwright test --project=chromium --debug

### Reports and Snapshots
- **Update snapshots for visual testing:**
  ```bash
  npx playwright test --update-snapshots

