describe('login valido com e-mail maiúsculo', () => {

it('percurso do bug 03', () => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('JOAO@EXEMPLO.COM')
    cy.get('input[placeholder="••••••••"]').type('user123')
    cy.get('button[type="submit"]').click()
  })
});
