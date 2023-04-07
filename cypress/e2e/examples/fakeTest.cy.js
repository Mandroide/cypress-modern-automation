/// <reference types="Cypress" />

describe("My next Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo")
    // What you want to intercept, what you want to mock
    const aliasBooks = "bookretrievals";
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RobotFramework",
            isbn: "SPY40",
            aisle: "2529857",
          },
        ],
      }
    ).as(aliasBooks);

    cy.get("button.btn.btn-primary").click()

    cy.wait(`@${aliasBooks}`).then(({request, response}) => {
        cy.get('tbody tr').should("have.length", response.body.length)
    });
    cy.get("p").should("have.text", "Oops only 1 Book available")

    // length of the response array = rows of the table
  });
});
