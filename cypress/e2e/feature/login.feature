Feature: Login test suite

    Background: Login
    Given I visit "https://www.saucedemo.com/"


    Scenario: Check that when ordering by price the products are ordered correctly
    Given I check that the url "not.include" the endpoint "inventory"
    When I login with the username "standard_user" and password "secret_sauce"
    Then I check that url "include" the endpoint "inventory"
    # Then I check that the select has "Name (A to Z)" as the selected option
    Then I check that the first product on the list is called "Sauce Labs Backpack"
    Then I check that the first product in the list has a price of 29.99
    Then I check that the last product in the list is called "Test.allTheThings() T-Shirt (Red)"
    Then I check the last product on the list has a price of 15.99
    Then I select the "Price (low to high)" option
    Then I check that the first product on the list is "Sauce Labs Onesie"
    Then I check that the first product on the list has the price 7.99
    Then I check that the last product on the list is "Sauce Labs Fleece Jacket"
    Then I check the last product on the list cost 49.99
    Then I select the option "Price (high to low)"
    Then I check the first product is "Sauce Labs Fleece Jacket"
    Then I check the first product cost 49.99
    Then I check the last product is "Sauce Labs Onesie"
    Then I check the last product cost 7.99