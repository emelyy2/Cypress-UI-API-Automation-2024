
describe('Visa Application Test', () => {

    it('Visa Loan Application', () => {

        cy.visit('https://technovaschool.github.io/TechNovaBank/VisaLoanApplication.html')

        cy.title().should('contain', 'Visa Loan Application')
        cy.get('p').contains('VALUE FOR AIRFARE REDEMPTIONS').should('be.visible')
        cy.get('p').contains('CASH BACK REDEMPTIONS').should('be.visible')
        cy.get('p').contains('ANNUAL AIRLINE CREDIT').should('be.visible')
        cy.get('p').contains('LUXURY CARD CONCIERGE').should('be.visible')
        cy.get('#first-name').type('Emily')
        cy.get('#last-name').type('Smith')
        cy.get('select').eq(0).select('Ms.')
        cy.get('#middle-name').type('M')

        cy.get('#single').check()
        cy.get('#email').type('emily.smith@gmail.com')
        cy.get('#mother-name').type('fuentes')
        cy.get('#address').type("123 main street")
        cy.get('#date-of-birth').type('1965-12-01')
        cy.get('#income').type('100.000')
        cy.get('select').eq(1).select('Engineer')
        cy.get('#loan-amount').type('50000')
        cy.get('#employment-status').select(1)
        cy.get('#submit-btn').click()

        cy.on('window:alert', (alert) => {
            expect(alert).to.equal("Application Has been successfully submitted!")
            expect(alert).to.contains('successfully submitted!')
        })




    })
})