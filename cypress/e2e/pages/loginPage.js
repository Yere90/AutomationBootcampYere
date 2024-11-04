
export class LoginPage {
    

    checkNotIncludeProperty(notincludeProperty, endpoint) {
        cy.url().should(notincludeProperty, endpoint);
    }

    validLogin(userName, password) {
        cy.get('[data-test="username"]')
            .should('have.value', '')
            .type(userName)
            .should('have.value', userName);
        cy.get('[data-test="password"]')
            .should('have.value', '')
            .type(password)
            .should('have.value', password);
        cy.get('[data-test="login-button"]').click();
    }

    checkIncludeProperty(includeProperty, url) {
        cy.url().should(includeProperty, url);
    }

    // checkActiveOption(selectedOption) {
    //     cy.get('select[data-test="product_sort_container"]')
    //       .should('exist')
    //       .should('be.visible')
    //       .find('option:selected')
    //       .should('have.text', selectedOption);
    // }

    checkNameFirstProduct(nameFirstProduct) {
        cy.get('[data-test="inventory-item-name"]')
          .contains(nameFirstProduct);

    }

    checkPriceFirstProduct(priceFirstProduct) {
        cy.get('[data-test="inventory-item-price"]')
          .contains(priceFirstProduct);
    }     

    checkNameLastProduct(nameLastProduct) {
        cy.get('[data-test="inventory-item-name"]').last()
          .contains(nameLastProduct);
    
    }

    checkPriceLastProduct(priceLastProduct) {
        cy.get('[data-test="inventory-item-price"]').last()
          .contains(priceLastProduct);

    }

    selectOption(option) {
        cy.get('[data-test="product-sort-container"]')
          .select(option);
    }

}

