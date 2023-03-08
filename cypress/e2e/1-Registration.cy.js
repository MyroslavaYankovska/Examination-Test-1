import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'

// user.email = faker.internet.email();
// user.password = faker.internet.password(15);
user.answer = faker.internet.userName();

describe('Registration to the site', () => {
  it('Registration', () => {

    cy.log('**Open website home page**');
    cy.visit('/')

    cy.log('**close a pop -up window**');
    cy.get('.close-dialog').click();

    cy.log('**Open website login page**');
    cy.get('#navbarAccount').click();
    cy.get('#mat-menu-panel-0').click();

    cy.log('**Open registration form**');
    cy.get('#newCustomerLink').click();

    cy.log('**Registration form**');
    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.password);
    cy.get('#mat-select-value-3').click();
    cy.get('.mat-option-text').should('contain', 'Last name of dentist when you were a teenager?');
    cy.get('#mat-option-10').click()
    ;
    cy.get('#securityAnswerControl').type(user.answer);

    cy.log('**Submit Registation form**');
    cy.get('#registerButton').click();

    cy.log('**check whether you are registered**');
    cy.get('.mat-simple-snack-bar-content', {timeout: 20000}).should('contain', 'Registration completed successfully. You can now log in.');

  })
})


