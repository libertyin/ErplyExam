class HomePage {

    elements = {
        createCustomerButton: () => cy.get('[data-testid=customer-badge-icon-span]'),
        createCustomerFunctionButton: () => cy.get('[data-test-key=addCustomer]'),
        firstNameInput: () => cy.get('input[data-testid=firstName]'),
        lastNameInput: () => cy.get('input[data-testid=lastName]'),
        cardNumberInput: () => cy.get('input[data-testid=customerCardNumber]'),
        emailInput: () => cy.get('input[data-testid=email]'),
        phoneInput: () => cy.get('input[data-testid=phone]'),
        mobileInput: () => cy.get('input[data-testid=mobile]'),
        homeStoreSelector: () => cy.get('[data-testid=homeStoreID]'),
        birthdayDaySelector: () => cy.get('[data-testid=date]'),
        birthdayMonthSelector: () => cy.get('[data-testid=month]'),
        saveCustomerButton: () => cy.get('[data-testid=save-button]'),
        createCustomerForm: () => cy.get('[data-testid=create-customer-container]'),
        customerFormTitle: () => cy.get('[data-testid=create-customer-container] [data-testid=title]'),
        personNavItem: () => cy.get('[data-testid=PERSON]'),
        customerNameView: () => cy.get('[data-testid=customer-name]'),
        customerCardView: () => cy.get('[data-testid=customer-card-number]'),
        customerGroupView: () => cy.get('[data-testid=customer-group]'),
        customerProfileTitle: () => cy.get('[data-testid=modal-title]'),
        closeCustomerProfileButton: () => cy.get('[data-testid=customer-view-container] [data-testid=custom-close-button]'),
        openCustomerProfileButton: () => cy.get('[data-testid=customer-badge-container]'),
        editCustomerProfileButton: () => cy.get('[data-testid=edit-customer]'),
    }

    clickCreateCustomerButton(){
        this.elements.createCustomerButton().click()
    }

    clickCreateCustomerFunctionButton(){
        this.elements.createCustomerFunctionButton().click()
    }

    fillFirstName(firstName){
        this.elements.firstNameInput().type(firstName)
    }

    fillLastName(lastName){
        this.elements.lastNameInput().type(lastName)
    }

    fillLoyaltyCardNumber(cardNumber){
        this.elements.cardNumberInput().type(cardNumber)
    }

    fillEmail(email){
        this.elements.emailInput().type(email)
    }

    fillPhone(phone){
        this.elements.phoneInput().type(phone)
    }

    fillMobile(mobile){
        this.elements.mobileInput().type(mobile)
    }

    editFirstName(newFirstName){
        this.elements.firstNameInput().clear().type(newFirstName)
    }

    editLastName(newLastName){
        this.elements.lastNameInput().clear().type(newLastName)
    }

    clearCardNumber(){
        this.elements.cardNumberInput().clear()
    }

    selectHomeStore(homeStore){
        this.elements.homeStoreSelector().select(homeStore)
    }

    selectBirthdayDay(day){
        this.elements.birthdayDaySelector().select(day)
    }

    selectBirthdayMonth(month){
        this.elements.birthdayMonthSelector().select(month)
    }

    clickSaveCustomerProfile(){
        this.elements.saveCustomerButton().click()
    }

    clickCloseCustomerProfile(){
        this.elements.closeCustomerProfileButton().click()
    }

    clickOpenCustomerProfile(){
        this.elements.openCustomerProfileButton().click()
    }

    clickEditCustomerProfile(){
        this.elements.editCustomerProfileButton().click()
    }

    expectSaveCustomerButtonDisabled(){
        this.elements.saveCustomerButton().should('be.disabled')
    }

    expectSaveCustomerButtonEnabled(){
        this.elements.saveCustomerButton().should('be.enabled')
    }

    expectCustomerFormOpened(){
        this.elements.createCustomerForm().should('be.visible')
        this.elements.customerFormTitle().should('contain.text', 'Create customer')
    }

    expectEditCustomerFormOpened(){
        this.elements.createCustomerForm().should('be.visible')
        this.elements.customerFormTitle().should('contain.text', 'Edit customer')
    }

    expectPersonSelected(){
        this.elements.personNavItem().should('have.class', 'active')
    }

    expectCustomerInViewPanel(customerName, customerCode, customerGroup){
        this.elements.customerNameView().should('contain.text', customerName)
        this.elements.customerCardView().should('contain.text', customerCode)
        this.elements.customerGroupView().should('contain.text', customerGroup)
    }

    expectCustomerInProfile(customerName){
        this.elements.customerProfileTitle().should('contain.text', customerName)
    }

    expectCreateCustomerButtonHidden(){
        this.elements.createCustomerButton().should('not.be.visible')
    }

    expectCreateCustomerFunctionButtonVisible(){
        this.elements.createCustomerFunctionButton().should('be.visible')
    }

}

export const homePage = new HomePage()