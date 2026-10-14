describe('Grupo de Pruebas', function () {
    before(function () {
        cy.log('Se ejecuta antes de todas las pruebas');
    });
    beforeEach(function () {
        cy.log('Se ejecuta antes de cada prueba');
    });

    after(function () {
        cy.log('Se ejecuta después de todas las pruebas');
    });
    afterEach(function () {
        cy.log('Se ejecuta después de cada prueba');
    });

    describe('Subgrupo de Pruebas', function () {

        it('Prueba 1', function () {
            cy.visit('https://www.saucedemo.com/');
            cy.get('[placeholder="Username"]').type('locked_out_user').clear();
        });
        it('Prueba 2', function () {
            cy.visit('https://www.saucedemo.com/');
            cy.contains('div', 'Swag Labs').should('be.visible');
            cy.get('[placeholder="Username"]').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('.submit-button').click();
            cy.get('.inventory_item_name').eq(0).click();
        });
        it('Prueba 3', function () {
            cy.visit('https://www.saucedemo.com');
            cy.get('[data-test="login-credentials"] > h4').should('be.visible').and('contain.text', 'Accepted usernames are:');
        });

    });

});
