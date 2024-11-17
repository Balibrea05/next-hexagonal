Feature: Login functionality

  Background: User navigates to the login page
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the home page

  Scenario: Login fails with an invalid email
    When the user enters an invalid email
    And clicks the login button
    Then the user should see an error message "Invalid email or password"

  Scenario: Login fails with an incorrect password
    When the user enters a valid email and an incorrect password
    And clicks the login button
    Then the user should see an error message "Invalid email or password"

  Scenario: Login button is disabled with an empty email
    When the user enters a password but leaves the email field empty
    Then the login button should be disabled

  Scenario: Login button is disabled with an empty password
    When the user enters an email but leaves the password field empty
    Then the login button should be disabled
