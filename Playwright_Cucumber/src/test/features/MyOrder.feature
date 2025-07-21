
@MyOrders
Feature: Saranya_16APR2025_LambdaTesters_My_orders_feature
  I want to check for the orders i made previously
  
  Background:
  Given the user is on the homepage
  
 @AccessingOdersHistory
  Scenario: To checkout view the order history after ordering
  When the user searches "hp lp3065"
	  And user selects the product
	  And user clicks on the Add to Cart button.
	  And user views the shopping cart.
	  And the user clicks CheckOut
	  And Select Registered user CheckOut
	 And Enter the details in payment register form as new user in checkout:
    | Field       | Value          |
    | First Name  | John           |
    | Last Name   | Doe            |
    | Email       |                |
    | Telephone   | 1234567890     |
    |Pass|1234|
    |Confirm pass|1234|
    | Address     | 123 Main St    |
    | City        | Salem          |
    | Postcode    | 12345          |
    | Country     | India          |
    | Region      | Assam          |
	  And the user accepts the terms and condition
	  And the user accepts the privacy policy
	  And clicks continue from the checkout page
	  When the user clicks confirm order
      When the user clicks on My Account in the top
	  And clicks my order history
	  Then the order history is displayed
	  
 @ProductReOrdering
 Scenario: To reorder the product in the order  history
 When the user searches "hp lp3065"
	  And user selects the product
	  And user clicks on the Add to Cart button.
	  And user views the shopping cart.
	  And the user clicks CheckOut
	  And Select Registered user CheckOut
	 And Enter the details in payment register form as new user in checkout:
    | Field       | Value          |
    | First Name  | John           |
    | Last Name   | Doe            |
    | Email       |                |
    | Telephone   | 1234567890     |
    |Pass|1234|
    |Confirm pass|1234|
    | Address     | 123 Main St    |
    | City        | Salem          |
    | Postcode    | 12345          |
    | Country     | India          |
    | Region      | Assam          |
	  And the user accepts the terms and condition
	  And the user accepts the privacy policy
	  And clicks continue from the checkout page
	  When the user clicks confirm order
 When the user clicks on My Account in the top
 And clicks my order history
 And user clicks view button
 When the user clicks reorder button
 Then the product reordered message should be displayed
 
 @ViewOrderAsGuest
 Scenario: to view the order history after ordering as a guest user
 When the user searches "hp lp3065"
  And user selects the product
  And user clicks on the Add to Cart button.
  And user views the shopping cart.
  And the user clicks CheckOut
  And Select Guest CheckOut
  And Enter the details in form:
    | Field       | Value          |
    | First Name  | John           |
    | Last Name   | Doe            |
    | Email       | john126hvh@test.com  |
    | Telephone   | 1234567890     |
    | Address     | 123 Main St    |
    | City        | Salem          |
    | Postcode    | 12345          |
    | Country     | India          |
    | Region      | Assam          |
  And the user accepts the terms and condition
  And clicks continue from the checkout page
  When the user clicks confirm order
  When the user clicks on My Account as guest
  When I click on the Order History link
  Then the page should scroll to the top
 
#  #@AcessingMultipleOrderHistory
#  #Scenario: To view the order history after ordering multiple products
 

 
