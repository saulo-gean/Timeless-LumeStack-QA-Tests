describe('Busca – Não ignora diferença entre maiúsculas e minúsculas.', () => {

it('percurso do bug 07', () => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    cy.contains('Ver Todos →').click()
    cy.get('input[placeholder="Buscar relógios..."]').type('CHRONOGRAPH ROYALE')
    cy.contains('Nenhum relógio encontrado com esses critérios.').should('be.visible')
  })
});
