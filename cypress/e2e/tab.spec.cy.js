it('Check funcionality of tab', () => {
  cy.get('#services-tabs').find('li').then(tabButtons => {
    cy.wrap(tabButtons)
      .first()
      .get('#services-citizens')
      .should('contain', "Dokumenty i dane osobowe")

    cy.wrap(tabButtons)
      .eq(1)
      .click()
      .get('#services-business')
      .should('contain', "Tarcza Antykryzysowa")

    cy.wrap(tabButtons)
      .eq(2)
      .click()
      .get('#services-officials')
      .should('contain', "Sprawy publiczne")

    cy.wrap(tabButtons)
      .eq(3)
      .click()
      .get('#services-farmer')
      .should('contain', "Wsparcie finansowe, dofinansowania do działalności")
  })
})