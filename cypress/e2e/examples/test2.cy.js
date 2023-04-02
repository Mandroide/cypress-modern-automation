// Cypress - Spec
/// <reference types="Cypress"/>
describe("My Second Test Suite", function () {
    it("should open page", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)
        
        // Selenium get hit url in browser, cypress get acts like findElement of Selenium
        // Parent child chaining
        cy.get(".products").as("productLocator")
        cy.get(":nth-child(3) > .product-action > button").click()
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()

        cy.get("@productLocator").find(".product").each(($el, index, list) => {
            const textVeg = $el.find("h4.product-name").text()
            if (textVeg.includes("Cashews")) {
                cy.wrap($el).click();
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.get("button").click()
    })
})