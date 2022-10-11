import * as config from '../fixtures/loginData.json'
import { customer1, customer2, customer3 } from '../fixtures/customers.json'
import { singinPage } from '../support/pages/SinginPage.js'
import { homePage } from '../support/pages/HomePage.js'

describe('Customer TCs', () => {
  
  beforeEach(() => {
    //cy.task('db:seed') - didn't find a way to clean customers 
    cy.visit(config.baseUrl)
    singinPage.fillCodeUsernamePassword(config.clientCode, config.userName, config.password)
    singinPage.clickSinginButton()
    singinPage.selectPos()
  })

  it('Adding a new customer by Add Customer button', () => {
    homePage.clickCreateCustomerButton()
    homePage.expectCustomerFormOpened()
    homePage.expectPersonSelected()
    homePage.expectSaveCustomerButtonDisabled()

    homePage.fillFirstName(customer1.firstName)
    homePage.expectSaveCustomerButtonDisabled()
    homePage.fillLastName(customer1.lastName)
    homePage.expectSaveCustomerButtonEnabled()

    homePage.clickSaveCustomerProfile()
    homePage.expectCreateCustomerButtonHidden()
    homePage.expectCustomerInViewPanel(customer1.firstName + ' ' + customer1.lastName, '', customer1.customerGroup)
    homePage.expectCustomerInProfile(customer1.firstName + ' ' + customer1.lastName)

    homePage.clickCloseCustomerProfile()
    homePage.expectCreateCustomerFunctionButtonVisible()
  })

  it('Adding a new customer by Add Customer Function button', () => {
    homePage.clickCreateCustomerFunctionButton()
    homePage.expectCustomerFormOpened()

    homePage.fillFirstName(customer2.firstName)
    homePage.fillLastName(customer2.lastName)
    homePage.expectSaveCustomerButtonEnabled()
    homePage.fillLoyaltyCardNumber(customer2.cardNumber)
    homePage.fillEmail(customer2.email)
    homePage.fillPhone(customer2.phone)

    homePage.clickSaveCustomerProfile()
    homePage.expectCreateCustomerButtonHidden()
    homePage.expectCustomerInViewPanel(customer2.firstName + ' ' + customer2.lastName, customer2.cardNumber, customer2.customerGroup)
    homePage.expectCustomerInProfile(customer2.firstName + ' ' + customer2.lastName)
  })

  it('Editing customer information', () => {
    homePage.clickCreateCustomerButton()
    homePage.expectCustomerFormOpened()
    homePage.fillFirstName(customer3.firstName)
    homePage.fillLastName(customer3.lastName)
    homePage.fillLoyaltyCardNumber(customer3.cardNumber)
    homePage.fillMobile(customer3.mobile)
    homePage.selectHomeStore(customer3.homeStore)
    homePage.selectBirthdayDay(customer3.birthdayDD)
    homePage.selectBirthdayMonth(customer3.birthdayMM)
    homePage.clickSaveCustomerProfile()
    homePage.expectCreateCustomerButtonHidden()
    homePage.expectCustomerInViewPanel(customer3.firstName + ' ' + customer3.lastName, customer3.cardNumber, customer3.customerGroup)
    homePage.expectCustomerInProfile(customer3.firstName + ' ' + customer3.lastName)
    homePage.clickCloseCustomerProfile()


    homePage.clickOpenCustomerProfile()
    homePage.clickEditCustomerProfile()
    homePage.expectEditCustomerFormOpened()

    homePage.editFirstName(customer1.firstName)
    homePage.editLastName(customer1.lastName)
    homePage.clearCardNumber()
    homePage.clickSaveCustomerProfile()
    homePage.expectCustomerInViewPanel(customer1.firstName + ' ' + customer1.lastName, '', customer2.customerGroup)
    homePage.expectCustomerInProfile(customer1.firstName + ' ' + customer1.lastName)

  })
  
})