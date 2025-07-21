@HomePage
Feature: Saranya_20APR2025_LamdaTesters_Feature file for HomePage Assertion
  I want to use this template for my feature file
  
  Background:
   Given the user is on the homepage

  @HomePageRedirection
  Scenario: To assert the Functioning of Webelements in home page
  When the user clicks the shop now in first block
  Then the user needs to redirect to the top of home page
  
  @HomePageBlock2
  Scenario: To redirected to the product page after clicking Shop Now button in Block 2
  When the user clicks shop now in second block
  Then the user should see the "Canon EOS 5D" page
  
  @HeadPhonesBlock
  Scenario: To redirect to the product page after clicking Head phones poster
  When the user clicks hp25 Headphones poster
  Then the user should see the "HP LP3065" product page
  
#   #@HomePageBannerControl
#   #Scenario: Navigate banner images using the left control arrow
#   #When the user clicks the left control arrow on the banner
#   #Then the "Microsoft smartwatch" banner should be displayed
  
  @TrendingProducts
  Scenario: To redirect to the trending product page when clicking the product
  When the user clicks the product in the trending product category
  Then the user should redirect to the product page
  
  @HomePageLinks
  Scenario: Verify that all links on the homepage redirect correctly
  When the user retrieves all the links on the homepage
  Then each link should redirect to its corresponding page successfully
  
  
  

  
  
  
  