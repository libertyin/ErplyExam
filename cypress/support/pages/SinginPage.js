class SinginPage {

    elements = {
        clientCodeInput: () => cy.get('[data-testid=clientCode]'),
        usernameInput: () => cy.get('[data-testid=username]'),
        passwordInput: () => cy.get('[data-testid=password]'),
        loginButton: () => cy.get('[data-testid=login-clockin-button]'),
        posItem: () => cy.get('[data-testid=pos-item]')
    }

    fillCodeUsernamePassword(clientCode, username, password){
        this.elements.clientCodeInput().type(clientCode)
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
    }

    clickSinginButton(){
        this.elements.loginButton().click()
    }

    selectPos(){
        this.elements.posItem().click()
    }
}

export const singinPage = new SinginPage()