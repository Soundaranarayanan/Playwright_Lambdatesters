@registration
Feature: Saranya_18JUL2025_LambdaTesters_User_Registration_Functionality

  I want to register for the ecommerce LambdaTest account
  
   Background:  
    Given the user is on the homepage  
    When the user clicks on My Account.  
    And clicks the register button

  @ValidRegistrationInputs @smoke
  Scenario Outline: Register with valid inputs  
    When the user enters "<First Name>", "<Last Name>", "<Email>", "<Telephone>", "<Password>" and "<Confirm Password>"  
    And agrees to the Privacy Policy  
    And submits the registration form  
    Then the user should see "Your Account Has Been Created!"  

    Examples:  
      | First Name | Last Name | Email              | Telephone   | Password | Confirm Password |  
      | priya      | ram       |                    | 1234567891  | 1234     | 1234             |  
      # | saran      | A         |                    | 1239306     | 12345    | 12345            |  

  @InValidRegistrationInputs
  Scenario Outline: Register with invalid inputs    
    When the user enters invalid "<First Name>", "<Last Name>", "<Email>", "<Telephone>", "<Password>" and "<Confirm Password>"
    And agrees to the Privacy Policy
    And submits the registration form  
    Then the user should see "<ErrorMessage>" for "<Test Case Name>"  

    Examples:  
      | First Name | 	Last Name | Email              | Telephone   | Password | Confirm Password | ErrorMessage                                              | Test Case Name     |  
      |            | ram       | priya123@gmail.com | 1234567891  | 1234     | 1234             | First Name must be between 1 and 32 characters!          | empty first name   |  
      | priya      | ram       | oign@gma.com       | 1234567891  | 1234     | 1234             | Warning: E-Mail Address is already registered!           | existing email     |  
      | priya      | ram       | priya123@gmail.com | 1234567891  |          | 1234             | Password must be between 4 and 20 characters!            | empty password     |  
      | priya      | ram       | priya123@gmail.com | 1234567891  | 1234     | 4321             | Password confirmation does not match password!           | password mismatch  |
      
   @RegistrationWithoutAcceptingPrivacyPolicy
   Scenario Outline: Register with +valid inputs  with out checking privacy policy
    When the user enters "<First Name>", "<Last Name>", "<Email>", "<Telephone>", "<Password>" and "<Confirm Password>"  
    # And the user not agrees to the privacy policy   
    And submits the registration form  
    Then the user should see "<ErrorMessage>" for "<Test Case Name>"  

    Examples:  
      | First Name | Last Name | Email              | Telephone   | Password | Confirm Password | ErrorMessage                                  |Test Case Name                   |
      | priya      | ram       | priya123@gmail.com | 1234567891  | 1234     | 1234             | Warning: You must agree to the Privacy Policy!|Not checking privacy policy|
   
   