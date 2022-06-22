//We have a simple test here that creates our board.


//custom commands are in support folder

Cypress.Commands.add('take', {prevSubject:'optional'}, (Subject, input)=>{

  if(Subject)
  
  {
    cy
    .wrap(Subject)
    .find (`[data-cy= ${input}]`)
  }

  else{


    cy.get(`[data-cy= ${input}]`)

  }
})

it('Custom commands', () => {

  cy.percySnapshot()
  
  cy.visit('/board/29839649893')

 // cy.addBoard('Custom Board')

 cy
 .take('list')
 .eq(0)
 .take('task').eq(0)
 

 cy.percySnapshot()
 
})