const { setupDb } = require('./setupDb')

module.exports = (on, config) => {
  on("task", {
    setupDb
  })
}


// require('@applitools/eyes-cypress')(module);

/*Cypress.Cookies.defaults({

  preserve: 'trello_token'
})*/
