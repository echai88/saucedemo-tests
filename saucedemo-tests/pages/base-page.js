module.exports = class BasePage {

  //---------------------------------------
  // Elements
  //---------------------------------------

  get shoppingCartBtn() {
    return $('.shopping_cart_link')
  }

  get shoppingCartBadge(){
    return $('.shopping_cart_badge');
  }

  get continueBtn(){
    return $('#continue');
  }


  //---------------------------------------
  // Functions
  //---------------------------------------

  open(path) {
    return browser.url(path)
  }

  //---------------------------------------
  // Actions (click)
  //---------------------------------------

  async openShoppingCart(){
    await (await this.shoppingCartBtn).click();
  }

  async clickContinueBtn(){
    await (await this.continueBtn).click();
  }

  //---------------------------------------
  // Checks
  //---------------------------------------

  async checkShoppingCartBadge(count){
    expect(await this.shoppingCartBadge.getText()).toEqual(count);
  }
}
