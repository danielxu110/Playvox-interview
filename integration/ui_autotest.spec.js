import LoginPage from "../PageObject/LoginPage"
import ProductsPage from "../PageObject/ProductsPage"
import CartPage from "../PageObject/CartPage"

describe ('Cypress automation test for QA interview', function () {

    before(function () {
        
        cy.visit('https://www.saucedemo.com')

    })

    after(function () {

        cy.log('all test cases have been executed')

    })

    it('Login with invalid credentials and verify the error message', function () {
        
        //Login with invalid credentials
        const loginInstance = new LoginPage()
        loginInstance.enterUsername('abcd')
        loginInstance.enterPassword('12345')
        loginInstance.submit()
        loginInstance.assertErrorMessage()
    })

    it('login with valid credentials and check if items added successfully', function () {

        // Create an instance for each page
        const loginInstance = new LoginPage()
        const productsInstance = new ProductsPage()
        const cartInstance = new CartPage()

        cy.log('--------------------------  login   -------------------------')
        //login with valid credentials
        loginInstance.enterUsername('standard_user')
        loginInstance.enterPassword('secret_sauce')
        loginInstance.submit()
        loginInstance.assertLoginSuccess()

        cy.log('-----------------------  start add item  --------------------') 
        // load testdata from products.json and traverse all groups of testdata
        cy.fixture("products").then(function (products) {
            products.forEach(function (product) {
                
                //Production Page. add any item to the cart
                productsInstance.addToChart(product.add_button)
                productsInstance.navigateToCart()
                productsInstance.assertNavToCart()

                //Cart Page. check if products have been added to the cart successfully
                cartInstance.assertAddItemSuccess(product.item_name)
                //return to product page
                cartInstance.continueShopping()
                cy.wait(1000)
            })
        })
    })
})