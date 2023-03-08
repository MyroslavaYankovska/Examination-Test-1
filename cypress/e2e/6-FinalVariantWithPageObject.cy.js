import * as user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import { loginViaUI } from '../support/helper';
import BasePage from '../support/Pages/0-Base Page';
import RegistrationPage from '../support/Pages/1-Registration Page';
import AuthorizationPage from '../support/Pages/2-Authorization Page';
import OrderPage from '../support/Pages/3-Order Page';
import FeedbackPage from '../support/Pages/4-Feedback Page';

user.answer = faker.internet.userName();
user.name = faker.internet.userName();
user.Country = faker.address.county();
user.Mobile = faker.phone.number('########');
user.Code = faker.address.zipCode('#');
user.City = faker.address.city();
user.Address = faker.address.streetAddress();
user.State = faker.address.state() // 'Georgia'
user.Card = faker.finance.creditCardNumber('5###########1234');

describe('Final Variant with Page Obgect', () => {

    it('Registration to the page', () => {

    cy.log('*Registration**');
    
    RegistrationPage.visit();
    RegistrationPage.OpenLogInField();
    RegistrationPage.OpenRegistrationField()
    RegistrationPage.FillInRegistartionForm(user);
    RegistrationPage.assertUserRegistration();

    })

    it('Authorization to the page', () => {

    cy.log('**Authorization**')

    RegistrationPage.visit();
    RegistrationPage.OpenLogInField();
    AuthorizationPage.assertUserUnauthorized();
    AuthorizationPage.submitLoginForm(user);
    AuthorizationPage.assertUserLogIn();

    })

    it('Order Products', () => {

    cy.log('**Order**');

    loginViaUI(user);
    OrderPage.ChooseProduct();
    OrderPage.OrderProduct();
    OrderPage.WriteAddress(user);
    OrderPage.AddressConfirmation();
    OrderPage.WriteCreditCard(user);
    OrderPage.assertAddedCard()
    OrderPage.PayOrder();
    OrderPage.assertOrder();

    })

    it('Send Feadback Form', () => {

    cy.log('**FeadbackForm**');

    loginViaUI(user);
    FeedbackPage.OpenFeedbackForm();
    FeedbackPage.FillFeedbackForm();
    FeedbackPage.assertUserFeedbackForm();

    })

})



    


