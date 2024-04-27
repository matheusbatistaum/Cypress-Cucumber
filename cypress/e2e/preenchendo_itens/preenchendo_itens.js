import { Given, When, Then  } from "cypress-cucumber-preprocessor/steps";


Given("Preenchendo os ítens", ()=>{
    cy.visit("https://devfinance-agilizei.netlify.app/#")
})

When("Quando clicar em Salvar", ()=>{
    cy.contains("Nova Transação").click()
      cy.get('#description').type("Freela")
      cy.get('#amount').type(250)
      cy.get('#date').type("2023-05-05")
})

Then("Aparecer o item adicionado", ()=>{
    cy.contains('button', 'Salvar').click()
})


