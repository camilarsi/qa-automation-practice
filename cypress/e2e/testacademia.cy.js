describe('Grupo de Pruebas', function () {
    it('Prueba 1', function () {
        cy.visit('https://artemure.com.ar/talleres-workshops-experiencias/#reservar');
        cy.get('[name="your-email"]').type('john.doe@example.com');
        cy.get('#campo-grupo').type('Niñxs · Lunes 16:30 a 18:30 h');
        cy.get('[placeholder="Edad del participante, nivel, dudas…"]').type('10 años, nivel inicial, sin dudas');
        cy.get('.wpcf7-tel').type('1234567890');
    })
})
