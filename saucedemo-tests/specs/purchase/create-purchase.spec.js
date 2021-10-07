const { addFeature } = require('@wdio/allure-reporter').default;
const LoginPage = require('../../pages/login-page');
const InventoryPage = require('../../pages/inventory-page');
const CheckoutPage = require('../../pages/checkout-page');
const CartPage = require('../../pages/cart-page');
const CommonHelper = require('../../../helpers/common-helper');
const usersData = require('../../test-data/users/index');
const checkoutData = require('../../test-data/checkout/index');

describe('Create purchase', () => {
  it('can complete purchase', async () => {
    addFeature('can complete purchase');

    const { standardUser } = usersData.users;
    const personalInfo = checkoutData.checkoutInfo;
    const backpackItem = 'Sauce Labs Backpack';
    const taxPercent = 8;
    let totalPrice;
    let taxValue;
    let itemPrice;

    // Login
    await LoginPage.open();
    await LoginPage.login(standardUser.userName, standardUser.password);

    // Add item to shopping cart
    itemPrice = parseFloat((await InventoryPage.getItemPrice(backpackItem)).replace('$', ''));
    taxValue = await CommonHelper.percentage(parseFloat(itemPrice), taxPercent);
    totalPrice = itemPrice + taxValue;
    await InventoryPage.clickAddToCartBtn(backpackItem);
    await InventoryPage.checkShoppingCartBadge('1');
    await InventoryPage.openShoppingCart();

    // Check sopping cart item
    expect(CommonHelper.formatNumberToCurrency(itemPrice, 'USD')).toEqual(await CartPage.getItemPrice(backpackItem));
    await CartPage.clickCheckoutBtn();

    // Checkout steps
    await CheckoutPage.fillPersonalInfoAndContinue(personalInfo);
    expect(CommonHelper.formatNumberToCurrency(itemPrice, 'USD')).toEqual(await CartPage.getItemPrice(backpackItem));

    // Check checkout details
    await CheckoutPage.checkItemTotal(itemPrice);
    await CheckoutPage.checkTaxValue(taxValue);
    await CheckoutPage.checkTotalValue(totalPrice);

    // Finish purchase
    await CheckoutPage.clickFinishBtn();
    await CheckoutPage.checkCompletedPage();
  });
});
