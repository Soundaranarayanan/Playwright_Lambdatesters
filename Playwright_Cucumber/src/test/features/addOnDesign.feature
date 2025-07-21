@AddonDesigns
Feature: Saranya_26MAY2025_LambdaTesters_AddOnsDesign

 Background:
    Given the user is on the homepage
 
  @addOns_Design_Alerts
  Scenario: user clicks on alert designs of addOns
    When the user clicks on addons
    And clicks on designs option
    When the user romoves one of the alert
    Then the alert count should be reduced
    
    
   