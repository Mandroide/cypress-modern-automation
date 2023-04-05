//import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
const HomePage = require("../../../pageObjects/HomePage");

let homePage;
let shopPage;
let cartPage;
Given("I open ecommerce page", () => {
    cy.fixture("example").then((data) => {
        globalThis.data = data;
    })
    cy.visit("/")
    console.log(homePage)

    homePage = new HomePage()
})

When("I add items to Cart", () => {
    shopPage = homePage.clicklnkShop()
    globalThis.data.products.forEach((value) => cy.selectProduct(value))
    cartPage = shopPage.clickLnkCheckout();
})

When("Validate the total prices", () => {
    let sum = 0;
    cartPage.strongTotals.each(($el, index, $list) => {
        const [currency, total] = $el.text().split(" ");
        sum += +total;
    });
    cartPage.strongSum.then($el => {
        const [, total] = $el.text().split(" ");
        expect(+total).to.equal(sum)
    })
})

Then("select the country submit and verify thank you", () => {
    let delivery = cartPage.clickBtnCheckout();
    delivery.setDeliveryLocation("India")
    delivery.checkBoxTermAndConditions.check({force: true})
    delivery.btnPurchase.click();
    const successMessage = "Thank you! Your order will be delivered in next few weeks :-).";
    delivery.divAlertSuccess.should("include.text", successMessage)
})

When("I fill the form details", (dataTable) => {
    const row = dataTable.rawTable[1]
    globalThis.data.name = row[0];
    homePage.nameField.type(row[0])
    homePage.sltGender.select(row[1])
})

Then("validate the form behavior", () => {
    homePage.nameField.should("have.attr", "minlength", 2)
    homePage.employmentStatus.rdoBtnEntrepreneur.should("be.disabled")
    homePage.txtTwoWayDataBinding.should("have.value", globalThis.data.name)
})


Then("select the Shop Page", () => {
    homePage.clicklnkShop()
})