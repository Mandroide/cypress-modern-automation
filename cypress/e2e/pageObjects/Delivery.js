class Delivery {
    setDeliveryLocation(country) {
        cy.get('#country').type(country);
        cy.get('.suggestions > ul > li > a').click();
    }

    get checkBoxTermAndConditions() {
        return cy.get("#checkbox2")
    }

    get btnPurchase() {
        return cy.get("input[type='submit']").contains("Purchase")
    }

    get divAlertSuccess() {
        return cy.get("div.alert")
    }
}

module.exports = Delivery;