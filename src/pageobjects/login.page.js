
/**
 * page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//android.widget.EditText[@content-desc="test-Username"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@content-desc="test-Password"]');
    }

    get btnSubmit () {
        return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    }

    get message() { 
        return $('//*[@content-desc="test-Error message"]'); 
    }

    get productsHeader() { 
        return $('//android.widget.TextView[@text="PRODUCTS"]'); 
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    async clickLogin() {
        await this.btnSubmit.click();
    }    

    async isErrorMessageDispalyed() {
        return await this.message.isDisplayed();
    }

    async getProductsHeader() {
        return this.productsHeader.getText();
    }

}

module.exports = new LoginPage();
