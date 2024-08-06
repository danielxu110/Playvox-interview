
export default class LoginPage {
   //input username
    enterUsername(username: string) {
        cy.get('[name="username"]').clear().type(username);
    }

    //input password
    enterPassword(password: string) {
        cy.get('[name="password"]').clear().type(password);
    }

    //log in
    submit() {
        cy.get('.orangehrm-login-button').click();
    }

    //check if error message occurs
    assertErrorMessage() {
        cy.get(".oxd-alert-content-text")
          .should('contain', 'Invalid credentials');
    }

    //check if login successfully and navigate to product page
    assertLoginSuccess() {
        cy.url().should('include', 'dashboard/index');
    }

    logout() {
        cy.get('.oxd-userdropdown-name').should('be.visible').click();
        cy.get('.oxd-dropdown-menu').contains('li', 'Logout').should('be.visible').click();
        cy.url().should('include', '/auth/login');
    }
}
