Feature: Jeevika_21JUL2025_LambdaTesters_MegaMenu

  Background:
    Given the user is on the homepage

  @mega_menu
  Scenario: User chooses Apple from main menu
  	When user clicks on the main menu
    And clicks on apple option
    Then the user should see products from apple
