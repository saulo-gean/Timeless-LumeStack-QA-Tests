describe('Jornada do cliente', () => {

    it('Deve garantir que o cliente consiga acessar e navegar no sistema com sucesso ', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.contains('Entrar').click()
        cy.get('input[placeholder="seu@email.com"]').type('joao@exemplo.com')
        cy.get('input[placeholder="••••••••"]').type('user123')
        cy.get('button[type="submit"]').click()

        cy.url().should('eq', 'https://timeless-lumestack.netlify.app/')  

        cy.get('.lucide.lucide-user').click()
        cy.contains('Minha Conta').should('be.visible')
        cy.get('input[value="João Silva"]').clear().type('Saulo Gean')
        cy.get('textarea').clear().type('Brasil, 123, Recife-PE')
        cy.get('button[type="submit"]').click()
        
        cy.get('.lucide.lucide-house').click()

        cy.contains('Ver Todos →').click()
        cy.contains('890').should('be.visible')
        cy.contains('Minimalist Slate').click()
        cy.contains('890').should('be.visible')
        cy.contains('Adicionar ao Carrinho').click()

        cy.contains('Colecao').click()
        
        cy.get('input[placeholder="Buscar relógios..."]').type('Soirée Diamond')
        cy.contains('14.500').should('be.visible')
        cy.contains('Soirée Diamond').click()
        cy.contains('14.500').should('be.visible')
        cy.contains('Adicionar ao Carrinho').click()
        cy.get('svg.lucide.lucide-heart').eq(1).click()
        cy.get('svg.lucide.lucide-heart').eq(0).click()
        cy.contains('Minha Lista de Desejos').should('be.visible')
        
        cy.get('.lucide.lucide-shopping-bag').click()
        cy.wait(5000)// uma espera por conta da lerdeza do sistema
        cy.contains('14.500').should('be.visible')
        cy.contains('890').should('be.visible')

        cy.contains('Finalizar Compra').click()
})



    });