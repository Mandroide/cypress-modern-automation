// Cypress - Spec
/// <reference types="Cypress"/>
describe("My Second Test Suite", function () {
    it("should open page", function () {
        cy.visit('https://www.cypress.io')
        cy.visit('https://stackoverflow.com')
/*         cy.get("#opentab").then( ($el) => {
            const initialVal = $el.attr("href")
            const currentVal = $el.prop("href")
            cy.log(initialVal);
            cy.log(currentVal)
            cy.visit("https://www.mail.google.com/");
        }) */
    })
})