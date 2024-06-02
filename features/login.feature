Feature: Login Functionality

  Scenario Outline: Valid and Invalid login attempts
    Given the app is launched
    When I enter username "<username>" and password "<password>"
    And I click on the login button
    Then I should see "<message>"

    Examples:
      | username        | password       | message                                                 |
      | locked_out_user | secret_pwd     | Username and password do not match any user in this service. |
      |                 | secret_sauce   | Username is required                                    |
      | standard_user   |                | Password is required                                    |
      | standard_user   | secret_sauce   | PRODUCTS                                                | 