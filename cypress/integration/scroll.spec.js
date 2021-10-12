describe('Scrolling on home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should scroll to presentation part', () => {
    cy.get('a[id="presentationscrolllink"]')
      .click()
      .then(() => {
        cy.get('section[id="presentation"]').should('be.visible')
      })
  })

  it('should scroll to join part', () => {
    cy.get('a[id="joinscrolllink"]')
      .click()
      .then(() => {
        cy.get('section[id="join"]').should('be.visible')
      })
  })

  it('should scroll to meeting part', () => {
    cy.get('a[id="meetingscrolllink"]')
      .click()
      .then(() => {
        cy.get('section[id="meeting"]').should('be.visible')
      })
  })

  it('should scroll to contact part', () => {
    cy.get('a[id="contactscrolllink"]')
      .click()
      .then(() => {
        cy.get('section[id="contact"]').should('be.visible')
      })
  })
})
