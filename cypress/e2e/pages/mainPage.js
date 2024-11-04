export class MainPage{

  checkCartIconBadgeNotExist() {
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
  }

  addFirstProductToCart() {
    cy.get('[data-test="inventory-list"]').children().first().contains('button', 'Add to cart').click();
  }

  checkCartIconBadgeContainNumber(number) {
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('contain', number);
  }

  // He traido todas estas funciones aquí por que no pertenecen a la pantalla del Login y no tienen sentido en la pantalla del Login
 
/* 
Esta función fallaba porque el data-test estaba mal porque tenias puesto "product_sort_container"
y es "product-sort-container"
*/
  checkActiveOption(selectedOption) {
    cy.get('select[data-test="product-sort-container"]')
      .should('exist')
      .should('be.visible')
      .find('option:selected')
      .should('have.text', selectedOption);
}

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

  // Creo esta función para el paso I click on the button {string}
  clickButtonByDataTest(buttonName) {
    cy.get(`[data-test="${buttonName}"]`).should('be.visible').click();
  }

  // Creo esta función para el paso I check that the element {string} should {string}
  checkStatusOnElementByDataTest(elementDataTest, status) {
    cy.get(`[data-test="${elementDataTest}"]`).should(status);
  }

  // Creo esta función para el paso I check that the element {string} should {string} the content {string}
  checkElementContent(elementDataTest, statusContent, content) {
    cy.get(`[data-test="${elementDataTest}"]`).should(statusContent, content);
  }
}