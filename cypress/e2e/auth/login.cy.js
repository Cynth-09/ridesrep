import Login from "../../pageObjects/loginPage";

describe('Login Page Tests', () => {

    beforeEach(() => {
        cy.visit('/explore', {
            auth: {
              username: Cypress.env('username'),
              password: Cypress.env('password')
            }
        })
    });
       

    //using pom
    it('LoginTest With Valid Credentials', () => {
    const  ln=new Login();  //ln  is object rference variable
    ln.clickSignInButtonFromHomePage()
    ln.setEmail("reet2@yopmail.com")
    ln.setPassword("12345678")
    ln.clickLogin();
    ln.verifyLogin();
    cy.get('button:nth-child(2)').eq(1).click(); //click on the settings icon to log out
    cy.get('span.nexa.font-bold.text-black').contains('SETTINGS').should('exist');

    cy.contains('button[role="tab"]', 'ACCOUNT').should('be.visible').click();
    cy.contains('button', 'Logout')
  .scrollIntoView()
  .should('be.visible')
  .click();


    //cy.get('#radix-\\:r16\\:-trigger-account').click();



});
   it('LoginTest With Invalid Credentials', () => {
    const  ln=new Login();  //ln  is object rference variable
    ln.clickSignInButtonFromHomePage()
    ln.setEmail("JohnDoe@ypmail.com")
    ln.setPassword("12345678")
    ln.clickLogin();
    ln.verifyInvalidCredentials();
})
});
