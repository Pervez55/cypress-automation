/// <reference types='cypress' />

import { LoginPage } from "./Login"

let loginUser = new LoginPage()

describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginUser.enterUsernameAndPassword()

  })
})