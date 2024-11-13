Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I open the loading page
    When I enter valid email and password
    Then I should go to home

  Scenario: Can´t do login if no credentials
    Given I open the loading page
    When I enter with no credentials
    Then I can´t press click

  Scenario: Wrong login with invalid credentials
    Given I open the loading page
    When I enter wrong email and password
    Then I should see error message