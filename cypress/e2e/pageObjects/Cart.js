const Delivery = require("./Delivery")

class Cart {
    clickBtnCheckout() {
        cy.get("button.btn:contains('Checkout')").click();
        return new Delivery();
    }

    get btnContinueShopping() {
        return cy.get("button.btn:contains('Continue Shopping')")
    }

    get strongTotals() {
        return cy.get("tr td:nth-child(4) strong");
    }

    get strongSum() {
        return cy.get("h3 strong");
    }
}

module.exports = Cart;