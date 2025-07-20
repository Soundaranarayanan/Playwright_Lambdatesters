Feature: Soundar_11JUL2025_LambdaTesters_ProductReview

Background:
    Given the user is on the homepage
    When user clicks the Phones & PDAs category
    And user selects the iPod Nano product
    And user is on the product review section

@validReview
Scenario: Submit a valid product review with rating and comment
    And user enters "soundar" in the Name field
    And user writes "Excellent product with great features" in the Review field
    And user selects a 5-star rating
    When user clicks on the Continue button to submit the review
    Then success message "Thank you for your review. It has been submitted to the webmaster for approval." should be displayed


@noRatingNoComment
Scenario: Submit review without rating and without comment
    And user enters "soundar" in the Name field
    And user leaves the Review field blank
    And user does not select any rating
    When user clicks on the Continue button to submit the review
    And error message "Please select a review rating" should be displayed
@withRatingWithComment    
Scenario: Submit review with rating but without comment
    And user enters "soundar" in the Name field
    And user leaves the Review field blank
    And user selects a 4-star rating
    When user clicks on the Continue button to submit the review
    Then error message "Warning: Review Text must be between 25 and 1000 characters!" should be displayed

