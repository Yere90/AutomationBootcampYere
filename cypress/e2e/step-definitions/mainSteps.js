import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage} from "../pages/mainPage"

//Instancias de clase
let mainPage = new MainPage();


When("I check that the shopping cart icon badge does not exist",() => {
  mainPage.checkCartIconBadgeNotExist()
});

When("I add to the cart the first product in the list",() => {
  mainPage.addFirstProductToCart()
});

When("I check that the shopping cart icon contains the number {int}",(number) => {
  mainPage.checkCartIconBadgeContainNumber(number)
});

Then("I check that the select has {string} as the selected option", (selectedOption) => {
  mainPage.checkActiveOption(selectedOption);
});

Then ("I check that the first product on the list is called {string}", (nameFirstProduct) => {
  mainPage.checkNameFirstProduct(nameFirstProduct);
}); 

Then("I check that the first product in the list has a price of {float}", (priceFirstProduct) => {
  mainPage.checkPriceFirstProduct(priceFirstProduct);
});

Then("I check that the last product in the list is called {string}", (nameLastProduct) => {
  mainPage.checkNameLastProduct(nameLastProduct);
});

Then("I check the last product on the list has a price of {float}", (priceLastProduct) => {
  mainPage.checkPriceLastProduct(priceLastProduct);
});

Then ("I select the {string} option", (option) => {
  mainPage.selectOption(option);
});

Then ("I check that the first product on the list is {string}", (firstProduct) => {
  mainPage.checkNameFirstProduct(firstProduct);
});

Then("I check that the first product on the list has the price {float}", (priceProduct) => {
  mainPage.checkPriceFirstProduct(priceProduct);
});

Then("I check that the last product on the list is {string}", (lastProductName) => {
  mainPage.checkNameLastProduct(lastProductName);
});

Then ("I check the last product on the list cost {float}", (lastProductPrice) => {
  mainPage.checkPriceLastProduct(lastProductPrice);
});

Then("I select the option {string}", (selectOption) => {
  mainPage.selectOption(selectOption);
});

Then("I check the first product is {string}", (product) => {
  mainPage.checkNameFirstProduct(product);
});

Then("I check the first product cost {float}", (price) => {
  mainPage.checkPriceFirstProduct(price);
});

Then("I check the last product is {string}", (lastProduct) => {
  mainPage.checkNameLastProduct(lastProduct);
});

Then("I check the last product cost {float}", (lastPrice) => {
  mainPage.checkPriceLastProduct(lastPrice);
});

When("I click on the button {string}",(buttonName) => {
  mainPage.clickButtonByDataTest(buttonName)
});

When("I check that the element {string} should {string}",(elementDataTest, status) => {
  mainPage.checkStatusOnElementByDataTest(elementDataTest, status)
});

When("I check that the element {string} should {string} the content {string}",(elementDataTest, statusContent, content) => {
  mainPage.checkElementContent(elementDataTest, statusContent, content)
});