const loginPage = require('../support/pages/login-page/loginPage')

describe("Login", () => {
    beforeEach(() => {
    
    })
    it("with unregistered data", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyLoginModalAppears()
        loginPage.login('', '1234')
        loginPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyLoginModalAppears()
        loginPage.login('', '1234')
        loginPage.verifyEmptyCredsErrorMessageAppears()
    })
    it("with registered data", () => {
        loginPage.goToHomePage()
        loginPage.verifyHomePageAppears()
        loginPage.clickLoginMenu()
        loginPage.verifyLoginModalAppears()
        loginPage.login('randomAja', '1234')
        loginPage.verifyLoginSuccessMessageAppears()
        loginPage.verifyWelcomeMessageAppears();
    })

})
