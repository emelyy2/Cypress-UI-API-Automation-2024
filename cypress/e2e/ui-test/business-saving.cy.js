
describe('Business Saving Account Test', () => {

    it('Saving Account', () => {

        cy.visit('https://technovaschool.github.io/TechNovaBank/BusinessSavingPage.html');

        cy.url().should('include', 'BusinessSavingPage')
        cy.title().should('contain', 'Tech Nova Business Savings Account Creation')
        cy.get('h2').contains('New Business Account').should('be.visible')

        cy.get('#firstName').type('Sophia')
        cy.get('#lastName').type('White')
        cy.get('#email').type('sophia12@gmail.com')
        cy.get('#business-name').type('Tech Nova LLC')
        cy.get('#business-type').type('Business Saving Account')
        cy.get('#business-address').type('123 Main Street, LA')
        cy.get('#tax-id').type('3221259874')
        cy.get('#state').select('Arizona')

        cy.get('footer').contains('© 2021 Tech Nova Savings. All rights reserved. Use For Testing Only.')
        .should('be.visible')

        cy.get('button').contains('Submit').click()

        cy.on('window:alert', (alert) => {
            expect(alert).to.equal("Your account has been successfully created.")
            expect(alert).to.contains('successfully created.')
        
        })
        

    })
})