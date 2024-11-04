
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

}

