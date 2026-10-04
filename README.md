# QA Automation Practice

Practice repository for the [QA Automation Career](https://academiaqa.com) course by Academia QA — a 3-month program covering manual QA foundations and test automation across several tools and languages.

This repository holds my own exercises and solutions as I progress through the course. It is not course material, and it is not meant to be a complete record of everything covered — only the parts that produce versionable code.

## Scope

The course curriculum includes both manual/low-code tools and code-based automation frameworks:

- **Not included here:** manual testing fundamentals (test case design, bug reporting, BDD/Gherkin, Agile) and Katalon Studio. Katalon is a low-code, GUI-driven tool — its artifacts aren't meaningful source code, so there's nothing to version here.
- **Included here:** automation exercises that produce actual code — Cypress, Selenium WebDriver + Java, Playwright + TypeScript, and Postman collections, as they come up in the course.

## Structure

Each automation tool lives on its own branch, since the stacks (languages, dependencies, project layout) are unrelated to each other:

| Branch | Tool | Status |
|---|---|---|
| `main` | Cypress | active |
| `selenium-java` | Selenium WebDriver + Java | planned |
| `playwright-ts` | Playwright + TypeScript | planned |
| `postman-api` | Postman / API testing | planned |

### Cypress (`main`)

```
cypress/
  e2e/          test specs
  fixtures/     test data
  support/      custom commands and global configuration
cypress.config.js
package.json
```

## Running the Cypress tests

```
npm install
npx cypress open    # interactive runner
npx cypress run     # headless
```
