const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set the path to the Chrome WebDriver executable
const service = new chrome.ServiceBuilder(require('chromedriver').path).build();
// chrome.setDefaultService(service);

// ... Rest of the code remains unchanged ...

const connectToDB = require('./mongoose');

// async function runTest() {
//   const db = await connectToDB();

//   const driver = new Builder().forBrowser('chrome').build();

//   try {
//     await driver.get('https://www.amazon.com/');

//     // Test case 1: Verify Home link functionality
//     await testLink(driver, 'Home', 'Amazon Homepage');

//     // Test case 2: Verify Categories link functionality
//     await testLink(driver, 'Categories', 'Product Categories Page');

//     // Test case 3: Verify Cart link functionality
//     await testLink(driver, 'Cart', 'Shopping Cart Page');

//     // Test case 4: Verify Orders link functionality
//     await testLink(driver, 'Orders', 'Orders Page');

//     // Test case 5: Verify Account link functionality
//     await testLink(driver, 'Account', 'Account Page');

//     // Test case 6: Verify Search functionality
//     await testSearch(driver, 'test', 'Search Results Page');

//     console.log('All test cases completed.');
//   } catch (err) {
//     console.error('Error executing test:', err);
//   } finally {
//     await driver.quit();
//     // db.close();
//   }
// }

// ... Rest of the code ...

async function testLink(driver, db, linkText, pageName) {
    // Rest of the function remains unchanged ...
  }
  
  async function testSearch(driver, db, searchQuery, pageName) {
    // Rest of the function remains unchanged ...
  }
  
  async function runTest() {
    const db = await connectToDB();
  
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.amazon.com/');
  
      // Test case 1: Verify Home link functionality
      await testLink(driver, db, 'Home', 'Amazon Homepage');
  
      // Test case 2: Verify Categories link functionality
      await testLink(driver, db, 'Categories', 'Product Categories Page');
  
      // Test case 3: Verify Cart link functionality
      await testLink(driver, db, 'Cart', 'Shopping Cart Page');
  
      // Test case 4: Verify Orders link functionality
      await testLink(driver, db, 'Orders', 'Orders Page');
  
      // Test case 5: Verify Account link functionality
      await testLink(driver, db, 'Account', 'Account Page');
  
      // Test case 6: Verify Search functionality
      await testSearch(driver, db, 'test', 'Search Results Page');
  
      console.log('All test cases completed.');
    } catch (err) {
      console.error('Error executing test:', err);
    } finally {
      await driver.quit();
      db.close();
    }
  }
  
  runTest();
  
async function testLink(driver, linkText, pageName) {
  const linkElement = await driver.findElement(By.linkText(linkText));
  await linkElement.click();
  await driver.sleep(2000); // Wait for the page to load (You can use explicit wait conditions for better synchronization)
  const pageTitle = await driver.getTitle();
  console.log(`Test: ${linkText} - ${pageTitle === pageName ? 'Passed' : 'Failed'}`);

  // Save the test result to MongoDB
  const collection = db.collection('test_results');
  const result = { linkText, pageName, pageTitle, testStatus: pageTitle === pageName ? 'Passed' : 'Failed' };
  await collection.insertOne(result);
}

async function testSearch(driver, searchQuery, pageName) {
  const searchInput = await driver.findElement(By.id('twotabsearchtextbox'));
  await searchInput.sendKeys(searchQuery, Key.RETURN);
  await driver.sleep(2000); // Wait for the search results page to load
  const pageTitle = await driver.getTitle();
  console.log(`Test: Search for "${searchQuery}" - ${pageTitle === pageName ? 'Passed' : 'Failed'}`);

  // Save the test result to MongoDB
  const collection = db.collection('test_results');
  const result = { linkText: `Search for "${searchQuery}"`, pageName, pageTitle, testStatus: pageTitle === pageName ? 'Passed' : 'Failed' };
  await collection.insertOne(result);
}

runTest();
