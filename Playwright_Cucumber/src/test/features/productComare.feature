@ProductCompare
Feature: Saranya_20JUL2025_LambdaTesters_Product_compare_functionality

Background:
    Given the user is on the homepage

@CompareWithoutProducts
Scenario: To perform compare without adding products to list
    When the user searches "@emptySearch"
    And the user clicks product compare
    Then the user should see no products to compare error "You have not chosen any products to compare."

@AddProductToComparision
Scenario: To Add the products to comparison list
    When the user searches "@macProducts"
    And user selects the products to compare
    And the user clicks the comparision button
    And the user clicks the comparision arrow
    Then the user should see the comparison page

@CompareInvalidProduct
Scenario: To search for products with no results
    When the user searches "@mobileProducts"
    Then the user should see the message no products match
