# @Checkout
# Feature: Saranya_12APR2025_LambdaTesters_Shopping_Cart_CheckOut_functionality
# Background:
#   Given the user is on the homepage 

# @CheckoutAsGuest
# Scenario: To checkout the shopping cart as a guest user
#   When the user searches "hp lp3065"
#   And user selects the product
#   And user clicks on the Add to Cart button
#   And user views the shopping cart
#   And the user clicks CheckOut
#   And Select Guest CheckOut
#   And Enter the details in form:
#     | Field       | Value          |
#     | First Name  | John           |
#     | Last Name   | Doe            |
#     | Email       | john126hvh@test.com  |
#     | Telephone   | 1234567890     |
#     | Address     | 123 Main St    |
#     | City        | Salem          |
#     | Postcode    | 12345          |
#     | Country     | India          |
#     | Region      | Assam          |
#   And the user accepts the terms and condition
#   And clicks continue from the checkout page
#   When the user clicks confirm order
#   Then the order success message should be displayed


#   @CheckOutEmptyCart
#   Scenario: To checkout the empty shopping cart as a registered user
#   And user views the shopping cart
#   Then the user should see the message cart is empty

#   @CheckoutAsRegisterUser
#   Scenario: To checkout the  cart as a registered user
#      When the user searches "hp lp3065"
# 	  And user selects the product
# 	  And user clicks on the Add to Cart button
# 	  And user views the shopping cart
# 	  And the user clicks CheckOut
# 	  And Select Registered user CheckOut
# 	 And Enter the details in payment register form as new user in checkout:
#     | Field       | Value          |
#     | First Name  | John           |
#     | Last Name   | Doe            |
#     | Email       |   |
#     | Telephone   | 1234567890     |
#     |Pass|1234|
#     |Confirm pass|1234|
#     | Address     | 123 Main St    |
#     | City        | Salem          |
#     | Postcode    | 12345          |
#     | Country     | India          |
#     | Region      | Assam          |
# 	  And the user accepts the terms and condition
# 	  And the user accepts the privacy policy
# 	  And clicks continue from the checkout page
# 	  When the user clicks confirm order
# 	  Then the order success message should be displayed

#    @CheckoutWithExistingEmail
#   Scenario: To checkout the  cart with existing email
#      When the user searches "hp lp3065"
# 	  And user selects the product
# 	  And user clicks on the Add to Cart button
# 	  And user views the shopping cart
# 	  And the user clicks CheckOut
# 	  And Select Registered user CheckOut
# 	 And Enter the details in payment register form:
#     | Field       | Value          |
#     | First Name  | John           |
#     | Last Name   | Doe            |
#     | Email       | john@test.com  |
#     | Telephone   | 1234567890     |
#     |Pass|1234|
#     |Confirm pass|1234|
#     | Address     | 123 Main St    |
#     | City        | Salem          |
#     | Postcode    | 12345          |
#     | Country     | India          |
#     | Region      | Assam          |
# 	  And the user accepts the terms and condition
# 	  And the user accepts the privacy policy
# 	  And clicks continue from the checkout page
# 	  Then the user sould see the email alread exist error
	  
# #	  @CheckoutAfterRemovingProduct
#   #Scenario: To checkout the  cart after removing product from cart
#      #When the user searches "hp lp3065"
# #	  And user selects the product
# #	  And user clicks on the Add to Cart button
# #	  And user views the shopping cart
# #	  And the user clicks CheckOut
# #	  And Select Registered user CheckOut
#     #And the user removes product from cart
# #	 And Enter the details in payment register form to remove product form checkout:
#     #| Field       | Value          |
#     #| First Name  | John           |
#     #| Last Name   | Doe            |
#     #| Email       | RemoveProducts@test.com  |
#     #| Telephone   | 1234567890     |
#     #|Pass|1234|
#     #|Confirm pass|1234|
#     #| Address     | 123 Main St    |
#     #| City        | Salem          |
#     #| Postcode    | 12345          |
#     #| Country     | United States  |
# #	  And the user accepts the terms and condition
# #	  And the user accepts the privacy policy
# #	  And clicks continue from the checkout page
# #	  Then the user should see the message cart is empty