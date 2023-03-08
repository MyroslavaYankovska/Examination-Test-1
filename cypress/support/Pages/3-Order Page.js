import BasePage from './0-Base Page';

class OrderPage extends BasePage{

    AddJuiceToBasket(){
        return cy.get('[aria-label="Add to Basket"]').eq(5);
    }
    AddLemonadeToBasket(){
        return cy.get('[aria-label="Add to Basket"]').eq(4);
    }
    getShoppingCart(){
        return cy.get('[aria-label="Show the shopping cart"]');
    }
    accertShoppingCart(){
        return cy.get('.mat-card').should('contain', 'Your Basket');
    }
    getPlusSquere(){
        return cy.get('[data-icon="plus-square"]').eq(0);
    }
    accertOrder(){
        return cy.get('.ng-star-inserted').should('contain', 'Total Price');
    }
    getCheckoutButton(){
        return cy.get('#checkoutButton');
    }
    getNewAddress(){
        return cy.get('[aria-label="Add a new address"]');
    }
    getCountry(){
        return cy.get('#mat-input-3');
    }
    getname(){
        return cy.get('#mat-input-4');
    }
    getMobile(){
        return cy.get('#mat-input-5');
    }
    getCode(){
        return cy.get('#mat-input-6');
    }
    getAddress(){
        return cy.get('#address');
    }
    getCity(){
        return cy.get('#mat-input-8');
    }
    getState(){
        return cy.get('#mat-input-9');
    }
    getSubmitAddressForm(){
        return cy.get('#submitButton');
    }
    SelectAddress(){
        return cy.get('.mat-radio-outer-circle').eq(0);
    }
    getContinure(){
        return cy.get('.btn-next');
    }
    getDeliverySpeed(){
        return cy.get('.mat-radio-inner-circle').eq(1);
    }
    getContinurDelivery(){
        return cy.get('.nextButton');
    }
    AddNewCard(){
        return cy.get('#mat-expansion-panel-header-0');
    }
    AddCardName(){
        return cy.get('#mat-input-10');
    }
    AddCardNamber(){
        return cy.get('#mat-input-11');
    }
    AddCardMonth(){
        return cy.get('#mat-input-12');
    }
    AddCardYear(){
        return cy.get('#mat-input-13');
    }
    AddCardConfirmation(){
        return cy.get('#submitButton');
    }
    assertAddedCard(){
        cy.log('**Verify card is added**');
        cy.get('.mat-simple-snack-bar-content').should('contain', 'Your card ending with 1234 has been saved for your convenience.');
    }
    getLastConfirmOrder(){
        return cy.get('.mat-radio-outer-circle').eq(0);
    }
    getLastContinureOrder(){
        return cy.get('.mat-focus-indicator.btn.nextButton.mat-button');
    }
    getPlaceOrder(){
        return cy.get('#checkoutButton');
    }
    assertOrder(){
        cy.log('**Check Order**');
        cy.get('[fxflex="60%"]').should('contain', 'Thank you for your purchase!');
    }

    ChooseProduct(){
        cy.log('**Choose product and add it to the basket**');
        this.AddJuiceToBasket().click();
        this.AddLemonadeToBasket().click();
    }

    OrderProduct(){
        cy.log('**Order products**');
        this.getShoppingCart().click();
        this.accertShoppingCart();
        this.getPlusSquere().click();
        this.accertOrder()
        this.getCheckoutButton().click();
    }

    WriteAddress(user){
        cy.log('**Added address**');
        this.getNewAddress().click();
        this.getCountry().type(user.Country);
        this.getname().type(user.name);
        this.getMobile().type(user.Mobile);
        this.getCode().type(user.Code);
        this.getAddress().type(user.Address);
        this.getCity().type(user.City);
        this.getState().type(user.State);
        this.getSubmitAddressForm().click({force: true});

    }

    AddressConfirmation(){
        cy.log('**Confirmed address**');
        this.SelectAddress().click({force: true});
        this.getContinure().click();
        this.getDeliverySpeed().click();
        this.getContinurDelivery().click();
    }

    WriteCreditCard(user){
        cy.log('**Added Credit Card**');
        this.AddNewCard().click({force: true});
        this.AddCardName().type(user.name);
        this.AddCardNamber().type(user.Card);
        this.AddCardMonth().select('1');
        this.AddCardYear().select('2080');
        this.AddCardConfirmation().click();
    }

    PayOrder(){
        cy.log('**Pay order');
        this.getLastConfirmOrder().click({force: true});
        this.getLastContinureOrder().click({force: true});
        this.getPlaceOrder().click()
    }

}

export default new OrderPage();  

