import BasePage from './0-Base Page';

class RegistrationPage extends BasePage{

    visit(){
        cy.log('**Open website login page**');
        cy.visit('/');
    }
    getClosePopUp1(){
        return cy.get('.close-dialog');
    }
    getClosePopUp2(){
        return cy.get('.cc-btn');
    }
    getAccount(){
        return cy.get('#navbarAccount');
    }
    getLoginField(){
        return cy.get('#mat-menu-panel-0');
    }   
    getRegistrationForm(){
        return cy.get('#newCustomerLink');
    }
    getEmail(){
        return cy.get('#emailControl');
    }
    getPassword(){
        return cy.get('#emailControl');
    }
    getPasswordRepeat(){
        return cy.get('#repeatPasswordControl')
    }
    getSecurityQuestion(){
        return cy.get('#mat-select-value-3');
    }
    chooseSecurityQuestion(){
        return cy.get('.mat-option-text').should('contain', 'Last name of dentist when you were a teenager?');
    }
    confirmSecurityQuestion(){
        return cy.get('#mat-option-10');
    }
    getAnswer(){
        return cy.get('#securityAnswerControl');
    }
    getSubmitRegistration(){
        return cy.get('#registerButton');
    }
    assertUserRegistration(){
        cy.log('**check whether you are registered**');;
        cy.get('.mat-simple-snack-bar-content', {timeout: 20000}).should('contain', 'Registration completed successfully. You can now log in.');
    }

    OpenLogInField(){
        cy.log('**Trying to open a Login Form**');
        this.getClosePopUp1().click();
        this.getClosePopUp2().click();
        this.getAccount().click();
        this.getLoginField().click();
    }

    OpenRegistrationField(){
        cy.log('**Open registration form**');
        this.getRegistrationForm().click();
    }

    FillInRegistartionForm(user){
        cy.log('**Fill in registration form**');
        this.getEmail().type(user.email);
        this.getPassword().type(user.password);
        this.getPasswordRepeat().type(user.password);
        this.getSecurityQuestion().click();
        this.chooseSecurityQuestion();
        this.confirmSecurityQuestion().click();
        this.getAnswer().type(user.answer);
        this.getSubmitRegistration().click({force: true});
    }
}

export default new RegistrationPage();

