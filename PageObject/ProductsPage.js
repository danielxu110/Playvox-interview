//ProductsPage.js

export default class ProductsPage {
    //add item to cart
    addToChart (add_button_location) {
        cy.get(add_button_location).click()
    }

    //navigate to cart page
    navigateToCart () {
        cy.get('.shopping_cart_link').click()
    }

    //check if navigate to cart page
    assertNavToCart () {
        cy.url().should('include', '/cart.html')
    }
}