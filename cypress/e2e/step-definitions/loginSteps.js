import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

// Este paso y función es el primero que deberías pasar a commonSteps y commonPage
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

/*
No tenías este paso creado, lo he hecho usando la función validLogin de la clase LoginPage 
que ya tenías y poniendole los valores "standard_user" y "secret_sauce"
*/
When("I login with valid credentials",() => {
    loginPage.validLogin("standard_user", "secret_sauce");
});