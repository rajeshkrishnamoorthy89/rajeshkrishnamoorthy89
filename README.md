# Playwright Test Automation Framework

A comprehensive test automation framework using Playwright with TypeScript, implementing:
- API Testing
- Performance Testing
- End-to-End (E2E) Testing
- Regression Testing

## Features

- Page Object Model (POM) architecture
- API test integration
- Performance metrics collection
- Screenshot capture on test failure
- Video recording of test runs
- Trace debugging enabled
- HTML test reports
- GitHub Actions CI/CD integration

## Directory Structure

```
src/
├── fixtures/      # Test data and fixtures
├── manual/        # Manual test cases
├── pages/         # Page Object Models
├── tests/         # Test suites
│   ├── api/       # API tests
│   ├── e2e/       # End-to-end tests
│   ├── performance/# Performance tests
│   └── regression/# Regression tests
└── utils/         # Utility functions and helpers
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run specific test suites:
```bash
npm run test:e2e         # Run E2E tests
npm run test:api         # Run API tests
npm run test:performance # Run performance tests
npm run test:regression  # Run regression tests
```

- Run tests in UI mode:
```bash
npm run test:ui
```

- Debug tests:
```bash
npm run test:debug
```

## Test Reports

After test execution, you can view the HTML report:
```bash
npm run show-report
```

## CI/CD Integration

The framework includes GitHub Actions workflows for:
- E2E tests on push and pull requests
- API tests on push and pull requests
- Weekly scheduled performance tests
- Cross-browser regression tests

## Additional Features

- Screenshots on test failure
- Video recording of test runs
- Trace debugging for failed tests
- Performance metrics collection
- Cross-browser testing support
