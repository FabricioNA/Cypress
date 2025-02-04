/// <reference types="Cypress" />

describe("Test Contact Us form via automationTestStore", () => {
    it.only("Contact Us - Successful", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Fabricio Aleixo")
        cy.get('#ContactUsFrm_email').type("fabricio@getmail.com.br")        
        cy.get('#ContactUsFrm_enquiry').type("TesteAddCyGet")
        cy.get('.col-md-6 > .btn')
    });
});