describe('Grupo de Pruebas', function () {

    beforeEach(function () {
        cy.fixture('fixture.json').as('userData');

    });

    it('Prueba 1', function () {
        cy.get('@userData').then((userData) => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('[placeholder="Username"]').type(userData.name);
            cy.get('#password').type(userData.password);
            cy.get('.submit-button').click();

        });
    });
});