/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Contact Us - Successful", () => {
        //cypress code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.get('[name="first_name"]').type("Fabricio")
        cy.get('[name="last_name"]').type("Aleixo")
        cy.get('[name="email"]').type("fabricio@getmail.com.br")
        cy.get('textarea.feedback-input').type("TesteAddCyGet")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    }); 
    it('Contact Us - Negativa', () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Fabricio")
        cy.get('[name="last_name"]').type("Aleixo")
        cy.get('textarea.feedback-input').type("TesteAddCyGet")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    }); 
})

