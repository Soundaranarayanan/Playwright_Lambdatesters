Feature: SOUNDAR_10JUL2025_LambdaTesters_Login

  Background:
    Given the user is on the homepage
    When the user clicks on My Account and selects login
  @login_valid_input
  Scenario: User tries to login with valid credentials
    
    And the user enters valid credentials
    And the user clicks on the Login button
    Then the user should see the My Account page


  @login_invalid_input
  Scenario Outline: User tries to login with invalid credentials
    And the user enters E-Mail "<email>"
    And the user enters Password "<password>"
    And the user clicks on the Login button
    Then the user should see the "<expectedResult>" and "<check>"

    Examples:
      | email            | password | expectedResult                                                                       |check  |
      | atgs2@gmail.com  | 12345     | Warning: No match for E-Mail Address and/or Password.                                |check1 |
      | atk62@gmail.com  | 1234         | Warning: No match for E-Mail Address and/or Password.                                |check2 |
      |         | 12345         |  Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.  |check3 |
      |                  |          |Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.|check4|



@logout
Scenario: User tries to login with valid credentials and logs out
    When the user enters valid credentials 
    And the user clicks on the Login button
    Then the user logs out
    And the user should see the Account Logout page 
    
