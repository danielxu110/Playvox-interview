//LoginPage.js

export default class LoginPage {
   //input username
    enterUsername(username) {
        cy.get('#user-name')
            .clear()
            .type(username)
    }

    //input password
    enterPassword(password) {
        cy.get('#password')
            .clear()
            .type(password)
    }

    //log in
    submit() {
        cy.get('#login-button').click()
    }

    //check if error message occurs
    assertErrorMessage() {
        cy.get("[data-test='error']").should('contain', 'Epic sadface')
    }

    //check if login successfully and navigate to product page
    assertLoginSuccess() {
        cy.url().should('include', '/inventory.html')
    }
}
