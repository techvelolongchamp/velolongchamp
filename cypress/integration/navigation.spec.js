describe('Navigation - Desktop', () => {
  it('should navigate to the blog page', () => {
    cy.visit('/')

    cy.get('a[id*="blog-link"]').click()
    cy.url().should('include', '/blog')

    cy.get('h1').contains('Actualités')
  })

  it('should navigate to the join page', () => {
    cy.visit('/')

    cy.get('a[id*="join-link"]').click()
    cy.url().should('include', '/join')

    cy.get('h1').contains('Nous rejoindre')
  })

  it('should navigate to the main page', () => {
    cy.visit('/blog')

    cy.get('a[id*="logo-link"]').click()
    cy.url().should('not.include', 'blog')

    cy.get('h2').first().contains('Présentation')
  })

  it('should navigate to the legal page', () => {
    cy.visit('/')
    cy.get('button[id*="accept-cookie"]').click()
    cy.get('p[id*="legal-link"]').children('a').scrollIntoView().click()
    cy.url().should('include', '/legal')

    cy.get('h1').contains('Mentions légales')
  })

  it('should navigate to the statuts page', () => {
    cy.visit('/')

    cy.get('p[id*="statuts-link"]').children('a').scrollIntoView().click()
    cy.url().should('include', '/statuts')

    cy.get('h1').contains("Statuts de l'association Vélo Longchamp")
  })

  it('should navigate to an article', () => {
    cy.visit('/blog')

    cy.get('ol > li').first().scrollIntoView().click()
    cy.url().should('include', 'blog/')
  })
})

describe('Navigation - mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-5')
  })

  it('should navigate to the blog page', () => {
    cy.visit('/')

    cy.get('a[id*="blog-link"]').click()
    cy.url().should('include', '/blog')

    cy.get('h1').contains('Actualités')
  })

  it('should navigate to the join page', () => {
    cy.visit('/')

    cy.get('a[id*="join-link"]').click()
    cy.url().should('include', '/join')

    cy.get('h1').contains('Nous rejoindre')
  })

  it('should navigate to the main page', () => {
    cy.visit('/blog')

    cy.get('a[id*="logo-link"]').click()
    cy.url().should('not.include', 'blog')

    cy.get('h2').first().contains('Présentation')
  })

  it('should navigate to the legal page', () => {
    cy.visit('/')

    cy.get('button[id*="accept-cookie"]').click()
    cy.get('p[id*="legal-link"]').children('a').scrollIntoView().click()
    cy.url().should('include', '/legal')

    cy.get('h1').contains('Mentions légales')
  })

  it('should navigate to the statuts page', () => {
    cy.visit('/')

    cy.get('p[id*="statuts-link"]').children('a').scrollIntoView().click()
    cy.url().should('include', '/statuts')

    cy.get('h1').contains("Statuts de l'association Vélo Longchamp")
  })

  it('should navigate to an article', () => {
    cy.visit('/blog')

    cy.get('ol > li').first().scrollIntoView().click()
    cy.url().should('include', 'blog/')
  })
})