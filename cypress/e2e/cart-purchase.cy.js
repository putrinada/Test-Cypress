const cartpurchasePage = require('../support/pages/cartpuchase-page/cartpurchasePage')

describe('Checkout Test', () => {

  beforeEach(() => {
    // pre step
    
})
  it('should checkout successfully', () => {
    cartpurchasePage.goToHomePage()
    cartpurchasePage.verifyHomePageAppears()
    cartpurchasePage.getCartButton().click();
    cartpurchasePage.getPlaceOrderButton().click();
    cartpurchasePage.getNameField().type('John Doe');
    cartpurchasePage.getCountryField().type('USA');
    cartpurchasePage.getCityField().type('New York');
    cartpurchasePage.getCardField().type('1234567812345678');
    cartpurchasePage.getMonthField().type('12');
    cartpurchasePage.getYearField().type('2025');
    cartpurchasePage.getPurchaseButton().click();
    // Add assertions to verify successful checkout
  });
});
