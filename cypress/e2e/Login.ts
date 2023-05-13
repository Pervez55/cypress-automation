export class LoginPage {

    loginPageLocators = {
        usernameField:() => cy.get("input[name='username']"),
        passwordField:() => cy.get("input[name='password')]")
    }

    enterUsernameAndPassword() {
        this.loginPageLocators.usernameField().type('Admin')

        
    }
    
}