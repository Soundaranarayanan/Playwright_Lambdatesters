Feature: SOUNDAR_10JUL2025_LambdaTesters_AddToCart

  Background:
    Given the user is on homepage
    When user clicks the Phones & PDAs category

  @addSingleProduct
  Scenario: Add a single product to the cart
    
    And user selects the iPod Nano product
    And user clicks on the Add to Cart button
    Then user should see a confirmation message stating "Success: You have added iPod Nano to your shopping cart!"
      
    
    @removeProduct
  Scenario: Remove a product from the cart

    And user selects the iPod Nano product
    And user clicks on the Add to Cart button
    When user views the shopping cart
    And user removes iPod Nano from the cart
    Then the shopping cart should display "Your shopping cart is empty!"


#   @addSameProductMultipleQuantity
# Scenario: Add multiple quantities of the same product
#   And user selects the iPod Nano product
#   And user sets the quantity to 3
#   And user clicks on the Add to Cart button
#   Then user should see a confirmation message stating "Success: You have added iPod Nano to your shopping cart!"
#   And the shopping cart should display "3 item(s)"



@AddToCartWithoutSize
Scenario: User tries to add a product to cart without selecting size

And user selects the Apple Cinema 30 product
And user clicks on the Add to Cart button
Then user should see a message "Size required!"