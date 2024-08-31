const cartPurchasePage = require('../support/pages/cartpurchase-Page/cartpurchasePage');

describe('Checkout Test', () => {
  beforeEach(() => {
    cartPurchasePage.goToHomePage();
  });

  it('should checkout successfully', () => {
    cartPurchasePage.verifyHomePageAppears();
    cartPurchasePage.selectProduct('Samsung galaxy s6');
    cartPurchasePage.addToCart();
    cartPurchasePage.goToCart();
    cartPurchasePage.getPlaceOrderButton();
    cartPurchasePage.getNameField();
    cartPurchasePage.getCountryField();
    cartPurchasePage.getCityField();
    cartPurchasePage.getCardField();
    cartPurchasePage.getMonthField();
    cartPurchasePage.getYearField();
    cartPurchasePage.getPurchaseButton();

    // Verify the confirmation message
    cartPurchasePage.getConfirmationMessage().then((confirmationMessage) => {
      expect(confirmationMessage).to.include('Thank you for your purchase!');
    });
    cartPurchasePage.confirmPurchase();
  });
});
