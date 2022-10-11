import * as config from '../fixtures/loginData.json'
import { customer1, customer2, customer3 } from '../fixtures/customers.json'
import { singinPage } from '../support/pages/SinginPage.js'
import { homePage } from '../support/pages/HomePage.js'

describe('Customer Intercept TCs', () => {
  beforeEach(() => {
    //cy.task('db:seed') - didn't find a way to clean customers 
    cy.visit(config.baseUrl)
    singinPage.fillCodeUsernamePassword(config.clientCode, config.userName, config.password)
    singinPage.clickSinginButton()
    singinPage.selectPos()
  })

  it('Intercept creating customer', () => {
    homePage.clickCreateCustomerButton()
    homePage.fillFirstName(customer1.firstName)
    homePage.fillLastName(customer1.lastName)
    cy.intercept(
      {
        path: '/api/',
        method: 'POST',
      }
    ).as('saveCustomer')

    homePage.clickSaveCustomerProfile()
    cy.wait('@saveCustomer').then(interception => {
      expect(interception.response.statusCode).to.equal(200)
      expect(interception.response.body).property('request').to.equal('saveCustomer')
    })

  })
})
