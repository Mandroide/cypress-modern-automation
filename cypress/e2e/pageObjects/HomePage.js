import ShopPage from "./ShopPage";

class HomePage {

    get employmentStatus () {
        return {
            rdoBtnStudent: cy.get('#inlineRadio1'),
            rdoBtnEmployed: cy.get('#inlineRadio2'),
            rdoBtnEntrepreneur: cy.get('#inlineRadio3')
        };
    }

    get txtName() {
        return cy.get("input[name='name']:nth-child(2)");
    }

    get txtTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    clicklnkShop() {
        cy.get("a.nav-link").contains("Shop").click();
        return new ShopPage();
    }

    get sltGender() {
        return cy.get("select");
    }

    get nameField() {
        return cy.get("input[name='name']:nth-child(2)");
    }


}

export default HomePage;