/// <reference types="cypress" />

//const cypress = require("cypress");



describe('Cookies', () => {

  beforeEach(() => {

    Cypress.Cookies.preserveOnce('trello_token')

    

    cy
      .visit('/')

  })

  it('test #1', () => {



   /* cy
      .get('[data-cy="login-menu"]')
     .click();

    cy
      .get('[data-cy="login-email"]')
      .type('neetika.kapoor@axelerant.com');

    cy
      .get('[data-cy="login-password"]')
      .type('Cow@1234');

    cy
      .get('[data-cy="login"]')
     .click();*/

    cy.setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lZXRpa2Eua2Fwb29yQGF4ZWxlcmFudC5jb20iLCJpYXQiOjE2NTQwNjI1NzksImV4cCI6MTY1NDA2NjE3OSwic3ViIjoiMSJ9.NY-wG1b3UUyY2dCr26rkkrq9aoiZN1FEcqbM5wvV8QI')
    cy.reload() 

    });

  it('test #2', () => {


  });

  it('test #3', () => {


  });

});