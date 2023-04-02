// Cypress - Spec
/// <reference types="Cypress"/>
describe("My Second Test Suite", function () {
    it("should open page", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // assertion evaluation 
        // be -> behavior
        // have -> properties

        // Checkboxes
        cy.get("#checkBoxOption1", {log: false}).as("option1", {log: false});
        cy.get("@option1").check().should("be.checked").and("have.value", 'option1')
        cy.get("@option1").uncheck().should("not.be.checked")
        // For value property of checkbox
        cy.get("input[type='checkbox']").check(['option2', 'option3'])

        // Static dropdown is <select>
        // You can select by value or inner html of <option>
        cy.get('select').select("option2").should("have.value", "option2");

        // Dynamic dropdowns
        cy.get("#autocomplete").type("ind")
/*         cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if ($el.text() === "India") {
                cy.wrap($el).click();
            }
        }) */
        cy.get(".ui-menu-item div").contains(/^India$/).click()
        // Autocomplete
        cy.get("#autocomplete").should("have.value", "India")

        // Visible/Invisible
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");

        // Radio Buttons
        cy.get("input[value='radio2']").check().should("be.checked")
    })
})