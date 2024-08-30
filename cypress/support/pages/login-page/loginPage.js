const locators = require('../login-page/login-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class loginPage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestlogin.imageCompanyLogo).should('be.visible');
    }

    clickLoginMenu() {
        cy.xpath('//*[@id="login2"]').click();
    }

    verifyLoginModalAppears() {
        cy.xpath('//*[@id="logInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillUsername(username) {
        if (username === 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com';
        }
    
        // Assume the login username field will be visible without an explicit wait
        cy.xpath('//*[@id="loginusername"]', { timeout: 5000 })
            .should('be.visible')
            .clear()
            .type('random'); // T
    }

    fillPassword(password) {
        cy.xpath('//*[@id="loginpassword"]').type(password);
    }

    clickLoginButton() {
        cy.xpath(locators.datatestlogin.button('Log in')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.user_alr_exists)
    }

    verifyLoginSuccessMessageAppears() {
        this.verifyAlertAppears(staticVars.success_message.signup)
    }
    
    verifyWelcomeMessageAppears(){
        cy.get('body').should('not.contain', 'Some text that indicates login failed');
        cy.xpath('//*[@id="nameofuser"]').should('be.visible');
    }
    login(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
        this.clickLoginButton()
    }
}

module.exports = new loginPage();
