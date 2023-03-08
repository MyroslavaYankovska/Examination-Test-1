import * as user from '../fixtures/user.json';
import { loginViaUI } from '../support/helper';

it.only('Customer Feedback Form', () => {

loginViaUI(user)

cy.log('**Go to the Feedback Form**');
cy.get('[aria-label="Open Sidenav"]').click();
cy.get('.menu-text.truncate').should('contain', ' Customer Feedback').eq(4).click();
cy.get('.cc-btn').click();

cy.log('Form filling');
cy.get('#comment').type('The product is in good condition!');
cy.get('#rating').click();
cy.get('#captcha').then((numbers) => {
cy.log(eval(numbers.text()))
cy.get('#captchaControl').type(eval(numbers.text()))
cy.get('#submitButton').click()

cy.get('#cdk-overlay-4').should('contain', 'Thank you for your feedback')

})
})

    


