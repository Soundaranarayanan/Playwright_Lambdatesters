@ProductCompare
Feature: Saranya_15APR2025_LambdaTesters_Product_compare_functionality

Background:
    Given the user is on the homepage

@CompareWithoutProducts
Scenario Outline: To perform compare without adding products to list
    When the user searches " "
    And the user clicks product compare
    Then the user should see no products to compare error "You have not chosen any products to compare."

@AddProductToComparision
Scenario: To Add the products to comparision list
    When the user searches "mac"
    And user selects the products to compare
    And the user clicks the comparision button
    And the user clicks the comparision arrow
    Then the user should see the comparison page

 @CompareInvalidProduct
 Scenario: To Add the products to comparision list
    When the user searches "mobile"
    Then the user should see the message no products match
