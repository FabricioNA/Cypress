/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Contact Us - Successful", () => {
        //cypress code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Fabricio")
        cy.get('[name="last_name"]').type("Aleixo")
        cy.get('[name="email"]').type("fabricio@getmail.com.br")
        cy.get('textarea.feedback-input').type("TesteAddCyGet")
        cy.get('[type="submit"]').click()
    }); 
    it('Contact Us - Negativa', () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Fabricio")
        cy.get('[name="last_name"]').type("Aleixo")
        cy.get('textarea.feedback-input').type("TesteAddCyGet")
        cy.get('[type="submit"]').click()
    }); 
})

