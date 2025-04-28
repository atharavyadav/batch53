Feature: Login to Register Page

  Scenario Outline: User navigates to the register page and fills Contact Information
    Given the user is on the login page
    When the user enters contact information "<FirstName>" "<lastName>" "<Phone>" "<Email>"

    Examples:
      | FirstName | lastName | Phone | Email          |
      | testuser1 | pass123  | 19090 | test@gmail.com |


  Scenario Outline: User navigates to the register page and fills Mailing Information
    Given the user is on the login page
    When the user enters contact information "<Address>" "<City>" "<State>" "<PostalCode>" "<Country>"

    Examples:
      | Address   | City    | State | PostalCode     | Country |
      | testuser1 | pass123 | 19090 | test@gmail.com | INDIA   |
