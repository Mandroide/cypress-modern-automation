import Cart from './Cart';
class ShopPage {

    clickLnkCheckout() {
        cy.get(".nav-link:contains('Checkout')").click()
        return new Cart();
    }
}

export default ShopPage;