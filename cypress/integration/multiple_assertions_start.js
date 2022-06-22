/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/29839649893')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'Task1')

  cy
    .get('[data-cy=task]')
    
    .then( item =>{

      if (item.length !==3){
      throw new Error('Not enough items')
      }
      expect(item[0]).to.contain.text('Task1')
      expect(item[1]).to.contain.text('task 2')


    })

})