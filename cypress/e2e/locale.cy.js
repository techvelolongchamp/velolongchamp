describe('Language', () => {
  it('should switch to en and then back to french', () => {
    cy.visit('/')

    cy.get('a[id*="select-en"]').click()
    cy.url().should('include', '/en')

    cy.get('h2').first().contains('About Us')

    cy.get('a[id*="select-fr"]').click()
    cy.url().should('not.include', '/en')

    cy.get('h2').first().contains('Présentation')
  })
})
