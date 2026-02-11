describe('Detalhes do Produto – Imagem exibida de forma esticada', () => {

it('percurso do bug 06', () => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    cy.contains('Minimalist Slate').closest('div').contains('Ver Detalhes').click()// comando para lembrar.

  })
});