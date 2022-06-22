/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('/');

    //drag and drop after enntering board
    /*cy.get('[data-cy=task]')
    .eq(0)
    .as('task 1')

    cy.get('[data-cy=task]')
    .eq(1)
    .as('task 2')

    cy.get('@task 2').drag('@task 1')*/

    //upload an image after enntering board in a task
    
    /*cy
   .get('[data-cy=task]').eq(0).click()
   .get('.dropzone')
   .attachFile('logo.png', { subjectType: 'drag-n-drop' });
   

   cy.get('[data-cy=remove-image]').click()*/
    
   //Real events hover
cy
.get('[data-cy="board-item"]')
.realHover()
.should('have.css','background-color', 'rgb(5, 90, 140)')
    

//Applitools but currently I have exhausted it so this plugin will not work
/*cy.eyesOpen({
  appName: 'Trello App',
  testName: 'First Visual test..nah!' ,
  browser: { width: 800, height: 600 },
});

cy.eyesCheckWindow('Board List')
cy.eyesClose();*/

});