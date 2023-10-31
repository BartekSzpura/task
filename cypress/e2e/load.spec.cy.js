describe('Load Gov.pl Page', () => {

  beforeEach('Open website', () => {
    cy.visit('/')
  })

  it('Should load Top navigation bar', () => {
    const idNavBar = '#top-bar-nav'
    cy.get(idNavBar)
  })

  it('Should load Gov menu', () => {
    const idGovMenu = '#gov-menu'
    cy.get(idGovMenu)
  })

  it('Should load Gov services', () => {
    const idGovServices = '.gov-services'
    cy.get(idGovServices)
  })

  it('Should load Services citizens', () => {
    const idServicesCitizens = '#services-citizens'
    cy.get(idServicesCitizens)
  })

  it('Should load Aktualności', () => {
    const idAktualnosci = '#Aktualnosci'
    cy.get(idAktualnosci)
  })

  it('Should load Important subjects', () => {
    const idImportantSubjects = '.important-subjects-wrapper'
    cy.get(idImportantSubjects)
  })

  it('Should load Projekty i Programy', () => {
    const idProjektyIProgramy = '#Projekty-i-Programy'
    cy.get(idProjektyIProgramy)
  })

  it('Should load Footer', () => {
    const classFooter = '.footer'
    cy.get(classFooter)
  })


})