class Login


{
clickSignInButtonFromHomePage()
{
    cy.get('span.block.text-text.text-sm.font-bold.nexa').should('have.text', "Sign In").click();
}
setEmail(email)
{
    cy.get('input[name="email"]').type(email)
}

setPassword(password)
{
    cy.get('input[name="password"]').type(password)
}

clickLogin()
{
    cy.contains('button[type="submit"]', 'Login').click()
}

verifyLogin()
{
    cy.get('.mb-1 > .text-black').should('have.text', 'GARAGE')
}
verifyInvalidCredentials()
{
    cy.get('[data-content=""] > div').should('have.text', 'Invalid Credentials')
}
}


export default Login;