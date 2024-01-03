

describe('Login Test Suite', () => {

   beforeEach(() => {
   cy.visit('/LoginPage.html')
   
   })

   it ('Login Test 001', () => {
      cy.login('admin', 'password')
    
   });

   it ('Schedule Appointment', () =>{
      cy.login('admin', 'password')
      cy.get('a').contains('Schedule Appointment').click()
      cy.url().should('include', 'AppointmentPage.html')
      cy.title().should('contain', 'Schedule Appointment')
      cy.get('h2').contains('Schedule Appointment').should('be.visible')

      cy.enterTextByIndex(0, 'Emily')
      cy.enterTextByIndex(1, 'Smith')
      cy.enterTextByIndex(2, 'emily.smith@gmail.com')
      cy.enterTextByIndex(3, '(562)984-6532')
      cy.enterTextByIndex(4, '8:00AM')

      cy.get('select').eq(0).select('Open New Saving')
      cy.get('select').eq(1).select('Tuesday')
      cy.get('select').eq(2).select('December')
      cy.get('select').eq(3).should('have.value', '2023')
      cy.get('button').contains('Submit').click()

     cy.on('window:alert', (alert) =>{
      expect(alert).to.equal('Appointment scheduled successfully!')
      expect(alert).to.contains('Appointment scheduled')

     });
    
   })


})