/// <reference types="cypress" />

it('Intercept requests', () => {

  cy.intercept({

    method: 'POST',
    url: '/api/boards',
}).as('createBoard')

cy
  .visit('/')

cy

.get('[data-cy=create-board]')
.click()

cy

.get('[data-cy=new-board-input]')
.type('new board-12345{enter}')

  

    cy.wait('@createBoard')
   .then((board)=>{
      expect(board.response.statusCode).to.eq(201)
      expect(board.response.body.name).to.eq('new board-12345')
      //expect(board.response.body.created).to.eq('2022-06-07')
      expect(board.response.statusMessage).to.eq('Created')
    })
      
//we write tests after intercepting the requests
//for request to intercept..we first use intercept, then visit and then wait with alias
// intercept are kind of requests so that server response can be changed dynamically and also false positives can be avoided
//for post...after creating a board, we write assertion in wait ..to check if the request and response matches


   

});