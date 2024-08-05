//CartPage.js

export default class CartPage {
    
    //check if item is added to cart successfully
    assertAddItemSuccess (item_name) {
        cy.log('------------- check ' + item_name + 'is added to cart successfully ----------')
        cy.get('.inventory_item_name') //result is a list of elements
        .then(function ($list) {
            expect($list.text()).to.contain(item_name) //$list.text() can get the text of all elements
        })
    }

    continueShopping () {
        cy.get('#continue-shopping').click()
    }
}