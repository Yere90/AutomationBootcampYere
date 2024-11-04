Feature: Login test suite

    Background: Login
    Given I visit "https://www.saucedemo.com/"


# Este test no es de login, sino de main te recomiendo que lo muevas a su correspondiente archivo

#Procura usar las particulas de Gherkin correctamente, When en las acciones principales, Then en las validaciones principales
    Scenario: Check that when ordering by price the products are ordered correctly
    Given I check that the url "not.include" the endpoint "inventory"
    When I login with the username "standard_user" and password "secret_sauce"
    And I check that url "include" the endpoint "inventory"
    And I check that the select has "Name (A to Z)" as the selected option
    And I check that the first product on the list is called "Sauce Labs Backpack"
    And I check that the first product in the list has a price of 29.99
    And I check that the last product in the list is called "Test.allTheThings() T-Shirt (Red)"
    And I check the last product on the list has a price of 15.99
    When I select the "Price (low to high)" option
    And I check that the select has "Price (low to high)" as the selected option
    And I check that the first product on the list is "Sauce Labs Onesie"
    And I check that the first product on the list has the price 7.99
    And I check that the last product on the list is "Sauce Labs Fleece Jacket"
    Then I check the last product on the list cost 49.99
    When I select the option "Price (high to low)"
    And I check that the select has "Price (high to low)" as the selected option
    And I check the first product is "Sauce Labs Fleece Jacket"
    And I check the first product cost 49.99
    And I check the last product is "Sauce Labs Onesie"
    Then I check the last product cost 7.99