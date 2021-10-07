const BasePage = require('./base-page');
const CommonHelper = require("../../helpers/common-helper");

class CheckoutPage extends BasePage {

    //---------------------------------------
    // Elements
    //---------------------------------------

    get txtFirstName() {
        return $('#first-name');
    }

    get txtLastName() {
        return $('#last-name');
    }

    get txtZipCode() {
        return $('#postal-code');
    }

    get txtSubTotal() {
        return $('.summary_subtotal_label');
    }

    get txtTax() {
        return $('.summary_tax_label');
    }

    get txtTotalPrice() {
        return $('.summary_total_label');
    }

    get finishBtn(){
        return $('#finish');
    }

    get checkoutCompleteContainer(){
        return $('#checkout_complete_container');
    }

    //---------------------------------------
    // Functions
    //---------------------------------------

    //---------------------------------------
    // Actions (click)
    //---------------------------------------

    async clickFinishBtn() {
        await (await this.finishBtn).click();
    }

    //---------------------------------------
    // Actions (fill)
    //---------------------------------------

    async fillFirstNameField(firstName) {
        await (await this.txtFirstName).setValue(firstName);
    }

    async fillLastName(lastName) {
        await (await this.txtLastName).setValue(lastName);
    }

    async fillZipCode(zipCode) {
        await (await this.txtZipCode).setValue(zipCode);
    }

    async fillPersonalInfoAndContinue(info) {
        await this.fillFirstNameField(info.firstName);
        await this.fillLastName(info.lastName);
        await this.fillZipCode(info.zipCode);
        await this.clickContinueBtn();
    }

    //---------------------------------------
    // Checks
    //---------------------------------------

    async checkItemTotal(price) {
        expect(await this.txtSubTotal.getText()).toContain(CommonHelper.formatNumberToCurrency(price, 'USD'));
    }

    async checkTaxValue(taxValue) {
        expect(await this.txtTax.getText()).toContain(CommonHelper.formatNumberToCurrency(taxValue, 'USD'));
    }

    async checkTotalValue(totalPrice) {
        expect(await this.txtTotalPrice.getText()).toContain(CommonHelper.formatNumberToCurrency(totalPrice, 'USD'));
    }

    async checkCompletedPage() {
        await (await this.checkoutCompleteContainer).waitForDisplayed();
    }
}

module.exports = new CheckoutPage();