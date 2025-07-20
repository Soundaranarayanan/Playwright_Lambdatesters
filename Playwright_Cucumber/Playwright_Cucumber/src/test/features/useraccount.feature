Feature: Soundar_11JUL2025_LambdaTesters_UserAccountManagement

Background:
      Given the user is on the homepage
    When the user clicks on My Account and selects login
    And the user enters valid credentials 
    And the user clicks on the Login button


  @EditAccount
  Scenario: Edit user account details
    Then the user clicks the "Edit your account information" page
    And the user updates telephone number
    And clicks on the "EditInfo" Continue button
    Then user should see "Success: Your account has been successfully updated."

       @ChangePassword
  Scenario: Change user password
    Then the user clicks the Change your password page
    And the user enters current password and new password details
    And clicks on the "ChangePassword" Continue button
    Then user should see "Success: Your password has been successfully updated."
    
    @ChangePassword_EmptyNewPasswordField
      Scenario: Change user password without providing new password
    Then the user clicks the Change your password page
    And clicks on the "ChangePassword" Continue button
    Then user should see the "Password must be between 4 and 20 characters!"