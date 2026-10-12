describe('API Requests', function () {
    it('GET Request with property validation in body', function () {
        cy.request('GET', 'https://reqres.in/api/users?page=2').its('body').should('have.property', 'page', 2);
    });
    it('POST Request with body', function () {
        cy.request('POST', 'https://reqres.in/api/users', { name: 'morpheus', job: 'leader' })
    });
});
