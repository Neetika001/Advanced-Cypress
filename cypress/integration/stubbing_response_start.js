/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req)=>{

      req.reply((res)=>{
        console.log(res)
        res.body[0].starred= true
        return res
      })

      

    }).as('boardList')

    cy.visit('/')

    /*cy.get('[data-cy=create-board]')
    .click()
    cy.get('[data-cy=new-board-input]').type('New one{enter}')

    cy.get('#errorMessage').should('be.visible')*/





    /*{
      body:[]
    })*/

    //cy.wait('@createBoard')
})