import * as user from '../fixtures/user.json'

describe('Authorization to the site', () => {
it('Authorization', () => {

cy.log('**Open website home page**');
cy.visit('/')

cy.log('**close a pop -up window**');
cy.get('.close-dialog').click();

cy.log('**Open website login page**');
cy.get('#navbarAccount').click();
cy.get('#mat-menu-panel-0').click();

cy.log('**Check user is unauthorized**');
cy.getCookie('customer').should('be.null');

cy.log('**Authorize user**');
cy.get('#email').type(user.email);
cy.get('#password').type(user.password);
cy.get('.mat-checkbox-inner-container').click();
cy.get('#loginButton').click();

cy.log('**Check users authorization**')
cy.get('.ng-star-inserted').should('contain', 'All Products');

})
})






