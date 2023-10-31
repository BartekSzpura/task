describe('Search funcionality', () => {

  beforeEach('Open website', () => {
    cy.visit('/')
  })

  it('Should load search bar and search button', () => {
    const searchBarID = '#query'
    const searchButtonType = '[type="submit"]'

    cy.get(searchBarID)
    cy.get(searchButtonType)
  })

  // it('Should check grayed out text', () => {
  //   const text = "Szukaj usług, informacji, wiadomości"

  //   cy.get('[placeholder="Szukaj usług, informacji, wiadomości"]').should('have.value', text)

  // })

  it('Should click search button and search without keyword', () => {
    const searchButtonType = '[type="submit"]'

    cy.get(searchButtonType).click()

    cy.url().should('eq', 'https://www.gov.pl/web/gov/szukaj?query=')
  })

  it('Should click enter and search', () => {
    const searchBarID = '#query'

    cy.get(searchBarID).type('{enter}')

    cy.url().should('eq', 'https://www.gov.pl/web/gov/szukaj?query=')
  })

  it('Should type keyword and search correct keyword', () => {
    const searchBarID = '#query'
    const keyword = 'Sprawy publiczne'
    const searchButtonType = '[type="submit"]'

    cy.get(searchBarID).type(keyword)
    cy.get(searchButtonType).click()

    cy.get('.search-results__list').should('to.have', keyword)
    cy.url().should('eq', 'https://www.gov.pl/web/gov/szukaj?query=Sprawy+publiczne')
  })

  it('Should type incorrect keyword', () => {
    const searchBarID = '#query'
    const keyword = 'Sprawy niepoprawne'
    const searchButtonType = '[type="submit"]'

    cy.get(searchBarID).type(keyword)
    cy.get(searchButtonType).click()

    cy.get('.search-results__list').should('not.have', keyword)
    cy.url().should('eq', 'https://www.gov.pl/web/gov/szukaj?query=Sprawy+niepoprawne')

  })

  it('Should click cross/delete text button', () => {

    const searchBarID = '[name="query"]'
    const keyword = 'Sprawy niepoprawne'
    const searchButtonType = '[type="button"]'

    cy.visit('https://www.gov.pl/web/gov/szukaj?query=')
    cy.get(searchBarID).type(keyword)
    cy.get(searchButtonType).click()

    cy.get('.search-right-loupe').should('not.have', searchButtonType)
  })

  it('Should not have cross/delete button if there is no keyword', () => {
    const searchButtonType = '[type="button"]'

    cy.visit('https://www.gov.pl/web/gov/szukaj?query=')

    cy.get('.search-right-loupe').should('not.have', searchButtonType)
  })



})