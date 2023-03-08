import * as user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';
import { loginViaUI } from '../support/helper';

user.name = faker.internet.userName();
user.Country = faker.address.county();
user.Mobile = faker.phone.number('########');
user.Code = faker.address.zipCode('#');
user.City = faker.address.city();
user.Address = faker.address.streetAddress();
user.State = faker.address.state() // 'Georgia'
user.Card = faker.finance.creditCardNumber('5###########1234');

    describe('Order', () => {
    it('Order', () => {
    
    loginViaUI(user)

    cy.log('**Choose product and add it to the basket**');
    cy.get('[aria-label="Add to Basket"]').eq(4).click();
    cy.get('[aria-label="Add to Basket"]').eq(5).click();

    cy.log('**Order products**');
    cy.get('[aria-label="Show the shopping cart"]').click();
    cy.get('.mat-card').should('contain', 'Your Basket');
    cy.get('[data-icon="plus-square"]').eq(0).click();
    cy.get('.ng-star-inserted').should('contain', 'Total Price');
    cy.get('#checkoutButton').click();

    cy.log('**Added address**');
    cy.get('[aria-label="Add a new address"]').click();
    cy.get('#mat-input-3').type(user.Country);
    cy.get('#mat-input-4').type(user.name);
    cy.get('#mat-input-5').type(user.Mobile);
    cy.get('#mat-input-6').type(user.Code);
    cy.get('#address').type(user.Address);
    cy.get('#mat-input-8').type(user.City);
    cy.get('#mat-input-9').type(user.State);
    cy.get('#submitButton').click({force: true});

    cy.log('**Confirmed address**')
    cy.get('.mat-radio-outer-circle').eq(0).click({force: true});
    cy.get('.btn-next').click();
    cy.get('.mat-radio-inner-circle').eq(1).click();
    cy.get('.nextButton').click();

    cy.log('**Added Credit Card**');
    cy.get('#mat-expansion-panel-header-0').click({force: true});
    cy.get('#mat-input-10').type(user.name);
    cy.get('#mat-input-11').type(user.Card);
    cy.get('#mat-input-12').select('1');
    cy.get('#mat-input-13').select('2080');
    cy.get('#submitButton').click();

    cy.get('.mat-simple-snack-bar-content').should('contain', 'Your card ending with 1234 has been saved for your convenience.');

    cy.log('**Pay order');
    cy.get('.mat-radio-outer-circle').eq(0).click({force: true});
    cy.get('.mat-focus-indicator.btn.nextButton.mat-button').click({force: true});
    cy.get('#checkoutButton').click()

    cy.log('Check Order');
    cy.get('[fxflex="60%"]').should('contain', 'Thank you for your purchase!');

    })
})