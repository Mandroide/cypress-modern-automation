/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";

describe("Agenda of framework topics and starting with test building", () => {
    before(() => {
        // Runs once before all tests in the block
        cy.fixture("example").then((data) => {
            globalThis.data = data;
        })
    })

    it("My Next Test Case", () => {
        //Cypress.config("defaultCommandTimeout", 8000)
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        let homePage = new HomePage()
        homePage.nameField.type(globalThis.data.name)
        homePage.txtTwoWayDataBinding.should("have.value", globalThis.data.name)
        homePage.sltGender.select(globalThis.data.gender)
        homePage.nameField.should("have.attr", "minlength", 2)
        homePage.employmentStatus.rdoBtnEntrepreneur.should("be.disabled")
        let shopPage = homePage.clicklnkShop()
        //cy.pause()
        /**
         * Diference between cy.pause() and cy.debug()
         * - pause() will always stop a test execution no matter what,
         *   debug() will only stop the test when developer tools are open
         * - pause() does not provide debug info,
         *   debug() does - it can be found inside console tab
         * - when pause() is used you get 'next' button inside cypress test runner which allows you to execute your code step by step,
         * when using debug() next button in not available
         */
        globalThis.data.products.forEach((value) => cy.selectProduct(value))
        let cartPage = shopPage.clickLnkCheckout();
        let sum = 0;
        cartPage.strongTotals.each(($el, index, $list) => {
            const [currency, total] = $el.text().split(" ");
            sum += +total;
        });
        cartPage.strongSum.then($el => {
            const [, total] = $el.text().split(" ");
            expect(+total).to.equal(sum)
        })
        let delivery = cartPage.clickBtnCheckout();
        delivery.setDeliveryLocation("India")
        delivery.checkBoxTermAndConditions.check({force: true})
        delivery.btnPurchase.click();
        const successMessage = "Thank you! Your order will be delivered in next few weeks :-).";
        delivery.divAlertSuccess.should("include.text", successMessage)
    })
})