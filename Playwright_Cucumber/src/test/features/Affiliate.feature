Feature: Jeevika_15APR2025_LambdaTesters_AffiliateAccount

@affiliateTest
Scenario Outline: Register a user and register as affiliate with valid and invalid inputs
    Given the user is on the homepage  
    When the user clicks on My Account and click on register
    Then the user should see the registration page form 
      
	When the user enters the following "<First Name>", "<Last Name>", "<Email>", "<Telephone>", "<Password>" and "<Confirm Password>"  
    And agrees to the Privacy Policy checkbox 
    And submits the registration form  successfully
    Then the user should see "Your Account Has Been Created!" message
    
    When the user clicks on continue on register page
    And the user clicks on register your affiliate information  
    And enters payee name "<name>"  
    And clicks on checkbox based on "<checkbox>"  
    And clicks on register continue button  
    # Then the user should see the affiliate message as "<affiliateMessage>"


    Examples:
| First Name | Last Name | Email               | Telephone  | Password | Confirm Password | name | checkbox | affiliateMessage                                              |
| priya      | ram       | random              | 1234567891 | 1234     | 1234             | jeev | yes      | Success: Your account has been successfully updated. |
| jeev       | ram       | random    | 1234567890 | 1234     | 1234             |      | yes      | Warning: You must agree to the About Us!             |
| jeev       | ram       | random   | 1234567890 | 1234     | 1234             | jeev | no       | Warning: You must agree to the About Us!             |
| jeev       | ram       | random  | 1234567890 | 1234     | 1234             |      | no       | Warning: You must agree to the About Us!             |
