import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

Given("I visit {string}", (url) => {
    cy.visit(url); // Visita la URL proporcionada
});

Given("I check that the url {string} the endpoint {string}", (notincludeProperty, endpoint) => {
    loginPage.checkNotIncludeProperty(notincludeProperty, endpoint);
});    


When("I login with the username {string} and password {string}",(userName, password) => {
    loginPage.validLogin(userName, password);
});

Then("I check that url {string} the endpoint {string}", (includeProperty, endpoint) => {
    loginPage.checkIncludeProperty(includeProperty,endpoint);
});

// Then("I check that the select has {string} as the selected option", (selectedOption) => {
//     loginPage.checkActiveOption(selectedOption);
// });

Then ("I check that the first product on the list is called {string}", (nameFirstProduct) => {
    loginPage.checkNameFirstProduct(nameFirstProduct);
}); 

Then("I check that the first product in the list has a price of {float}", (priceFirstProduct) => {
    loginPage.checkPriceFirstProduct(priceFirstProduct);
});

Then("I check that the last product in the list is called {string}", (nameLastProduct) => {
    loginPage.checkNameLastProduct(nameLastProduct);
});

Then("I check the last product on the list has a price of {float}", (priceLastProduct) => {
    loginPage.checkPriceLastProduct(priceLastProduct);
});

Then ("I select the {string} option", (option) => {
    loginPage.selectOption(option);
});

Then ("I check that the first product on the list is {string}", (firstProduct) => {
    loginPage.checkNameFirstProduct(firstProduct);
});

Then("I check that the first product on the list has the price {float}", (priceProduct) => {
    loginPage.checkPriceFirstProduct(priceProduct);
});

Then("I check that the last product on the list is {string}", (lastProductName) => {
    loginPage.checkNameLastProduct(lastProductName);
});

Then ("I check the last product on the list cost {float}", (lastProductPrice) => {
    loginPage.checkPriceLastProduct(lastProductPrice);
});

Then("I select the option {string}", (selectOption) => {
    loginPage.selectOption(selectOption);
});

Then("I check the first product is {string}", (product) => {
    loginPage.checkNameFirstProduct(product);
});

Then("I check the first product cost {float}", (price) => {
    loginPage.checkPriceFirstProduct(price);
});

Then("I check the last product is {string}", (lastProduct) => {
    loginPage.checkNameLastProduct(lastProduct);
});

Then("I check the last product cost {float}", (lastPrice) => {
    loginPage.checkPriceLastProduct(lastPrice);
});