describe('Jornada de um ADM', () => {
    
    it('Deve garantir que o cliente consiga acessar e navegar no sistema com sucesso ', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.contains('Entrar').click()
        cy.get('input[placeholder="seu@email.com"]').type('admin@timelesslumestack.com')
        cy.get('input[placeholder="••••••••"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.contains('Administrador').should('be.visible')
        cy.contains('Produtos').should('be.visible')
        cy.contains('Clientes').should('be.visible')

        cy.contains('Produtos').click()

        cy.contains('Gerenciamento de Inventário').should('be.visible')

        cy.get('.lucide.lucide-plus').click()
        cy.get('input[placeholder="Nome"]').type('Omnitrix')
        cy.get('textarea[placeholder="Descrição"]').type('Relógio inspirado no Omnitrix do Ben 10. Estiloso, resistente e cheio de atitude. Atenção!: não nos responsabilizamos caso você tente girar o mostrador e acabar se transformando em um alien no meio da rua')
        cy.get('input[placeholder="Preço"]').type('2')
        cy.get('input[placeholder="Estoque"]').type('1')
        cy.get('input[placeholder="Material"]').type('Fabricado com liga alienígena ultra secreta diretamente do espaço sideral. Resistente a impactos, aventuras intergalácticas e tentativas frustradas de transformação.  Obs: na Terra, isso se traduz em plástico ABS e pulseira de silicone mesmo.')
        cy.get('input[placeholder="Tamanho da Caixa (ex: 40mm)"]').type('Pequeno demais pra transformar você em alien :(')
        cy.get('input[placeholder="URL da Imagem"]').type('https://share.google/HWd6HtxMhlxogzwlm')
        cy.get('button[type="submit"]').click()
        cy.contains('Omnitrix').should('be.visible')

        cy.contains('Clientes').click()
        cy.contains('joao@exemplo.com').click()
        cy.contains('João Silva').should('be.visible')
        cy.contains('Telefone: (11) 99999-9999').should('be.visible')
        cy.contains('Av. Paulista, 1000, São Paulo, SP').should('be.visible')
        cy.contains('Senha: user123').should('be.visible')

        cy.contains('Produtos').click()
        cy.contains('Chronograph Royale').should('be.visible')
        cy.get('svg.lucide.lucide-pen').first().click()
        cy.get('input[placeholder="Preço"]').should('be.visible')
        cy.get('input[placeholder="Preço"]').clear().type('13000')
        cy.get('button[type="submit"]').click()
        cy.get('.lucide.lucide-trash2.lucide-trash-2').first().click()

        cy.contains('Colecao').click()
        cy.contains('Omnitrix').scrollIntoView().should('be.visible')


})
});

