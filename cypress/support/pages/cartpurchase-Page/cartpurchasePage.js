const locators = require('../home-page/home-page-locators');

class cartPurchasePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }

    selectProduct() {
        cy.xpath('//a[text()="Samsung galaxy s6"]').scrollIntoView().should('be.visible').click();
    }

    addToCart() {
      cy.window().then((win) => {
        const stub = cy.stub(win, 'alert').as('alertStub');
        // Perform actions that trigger the alert
        cy.xpath("//h2[contains(text(), 'Samsung galaxy s6')]").should('be.visible');
        cy.xpath("//a[contains(text(), 'Add to cart')]").click();
        // Wait for the alert to be triggered and assert
        cy.get('@alertStub').should('be.calledWith', 'Product added');
      });
    }

    goToCart() {
        cy.xpath('//a[text()="Cart"]', { timeout: 10000 }).should('be.visible').click();
    }

    getPlaceOrderButton() {
        cy.xpath('//button[text()="Place Order"]').should('be.visible').click();
    }

    getNameField() {
        cy.xpath('//input[@id="name"]').should('be.visible').type('lala');
    }

    getCountryField() {
        cy.xpath('//input[@id="country"]').should('be.visible').type('USA');
    }

    getCityField() {
        cy.xpath('//input[@id="city"]').should('be.visible').type('New York');
    }

    getCardField() {
        cy.xpath('//input[@id="card"]').should('be.visible').type('1234567812345678');
    }

    getMonthField() {
        cy.xpath('//input[@id="month"]').should('be.visible').type('12');
    }

    getYearField() {
        cy.xpath('//input[@id="year"]').should('be.visible').type('2025');
    }

    getPurchaseButton() {
        cy.xpath('//button[text()="Purchase"]').should('be.visible').click();
    }

    getConfirmationMessage() {
        return cy.xpath('//h2[contains(text(),"Thank you for your purchase!")]').invoke('text');
    }

    confirmPurchase() {
        cy.xpath('//button[text()="OK"]').should('be.visible').click();
    }
}

module.exports = new cartPurchasePage();
