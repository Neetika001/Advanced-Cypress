/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {

  cy.percySnapshot()
  cy
    .get('[data-cy="star"]')
    .eq(0)
    .invoke('show').click()

  cy
  .get('[data-cy="board-item"]')
  .trigger('mouseover')

  cy
  .get('[data-cy="star"]')
  .should('be.visible')

  cy
  .get('[data-cy="board-item"]')
  .trigger('mouseout')

  cy
  .get('[data-cy="star"]')
  .should('not.be.visible')

  cy.percySnapshot()
})