describe('Ao tentar realizar o login com credenciais válidas de administrador, o sistema retorna a mensagem “Erro 500: Falha interna no servidor. Tente novamente.”, impedindo o acesso ao painel administrativo.', () => {

it('percurso do bug 01', () => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('admin@timelesslumestack.com')
    cy.get('input[placeholder="••••••••"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Erro 500: Falha interna no servidor. Tente novamente.').should('be.visible')
  })
});
//depois de algumas tentativas o erro aparece.