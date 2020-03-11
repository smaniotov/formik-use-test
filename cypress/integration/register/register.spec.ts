import { RouteEnum } from '../../../src/enums'

context('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('.as() - alias a DOM element for later use', () => {
    cy.get(`a[href="${RouteEnum.Login}"]`).click()
    cy.get(`form a[href="${RouteEnum.Register}"]`).click()

    cy.get('#name').type('Nomezinho')
    cy.get('#lastName').type('Sobrenomezinho')
    cy.get('#username').type('usuario')
    cy.get('#email').type('email@test.com')
    cy.get('#password').type('1234567890')
    cy.get('#confirmPassword').type('1234567890')
    cy.get('.form > .button').click()
    cy.location('pathname').should((pathname: string) => {
      expect(pathname).equals(RouteEnum.Dashboard)
    })
  })
})
