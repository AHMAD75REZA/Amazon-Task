// T2: Automation Script to Test the Navigation Menu

// We'll use Node.js with the Jest testing framework for writing the automation script. We'll use the Puppeteer library to simulate user actions like mouse hovering and link clicks. First, let's set up the project:

// Initialize a Node.js project and install the necessary dependencies:

// npm init -y
// npm install jest puppeteer
// Create a test file, e.g., navigationMenu.test.js, and write the test cases using Jest and Puppeteer:
// javascript

const puppeteer = require('puppeteer');

describe('Amazon Navigation Menu Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://www.amazon.com/');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display main menu items', async () => {
    // Write your test logic here
  });

  it('should show dropdown menus when hovering over "Shop by Department"', async () => {
    // Write your test logic here
  });

  // More test cases for other scenarios
});
