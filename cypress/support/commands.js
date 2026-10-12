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
Cypress.Commands.add('createAccount', (userData) => {
    cy.visit('https://practicesoftwaretesting.com/auth/login');
    cy.get('[data-test="register-link"]').click();
    cy.get('[data-test="first-name"]').type(userData.name);
    cy.get('[data-test="last-name"]').type(userData.lastName);
    cy.get('[data-test="dob"]').type(userData.dateOfBirth);
    cy.get('[data-test="country"]').select(userData.country);
    cy.get('[data-test="postal_code"]').type(userData.postalCode);
    cy.get('[data-test="house_number"]').type(userData.houseNumber);
    cy.get('[data-test="street"]').type(userData.street);
    cy.get('[data-test="city"]').type(userData.city);
    cy.get('[data-test="state"]').type(userData.state);
    cy.get('[data-test="phone"]').type(userData.phone);
    cy.get('[data-test="email"]').type(userData.email);
    cy.get('[data-test="password"]').type(userData.password);
    cy.get('[data-test="register-submit"]').click();
});
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