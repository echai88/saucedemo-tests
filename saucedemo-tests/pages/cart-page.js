const BasePage = require('./base-page');

class CartPage extends BasePage {
  //---------------------------------------
  // Elements
  //---------------------------------------

  itemPriceEle(itemName) {
    return $(`//*[@class="cart_item"]//*[text()="${itemName}"]/../../..//*[@class="inventory_item_price"]`);
  }

  get checkoutBtn() {
    return $('#checkout');
  }

  //---------------------------------------
  // Functions
  //---------------------------------------

  async getItemPrice(itemName) {
    return this.itemPriceEle(itemName).getText();
  }

  //---------------------------------------
  // Actions (click)
  //---------------------------------------

  async clickCheckoutBtn() {
    await (await this.checkoutBtn).click();
  }

  //---------------------------------------
  // Checks
  //---------------------------------------

  async checkShoppingCartBadge(count) {
    expect(count).toEqual(await this.shoppingCartBadge.getText());
  }
}

module.exports = new CartPage();
