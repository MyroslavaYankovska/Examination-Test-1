
import BasePage from './0-Base Page';

class FeedbackPage extends BasePage{

    getMenuButton(){
        return cy.get('[aria-label="Open Sidenav"]');
    }
    getFeedbackForm(){
        return cy.get('.menu-text.truncate').should('contain', ' Customer Feedback').eq(4);
    }
    getComment(){
        return cy.get('#comment');
    }
    getRating(){
        return cy.get('#rating');
    }
    getCapture(){
        return cy.get('#captcha').then((numbers) => {
               cy.get('#captchaControl').type(eval(numbers.text()));
    })
    }
    getFeedbackSubmitbutton(){
        return cy.get('#submitButton');
    }

    OpenFeedbackForm(){
        cy.log('**Go to the Feedback Form**');
        this.getMenuButton().click();
        this.getFeedbackForm().click();
    }

    FillFeedbackForm(){
        cy.log('**Form filling**');
        this.getComment().type('The product is in good condition!');
        this.getRating().click();
        this.getCapture();
        this.getFeedbackSubmitbutton().click();
    }

    assertUserFeedbackForm(){
        cy.log('**Check if user send Feedback Form**');
        cy.get('#cdk-overlay-4').should('contain', 'Thank you for your feedback');
    }

}

export default new FeedbackPage();


  