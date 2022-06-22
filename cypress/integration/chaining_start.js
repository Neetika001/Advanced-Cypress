/// <reference types="cypress" />
import '@percy/cypress';

beforeEach(() => {

  cy
    .visit('board/29839649893')  
    
})

it('Chaining commands', () => {

  cy.percySnapshot()

  cy
    .get('[data-cy="list"]')
    .eq(0)
    //.should('have.length', 1)
    //.should('be.visible')
   // .should('have.length', 2)
     .contains('Task 1')
   
   //.should('have.text', '&nbsp;tea')

   cy
   .get('[data-cy="task"]')
   .eq(1)
   .contains('task 2')
   
   cy.percySnapshot()
});