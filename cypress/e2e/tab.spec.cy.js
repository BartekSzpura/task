describe('Tab functionality', () => {
	
  beforeEach('Open website', () => {
		cy.visit('/')
	})

	it('Should load all tabs', () => {
		cy.fixture('tabs.json').then((data) => {
      const numberOfKeywords = data.keywords.length
      const idTabList = '#services-tabs'
      
      cy.get(idTabList)
        .invoke('text')
        .then(text => {
          data.keywords.forEach(keyword => {
            expect(text).to.contain(keyword)
          })
			})

      cy.get('.tab-content').then(($tabs) => {
        const numberOfTabs = $tabs.length
        expect(numberOfTabs).to.equal(numberOfKeywords)
      })
    })
	})

  it('Should redirect to correct tab and should load content of tab', () => {
    cy.fixture('tabContentServices.json').then((data) => {
      
      data.tabs.forEach(tab => {
        const tabId = tab.tabId
        const numberOfExpectedTabs = tab.tabContent.length
        const servicesId = tab.servicesId
        
        cy.get(tabId).click()
        cy.get(servicesId)
          .invoke('text')
          .then(text => {
            tab.tabContent.forEach(object => {
              expect(text).to.contain(object)
            })
          })
        
        
        cy.get(servicesId).find('li').then(($tabs) => {
          const numberOfContentTabs = $tabs.length
          expect(numberOfContentTabs).to.equal(numberOfExpectedTabs)
        }) 
      })
    })
  })
})
