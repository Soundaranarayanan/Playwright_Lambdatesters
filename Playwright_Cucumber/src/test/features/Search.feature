Feature: Jeevika_21JUL2025_LambdaTesters_Search

  Background:
    Given the user is on the homepage

  @SearchTests
  Scenario Outline: Verify search functionality with different input types
    When the user searches with "<Input>"
    Then the "<Expected>" should be displayed

    Examples:
      | ScenarioType                   | Input        | Expected                                      |
      | valid_search_correctinput      | macbook      | MacBook                                       |
      | valid_search_partial_match     | iph          | iPhone                                        |
      | valid_search_case_insensitive  | IMAC         | iMac                                          |
      | valid_search_spaces            |  iphone      | iphone                                        |
      | valid_search_empty_input       |              | HTC Touch HD                                  |
      | invalid_search_incorrectinput  | @@@          | There is no product that matches the search criteria |


  @MinimumAndMaximumSegregation
  Scenario: Display products between minimum and maximum values
    When the user clicks on Shop by Category
    And selects a specific category from the list
    And the user enters the minimum value "50"
    And the user enters the maximum value "2000"
    Then the user should see all products within that value range

  @display_the_count_of_product_in_page
  Scenario Outline: Display the Count of Products Selected in Dropdown
    When the user clicks on Shop by Category
    And selects a specific category from the list
    And the user selects "<count>" products to display from the dropdown
    Then the user should see exactly "<count>" products displayed on the page

    Examples:
      | count |
      | 25    |
      | 50    |
      | 75    |

  @select_quickview_in_products
  Scenario: Selecting the Quick View option for a product
    When the user clicks on Shop by Category
    And selects a specific category from the list
    And hovers over a product
    And clicks the Quick View option
    Then the user should see the product preview with the description

  # @select_addtocart_in_products
  # Scenario: Selecting the add to cart option for a product
  #   When the user clicks on Shop by Category
  #   And selects a specific category from the list
  #   And hovers over a product
  #   And clicks the Add To Cart option
  #   Then the user sees a popup message
  #   And clicks on checkout button to see checkout page