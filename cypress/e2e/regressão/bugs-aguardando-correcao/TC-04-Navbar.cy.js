describe('Navbar – Texto "Coleção" escrito incorretamente', () => {

it('percurso do bug 04', () => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    cy.contains('Colecao').should('be.visible')
  })
});