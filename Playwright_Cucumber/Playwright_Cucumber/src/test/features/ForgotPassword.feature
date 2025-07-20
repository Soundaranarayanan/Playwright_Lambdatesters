Feature: SOUNDAR_10JUL2025_LambdaTesters_ForgotPassword

  Background:
    Given the user is on the homepage
    When the user clicks on My Account and selects login
    When user clicks on Forgotten Password link

  @ForgotPasswordOutline
  Scenario Outline: User requests a password reset link with various email inputs
    And user enters "<email>" to receive reset link
     And user clicks continue
     Then user should a message "<message>"

    Examples:
      | email                | message                                                                |
      | 2k21eee65@kiot.ac.in | An email with a confirmation link has been sent your email address.    |
      | 2k21eee89@kiot.ac.in | Warning: The E-Mail Address was not found in our records, please try again! |
      |                      | Warning: The E-Mail Address was not found in our records, please try again! |
