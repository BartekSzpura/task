describe('Load website Gov.pl', () => {
	beforeEach('Open website', () => {
		cy.visit('/')
	})

	it('Should load Top navigation bar', () => {
		const idNavBar = '#top-bar-nav'
		cy.get(idNavBar).should('exist')
	})

	it('Should load Gov menu', () => {
		const idGovMenu = '#gov-menu'
		cy.get(idGovMenu).should('exist')
	})

	it('Should load Gov services', () => {
		const idGovServices = '.gov-services'
		cy.get(idGovServices).should('exist')
	})

	it('Should load Services citizens', () => {
		const idServicesCitizens = '#services-citizens'
		cy.get(idServicesCitizens).should('exist')
	})

	it('Should load News', () => {
		const idNews = '#Aktualnosci'
		cy.get(idNews).should('exist')
	})

	it('Should load Important subjects', () => {
		const idImportantSubjects = '.important-subjects-wrapper'
		cy.get(idImportantSubjects).should('exist')
	})

	it('Should load Projects and programs', () => {
		const idProjectsAndPrograms = '#Projekty-i-Programy'
		cy.get(idProjectsAndPrograms).should('exist')
	})

	it('Should load Footer', () => {
		const classFooter = '.footer'
		cy.get(classFooter).should('exist')
	})
})
