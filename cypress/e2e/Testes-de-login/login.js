describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('https://timeless-lumestack.netlify.app/')
    });
  it('login com credenciais validas', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('joao@exemplo.com')
    cy.get('input[placeholder="••••••••"]').type('user123')
    cy.get('button[type="submit"]').click()
    cy.get('.lucide-log-out').click()
  })
  
  it('login com email invalido sem o @', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('joaoexemplo.com')
    cy.get('input[placeholder="••••••••"]').type('user123')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="email"]').then(($input) => {
    expect($input[0].checkValidity()).to.be.false
})
  })
it('login com senha invalida', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('joao@exemplo.com')
    cy.get('input[placeholder="••••••••"]').type('user12')
    cy.get('button[type="submit"]').click()
    cy.contains('Credenciais inválidas.').should('be.visible')
});
it('login como adm', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('admin@timelesslumestack.com')// BUG RED!!!!!
    cy.get('input[placeholder="••••••••"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.lucide-log-out').click()
    
});
it('login com e-mail vazio', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').clear('')
    cy.get('input[placeholder="••••••••"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="email"]').then(($input) => {
    expect($input[0].checkValidity()).to.be.false
    }) 
});
it('login com senha vazia', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('admin@timelesslumestack.com')
    cy.get('input[placeholder="••••••••"]').clear()
    cy.get('button[type="submit"]').click()
    cy.get('input[type="Password"]').then(($input) => {
    expect($input[0].checkValidity()).to.be.false    
    })
});
it('login com email e senha vazios', () => {
  cy.contains('Entrar').click()
  cy.get('input[placeholder="seu@email.com"]').clear()
  cy.get('input[placeholder="••••••••"]').clear()
  cy.get('button[type="submit"]').click()
  cy.get('input[type="email"]').then($input => expect($input[0].checkValidity()).to.be.false)
  cy.get('input[type="password"]').then($input => expect($input[0].checkValidity()).to.be.false)
})
 it('login com credenciais validas porem com espacos no e-mail', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('                                               joao@exemplo.com                                            ')
    cy.get('input[placeholder="••••••••"]').type('user123')
    cy.get('button[type="submit"]').click()
    cy.get('.lucide-log-out').click()
  })
   it('login com credenciais validas porem com espaco na senha', () => {
    cy.contains('Entrar').click()
    cy.get('input[placeholder="seu@email.com"]').type('joao@exemplo.com')
    cy.get('input[placeholder="••••••••"]').type('                       user123                ')
    cy.get('button[type="submit"]').click()
    cy.contains('Credenciais inválidas.').should('be.visible')
  })
  it('login valido com e-mail maiúsculo', () => {
  cy.contains('Entrar').click()
  cy.get('input[placeholder="seu@email.com"]').type('JOAO@EXEMPLO.COM')
  cy.get('input[placeholder="••••••••"]').type('user123')
  cy.get('button[type="submit"]').click()
  cy.contains('Credenciais inválidas.').should('be.visible')
})


})




