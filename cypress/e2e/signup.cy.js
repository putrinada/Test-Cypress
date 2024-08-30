const homePage = require('../support/pages/home-page/homePage')

describe("Signup", () => {
    beforeEach(() => {
        // pre ste
        
    })
    
    it("with unregistered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', '1234')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', '1234')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('random', '1234')
        homePage.verifySignUpSuccessMessageAppears()
    })
})
