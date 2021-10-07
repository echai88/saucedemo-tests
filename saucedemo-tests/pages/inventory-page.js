const BasePage = require('./base-page');

class InventoryPage extends BasePage {
  //---------------------------------------
  // Elements
  //---------------------------------------

  itemPriceEle(itemName) {
    return $(`//*[@class="inventory_item_description"]//*[text()="${itemName}"]/../../..//*[@class="inventory_item_price"]`);
  }

  addToCartBtn(itemName) {
    return $(`#add-to-cart-${itemName.toLowerCase().replace(/ /g, '-')}`);
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

  async clickAddToCartBtn(itemName) {
    await (await this.addToCartBtn(itemName)).click();
  }
}

module.exports = new InventoryPage();
