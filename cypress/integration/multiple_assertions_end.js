/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/29839649893')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .should( item => {
      if (item.length !== 3) {
        throw new Error('Not enough elements!')
      }
      expect(item[0]).to.contain.text('Task 1')
      expect(item[1]).to.contain.text('task 2')
    })

})