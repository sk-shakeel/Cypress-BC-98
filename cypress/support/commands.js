// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getByPlaceholderText", (placeholderText) => {
  cy.get("input[placeholder]")
    .filter((index, element) => element.placeholder === placeholderText)
    .should("have.length", 1)
    .then(($input) => {
      cy.wrap($input).as("inputByPlaceholderText");
    });
});

Cypress.Commands.add("getImgsBySrcPattern", (srcPattern) => {
  cy.get("img[src]")
    .filter((index, element) => {
      const srcAttributeValue = element.getAttribute("src");
      return srcAttributeValue && srcAttributeValue.match(srcPattern);
    })

    .then(($imgs) => {
      cy.wrap($imgs).as("imgsBySrcPattern");
    });
});
