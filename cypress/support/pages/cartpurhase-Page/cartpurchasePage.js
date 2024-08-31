const locators = require('../home-page/home-page-locators');

class CartPurchasePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }

    getCartButton() {
      return cy.xpath('//a[text()="Cart"]');
    }
  
    getPlaceOrderButton() {
      return cy.xpath('//button[text()="Place Order"]');
    }
  
    getNameField() {
      return cy.xpath('//input[@id="name"]');
    }
  
    getCountryField() {
      return cy.xpath('//input[@id="country"]');
    }
  
    getCityField() {
      return cy.xpath('//input[@id="city"]');
    }
  
    getCardField() {
      return cy.xpath('//input[@id="card"]');
    }
  
    getMonthField() {
      return cy.xpath('//input[@id="month"]');
    }
  
    getYearField() {
      return cy.xpath('//input[@id="year"]');
    }
  
    getPurchaseButton() {
      return cy.xpath('//button[text()="Purchase"]');
    }
  }
  module.exports = new CartPurchasePage();
  