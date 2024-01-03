

describe('Product', () => {

    describe('Auto', () => {

        beforeEach(() => {
            cy.visit('/LoginPage.html')
            cy.login('admin', 'password')
        });

        it ('should hover over products & verify options are visible', () => {

           /*cy.get('.dropdown-content').eq(0).invoke('show')
           cy.wait(3000)
          
           cy.get('.dropdown-content >a').eq(0).invoke('removeAttr', 'target').click({force: true})
           cy.url().should('include', 'PersonalInfoPage.html')
           cy.wait(3000)
           cy.go('back')*/

           cy.get('.dropdown-content').eq(0).invoke('show')
            cy.contains('Auto').should('be.visible')

        
    
        })

    

    })


    describe('Visa', () => {

    

    });

    describe('Mortgage', () => {

    });
})