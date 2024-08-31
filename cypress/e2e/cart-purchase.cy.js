const cartPurchasePage = require('../support/pages/cartpurchase-page/cartpurchasePage');

describe('Checkout Test', () => {

  beforeEach(() => {
    // pre step
    
})
  it('should checkout successfully', () => {
    cartPurchasePage.goToHomePage()
    cartPurchasePage.verifyHomePageAppears()
    cartPurchasePage.getCartButton().click();
    cartPurchasePage.getPlaceOrderButton().click();
    cartPurchasePage.getNameField().type('John Doe');
    cartPurchasePage.getCountryField().type('USA');
    cartPurchasePage.getCityField().type('New York');
    cartPurchasePage.getCardField().type('1234567812345678');
    cartPurchasePage.getMonthField().type('12');
    cartPurchasePage.getYearField().type('2025');
    cartPurchasePage.getPurchaseButton().click();
    // Add assertions to verify successful checkout
  });
});
