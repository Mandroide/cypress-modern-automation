Feature: End to end Ecommerce validation

    application Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name|gender|
    |bobz|Male|
    Then validate the form behavior
    And select the Shop Page