// Cypress - Spec
/// <reference types="Cypress"/>
describe("My Second Test Suite", function () {
    it("should open page", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // Mouse hover events are not supported in cypress since these are flaky.
        // Alternatively is better to use jQuery or force true
        // This is only if you care of mouse hover before clicking
        //cy.get("div.mouse-hover-content").invoke("show")
        cy.contains("Top").click({force: true})
        cy.url().should("include", "top")
    })
})