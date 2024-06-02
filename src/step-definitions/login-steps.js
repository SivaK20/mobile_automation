const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');


Given('the app is launched', async () => {
    // Assuming the app is already launched by WebdriverIO
});

When('I enter username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

When('I click on the login button', async() => {
    await LoginPage.clickLogin();
});

Then('I should see {string}', async (expectedMessage) => {
    let actualMessage;
    if (expectedMessage === 'PRODUCTS') {
        actualMessage = await LoginPage.getProductsHeader();
        assert.strictEqual(actualMessage, expectedMessage, `Expected to see "${expectedMessage}" but saw "${actualMessage}"`);
    } else {
        const isErrorMessageDisplayed = await LoginPage.isErrorMessageDispalyed();
        expect(isErrorMessageDisplayed).toBe(true);
    }
    
});

