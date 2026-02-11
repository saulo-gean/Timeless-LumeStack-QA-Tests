describe('Catálogo – Produtos exibidos sem imagem', () => {

it('percurso do bug 05', () => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    cy.contains('Relógios em Destaque').should('be.visible')
    cy.contains('Ver Todos →').click()
  })
});