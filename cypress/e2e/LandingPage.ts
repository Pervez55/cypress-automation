export class LandingPage {

    profileIconLocators = {
        profileBox:() => cy.get('body').contains('Paul Collings'),
        dropDownMenu:() => cy.get('.oxd-dropdown-menu')
    }

    goToProfileBubble () {
        this.profileIconLocators.profileBox().click()
        this.profileIconLocators.dropDownMenu().contains('About').click()
    }


}