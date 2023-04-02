// Cypress - Spec
/// <reference types="Cypress"/>
describe("My Second Test Suite", function () {
    it("should open page", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
/*         cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
            const text = $e1.text();
            if (text.includes("Python")) {
                cy.wrap($e1).next()
            }
        }) */
        cy.get("[name='courses'] tr td:nth-child(2)")
        .contains("Python Language")
        .next()
        .should("have.text", 25)
    })
})