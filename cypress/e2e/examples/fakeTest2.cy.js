/// <reference types="Cypress" />

describe("My next Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo")
    // What you want to intercept, what you want to mock
    const alias = "dummyUrl";
    cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
    (request) => {
      request.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
      request.continue((res) => {
        expect(res.statusCode).to.equal(403)
      })
    }).as(alias);

    cy.get("button.btn.btn-primary").click();

    cy.wait(`@${alias}`)

  });
});
