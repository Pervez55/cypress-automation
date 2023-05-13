export class LoginPage {

    loginPageLocators = {
        usernameField:() => cy.get("input[name='username']"),
        passwordField:() => cy.get("input[name='password']"),
        loginBtn:() => cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']")
    }

    enterUsernameAndPassword() {
        this.loginPageLocators.usernameField().type('Admin')
        this.loginPageLocators.passwordField().type('admin123')
        this.loginPageLocators.loginBtn().click()
        
    }
    
}