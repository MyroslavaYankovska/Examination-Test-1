
import BasePage from './0-Base Page';

class AuthorizationPage extends BasePage{

    visit(){
        cy.log('**Open website login page**');
        cy.visit('/');
    }
    getAccount(){
        return cy.get('#navbarAccount');
    }
    getLoginField(){
        return cy.get('#mat-menu-panel-0');
    } 
    assertUserUnauthorized(){
        cy.log('**Verify user is unauthorized**');
        cy.getCookie('customer').should('be.null')
    }
    getEmailField(){
        return cy.get('#email');
    } 
    getPasswordField(){
        return cy.get('#password');
    } 
    getCheckBoxField(){
        return cy.get('.mat-checkbox-inner-container');
    }
    getSubmitButton(){
        return cy.get('#loginButton');
    }

    OpenLogInField(){
        cy.log('**Trying to open a Login Form**');
        this.getClosePopUp().click();
        this.getAccount().click();
        this.getLoginField().click();
    }

    submitLoginForm(user){
        cy.log('**Trying to login**');
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getCheckBoxField().click();
        this.getSubmitButton().click();
    }

    assertUserLogIn(){
        cy.log('**Check if user authorizated**')
        cy.get('.ng-star-inserted').should('contain', 'All Products')
    }
}


export default new AuthorizationPage();




