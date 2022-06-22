/// <reference types="cypress" />

// const { post } = require("cypress/types/jquery");

it('Sending requests', () => {

  cy
    .visit('/')

  cy
  .request({
    method: 'GET',
    url: "/api/boards/29839649893",
    
          })
          
          //If you want to change the name ..go to the local host, change name of the board..copy PATCH ID and run..and comment above
          //function

   
 
  

});