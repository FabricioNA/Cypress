/// <reference types="Cypress" />

describe("Test Contact Us form via automationTestStore", () => {
    it("Contact Us - xpath", () => {
        cy.visit("https://automationteststore.com/")
        cy.xpath("//a[contains(@href, 'contact')]").click()  
        cy.xpath('//input[@name = "first_name"]').type("Fabricio Aleixo");
        cy.xpath('//input[@id = "ContactUsFrm_email"]').type("fabricio@xpath.com.br");
        cy.xpath('//input[@id = "ContactUsFrm_email"]').should('have.attr', 'name', 'email')
        cy.xpath('//textarea[@name = "enquiry"]').type("testexpath");
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    })
    it("Contact Us - Successful", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Fabricio Aleixo")
        cy.get('#ContactUsFrm_email').type("fabricio@getmail.com.br")        
        cy.get('#ContactUsFrm_enquiry').type("TesteAddCyGet")
        cy.get('.col-md-6 > .btn').click()
    })
    it('Click in the item text', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click()
    });
    it.only('Click in the item text', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find(".prdocutname").eq(0).click()
    });
});