describe('Scrolling on home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should close alert slider by clicking on the icon', () => {
    const alertIcon = cy.get('div[id="show-alert"]')
    alertIcon.click()
    cy.get('a[id="notice-alert"]').should('not.visible')
  })

  it('should close alert slider by clicking outside', () => {
    const alertIcon = cy.get('div[id="show-alert"]')
    alertIcon.click(-20, -20, { force: true })
    cy.get('a[id="notice-alert"]').should('not.visible')
  })

  it('should show alert slider', () => {
    const alertIcon = cy.get('div[id="show-alert"]')
    alertIcon.click(-20, -20, { force: true })
    alertIcon.click().then(() => {
      cy.get('a[id="notice-alert"]').should('be.visible')
    })
  })
})
