/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('board/29839649893')
})

it('Chaining commands', () => {

  cy
    .contains('Task 1')

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('task 2')

});