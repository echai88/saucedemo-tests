const BasePage = require('./base-page');

class LoginPage extends BasePage {
    get txtUserName() {
        return $('#user-name')
    }

    get txtPassword() {
        return $('#password')
    }

    get loginBtn() {
        return $('#login-button')
    }

    //---------------------------------------
    // Functions
    //---------------------------------------

    open() {
        return super.open('/');
    }

    async login(userName, password) {
        await this.fillUserNameField(userName);
        await this.fillPasswordField(password);
        await this.clickLoginBtn();
    }

    //---------------------------------------
    // Actions (fill)
    //---------------------------------------

    async fillUserNameField(email) {
        await (await this.txtUserName).setValue(email);
    }

    async fillPasswordField(password) {
       await (await this.txtPassword).setValue(password);
    }

    //---------------------------------------
    // Actions (click)
    //---------------------------------------

    async clickLoginBtn() {
        await (await this.loginBtn).click();
    }
}

module.exports = new LoginPage();