Feature: Jeevika_01MAY2025_LambdaTesters_AddOns

 Background:
    Given the user is on the homepage
 
  @addOns_Design_option
  Scenario: user clicks on designs of addOns
    When the user clicks on addons
    And clicks on designs option
    Then the user should see the design page
    
    @addOns_camera_text_click
    Scenario: user clicks on camera text to navigate to camera product page
    When the user clicks on addons
    And clicks on designs option
    And clicks on camera text
   	Then the user should be navigated to camera page
    
    