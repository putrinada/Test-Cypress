describe('Cart Functionality', () => {
    beforeEach(() => {
      // Visit the homepage
      cy.visit('https://www.demoblaze.com/index.html');
    });
  
    it('should complete a purchase successfully using XPath', () => {
        // Locate and click on a product (e.g., Samsung Galaxy S6)
        cy.xpath('//a[contains(text(),"Samsung galaxy s6")]').click();
    
        // Add the product to the cart
        cy.xpath('//a[contains(text(),"Add to cart")]').click();
        
        // Confirm the product was added to the cart via alert
        cy.on('window:alert', (text) => {
          expect(text).to.contains('Product added');
        });
    
        // Go to the cart
        cy.xpath('//a[@id="cartur"]').click();
    
        // Verify the product is in the cart
        cy.xpath('//td[contains(text(),"Samsung galaxy s6")]').should('be.visible');
    
        // Proceed to checkout
        cy.xpath('//button[contains(text(),"Place Order")]').click();
    
        // Fill out the order form
        cy.xpath('//input[@id="name"]').type('John Doe');
        cy.xpath('//input[@id="country"]').type('USA');
        cy.xpath('//input[@id="city"]').type('New York');
        cy.xpath('//input[@id="card"]').type('4111111111111111');
        cy.xpath('//input[@id="month"]').type('12');
        cy.xpath('//input[@id="year"]').type('2024');
    
        // Place the order 
        cy.xpath('//button[contains(text(),"Purchase")]').click();
    
        // Confirm the purchase via alert
        cy.on('window:alert', (text) => {
          expect(text).to.contains('Thank you for your purchase!');
        });
      });
});
