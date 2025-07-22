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
@InvalidEditAccount
Scenario: Edit user account details
    Then the user clicks the "Edit your account information" page
    And the user updates without providing telephone number
    And clicks on the "EditInfo" Continue button
    Then user should see error msg "Telephone must be between 3 and 32 characters!"

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
    @Newsletter
  Scenario Outline: Subscribe or Unsubscribe from newsletter
    When the user clicks the Newsletter page
    And the user chooses to "Unsubscribe" the newsletter
    And clicks on the "Newsletter" Continue button
    Then user should see "Success: Your newsletter subscription has been successfully updated!"
  #    @ModifyAddress
  # Scenario: Adding new address
  # Then the user clicks "Modify your address book entries" page
  # And the user clicks new address
  # And user enters valid details
  # And clicks on the "NewAddress" Continue button
  # Then user should see "Your address has been successfully added"