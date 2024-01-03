

describe('New Account Suite Test', () => {

    require('cypress-xpath')

    it('TC1 - Create a new account', () => {
        cy.visit('https://technovaschool.github.io/TechNovaBank/ApplyNewAccount.html')
        cy.get('h2').contains('Create New Account').should('be.visible')

        cy.title().should('contain', 'Create New Account')
        cy.url().should('include', 'ApplyNewAccount')
        cy.xpath("//input[@id='firstName']").type('Emily');
        cy.xpath("//input[@id='lastName']").type('Smith');
        cy.get('#password').type('46844878');
        cy.get('#cellPhone').type('1239854712');
        cy.get('#city').type('City')

        cy.get('select').eq(0).select('Alabama')
        cy.get('#zipCode').type('60123')
        cy.get('select').eq(1).select('New Checking')
        cy.get('button').contains('Submit').click()

        


    })
})