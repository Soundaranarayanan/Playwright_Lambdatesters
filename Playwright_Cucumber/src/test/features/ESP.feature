Feature: Soundar_21JUL2025_LambdaTesters_EstimateShippingStatus

  Background:
       Given the user is on the homepage
    When the user clicks on My Account and selects login
    And the user enters valid credentials
    And the user clicks on the Login button

  @EstimateShipping
  Scenario: Estimate the shipping and taxes
    When the user clicks on the Shopping Cart
    And the user clicks the Edit Cart button
    And the user clicks the Estimate Shipping and Taxes button
    And the user enters the required shipping details
    And the user clicks the Get Quotes button
    And the user selects Flat Shipping Rate and clicks Apply Shipping button
    Then the user should see message "Success: Your shipping estimate has been applied!"
@EstimateShippingInvalid
Scenario: Estimate shipping with empty fields
    When the user clicks on the Shopping Cart
    And the user clicks the Edit Cart button
    And the user clicks the Estimate Shipping and Taxes button
    And the user leaves the shipping details empty
    And the user clicks the Get Quotes button
    Then the user should see error message "Please select a region / state!"

