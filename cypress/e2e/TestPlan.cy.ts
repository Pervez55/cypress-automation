/// <reference types='cypress' />

import { LandingPage } from "./LandingPage"
import { LoginPage } from "./Login"

let loginUser = new LoginPage()
let landingPage = new LandingPage()

describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginUser.enterUsernameAndPassword()
    landingPage.goToProfileBubble()

  })
})