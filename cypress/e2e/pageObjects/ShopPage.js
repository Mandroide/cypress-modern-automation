const Cart = require("./Cart")
class ShopPage {

    clickLnkCheckout() {
        cy.get(".nav-link:contains('Checkout')").click()
        return new Cart();
    }
}

module.exports = ShopPage;