describe('Search functionality', () => {
	beforeEach('Open website', () => {
		cy.visit('/')
	})

	it('Should load search bar and search button', () => {
		const searchBarID = '#query'
		const searchButtonType = '[type="submit"]'

		cy.get(searchBarID).should('exist')
		cy.get(searchButtonType).should('exist')
	})

	it('Should check grayed out text', () => {
		const text = 'Szukaj usług, informacji, wiadomości'

		cy.get('input[placeholder="Szukaj usług, informacji, wiadomości"]').should(
			'have.attr',
			'placeholder',
			text
		)
	})

	it('Should click search button and should search without keyword', () => {
		const searchButtonType = '[type="submit"]'
		const text = 'Wpisz czego szukasz'
		const targetWebsite = 'https://www.gov.pl/web/gov/szukaj?query='
		const classFindResults = '.search__counter b'

		cy.get(searchButtonType).click()

		cy.get('input[placeholder="Wpisz czego szukasz"]').should(
			'have.attr',
			'placeholder',
			text
		)
		cy.get(classFindResults).should('not.be.visible')
		cy.url().should('eq', targetWebsite)
	})

	it('Should click enter and search', () => {
		const searchBarID = '#query'
		const keyword = ''
		const targetWebsite = 'https://www.gov.pl/web/gov/szukaj?query='

		cy.get(searchBarID).type('{enter}')

		cy.get('input[placeholder="Wpisz czego szukasz"]').should(
			'have.value',
			keyword
		)
		cy.url().should('eq', targetWebsite)
	})

	it('Should type keyword and should search correct keyword', () => {
		const searchBarID = '#query'
		const keyword = 'Sprawy publiczne'
		const inputPlaceholder = 'input[placeholder="Wpisz czego szukasz"]'
		const searchButtonType = '[type="submit"]'
		const targetWebsite =
			'https://www.gov.pl/web/gov/szukaj?query=Sprawy+publiczne'

		cy.get(searchBarID).type(keyword)
		cy.get(searchButtonType).click()

		cy.get(inputPlaceholder).should('have.value', keyword)
		cy.url().should('eq', targetWebsite)
	})

	it('Should click delete keyword and cross button ', () => {
		const searchBarID = '[name="query"]'
		const keyword = 'Sprawy niepoprawne'
		const inputPlaceholder = 'input[placeholder="Wpisz czego szukasz"]'
		const searchButtonType = '[type="button"]'
		const classCrossButton = '.search-right-loupe'
		const startWebsite = '/web/gov/szukaj?query='

		cy.visit(startWebsite)
		cy.get(searchBarID).type(keyword)
		cy.get(searchButtonType).click()

		cy.get(inputPlaceholder).should('not.have.value')
		cy.get(classCrossButton).should('not.have', searchButtonType)
	})

	it('Should not load cross button', () => {
		const searchButtonType = '[type="button"]'
		const startWebsite = '/web/gov/szukaj?query='
		const classCrossButton = '.search-right-loupe'

		cy.visit(startWebsite)

		cy.get(classCrossButton).should('not.have', searchButtonType)
	})

	it('Should type keyword with number', () => {
		const searchBarID = '#query'
		const keyword = '12345'
		const numberOfFoundResults = 10
		const classFindResults = '.search__counter b'
		const inputPlaceholder = 'input[placeholder="Wpisz czego szukasz"]'
		const searchButtonType = '[type="submit"]'
		const targetWebsite = 'https://www.gov.pl/web/gov/szukaj?query=12345'

		cy.get(searchBarID).type(keyword)
		cy.get(searchButtonType).click()

		cy.url().should('eq', targetWebsite)
		cy.get(inputPlaceholder).should('have.value', keyword)
		cy.get(classFindResults).contains(numberOfFoundResults).should('be.visible')
	})

	it('Should type keyword with marks', () => {
		const searchBarID = '#query'
		const keyword = '³™¶'
		const numberOfFoundResults = 2
		const classFindResults = '.search__counter b'
		const inputPlaceholder = 'input[placeholder="Wpisz czego szukasz"]'
		const searchButtonType = '[type="submit"]'
		const targetWebsite =
			'https://www.gov.pl/web/gov/szukaj?query=%C2%B3%E2%84%A2%C2%B6'

		cy.get(searchBarID).type(keyword)
		cy.get(searchButtonType).click()

		cy.url().should('eq', targetWebsite)
		cy.get(inputPlaceholder).should('have.value', keyword)
		cy.get(classFindResults).contains(numberOfFoundResults).should('be.visible')
	})

	it('Should type keyword with emoticon', () => {
		const searchBarID = '#query'
		const keyword = '😀'
		const numberOfFoundResults = 8
		const classFindResults = '.search__counter b'
		const inputPlaceholder = 'input[placeholder="Wpisz czego szukasz"]'
		const searchButtonType = '[type="submit"]'
		const targetWebsite = 'https://www.gov.pl/web/gov/szukaj?query=%F0%9F%98%80'

		cy.get(searchBarID).type(keyword)
		cy.get(searchButtonType).click()

		cy.url().should('eq', targetWebsite)
		cy.get(inputPlaceholder).should('have.value', keyword)
		cy.get(classFindResults).contains(numberOfFoundResults).should('be.visible')
	})
})
