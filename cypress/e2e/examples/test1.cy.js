// Cypress - Spec
/// <reference types="Cypress"/>
describe("My First Test Suite", function () {
    it("should open page", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)
        
        // Selenium get hit url in browser, cypress get acts like findElement of Selenium
        cy.get(".product", {log: false}).should("have.length", 5)
        cy.get(".product:visible").should("have.length", 4)
        // Parent child chaining
        const productsAlias = "productLocator";
        cy.get(".products").as(productsAlias)
        cy.get(`@${productsAlias}`).find(".product").should("have.length", 4)
        cy.get(":nth-child(3) > .product-action > button").click()
        cy.get(`@${productsAlias}`).find(".product").eq(2).contains("ADD TO CART").click()

        cy.get(`@${productsAlias}`).find(".product").each(($el, index, list) => {
            const textVeg = $el.find("h4.product-name").text()
            if (textVeg.includes("Cashews")) {
                cy.wrap($el).click();
            }
        })
        const logo = cy.get(".brand").as("brand");
        logo.then($el => {
            cy.log($el.text())
        })

        cy.get("@brand").should("have.text", "GREENKART")
    })
})