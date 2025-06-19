Here's your `README.md` content based on the provided instructions:

---

### 📘 README.md

````markdown
# Chai & Code – Playwright Automation Project

This repository contains Playwright-based end-to-end tests for browser automation. You can run tests either **locally using Playwright CLI** or via a **Jenkins pipeline**.

---

## ✅ Option 1: Run Tests Locally

### 🔁 Step-by-Step

1. **Clone the Repository**

```bash
git clone https://github.com/Mukesh-50/chaiandcode.git
cd chaiandcode
````

2. **Install Dependencies**

```bash
npm install
```

3. **Run Tests in Specific Browsers**

* **Run tests in Chromium**

  ```bash
  npx playwright test --project=chromium --headed
  ```

* **Run tests in Firefox**

  ```bash
  npx playwright test --project=firefox --headed
  ```

* **Run tests in WebKit**

  ```bash
  npx playwright test --project=webkit --headed
  ```

* **Run tests in All Browsers**

  ```bash
  npx playwright test --headed
  ```

---

## ✅ Option 2: Run Using Jenkins Pipeline

If you have Jenkins set up locally or on a server, you can execute all tests using the configured pipeline:

👉 **[Run Jenkins Pipeline](http://localhost:8080/view/chaiandcode/job/TestPipeline_LMS_Regression_Test/)**

---

## Tech Stack

* [Playwright](https://playwright.dev/)
* JavaScript
* Jenkins (for CI/CD)

---

## Folder Structure

```
chaiandcode/
├── tests/                    # Test scripts
├── playwright.config.js      # Playwright configuration
├── package.json              # NPM scripts
└── README.md                 # Project documentation
```

---

## Note

Make sure you have the following installed:

* Node.js (v16+)
* Playwright (`npx playwright install`)
* Browsers installed via Playwright
* Jenkins (for Option 2)

