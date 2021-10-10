describe('Scrolling on home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should scroll to presentation part', () => {
    cy.get('a[id="presentation"]')
      .click()
      .then(() => {
        cy.get('section[id="presentation"]').should('be.visible')
      })
  })

  it('should scroll to join part', () => {
    cy.get('a[id="join"]')
      .click()
      .then(() => {
        cy.get('section[id="join"]').should('be.visible')
      })
  })

  it('should scroll to meeting part', () => {
    cy.get('a[id="meeting"]')
      .click()
      .then(() => {
        cy.get('section[id="meeting"]').should('be.visible')
      })
  })

  it('should scroll to contact part', () => {
    cy.get('a[id="contact"]')
      .click()
      .then(() => {
        cy.get('section[id="contact"]').should('be.visible')
      })
  })
})
