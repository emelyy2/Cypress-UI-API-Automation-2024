
describe('Mortgage Application Suite Test', () => {

    it ('Mortgage Application Test', () => {

        cy.visit('https://technovaschool.github.io/TechNovaBank/HomeLoanApplication.html')
        cy.title().should('contain', 'Mortgage Application')
        cy.get('#name').type('Emily Smith')
        cy.get('#email').type('emily.smith@gmail.com')
        cy.get('#phone').type('210-895-7845')
        cy.get('#address').type('123 Main Avenue, NY')
        cy.get('#loan-amount').type('300000')
        cy.get('#credit-score').type('850')
        cy.get('#employment-status').select(1)
        cy.get('#property-type').select(1)
        cy.get('#mortgage-term').select(2)
        cy.get('#down-payment').type('10000')
        cy.get('#interest-rate').type('7%')

        cy.get('input').contains('Submit Application').click()

        cy.on('window:alert', (alert) => {
            expect(alert).to.equal("Application has been successfully submitted!")
            expect(alert).to.contains('successfully submitted!')
        
        })
    })
})