export function loginViaUI(user) {

    cy.visit('/')
  
    cy.log('**close a pop -up window**');
    cy.get('.close-dialog').click();
  
    cy.log('**Open website login page**');
    cy.get('#navbarAccount').click();
    cy.get('#mat-menu-panel-0').click();
  
    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');
  
    cy.log('Authorize user');
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#loginButton').click();
  
    cy.get('.ng-star-inserted').should('contain', 'All Products');
  }
  
  export function searchProduct(productName) {
    cy.get('body').find('.mat-drawer-container.mat-sidenav-container .item-name').then(items => {
      expect(items.length).to.gt(0, `No results for ${productName} keyword`);
  
      if (items.filter(`:contains("${productName}")`).length > 0) {
        expect(items).to.contain(productName);
      } else {
        const btnNextPage = cy.get('[aria-label="Next page"]');
        // if the button is disabled we can't choose the next page and it means that product is not found
        btnNextPage.should('not.be.disabled');
        btnNextPage.click();
        searchProduct(productName);
      }
    })
  }