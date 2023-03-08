import * as user from '../fixtures/user.json';
import {loginViaUI, searchProduct} from '../support/helper';

it.only('Order', () => {

  loginViaUI(user)

  cy.log('**Select product**');
  cy.get('.cc-btn').click();

  searchProduct('Raspberry Juice (1000ml)');

})



