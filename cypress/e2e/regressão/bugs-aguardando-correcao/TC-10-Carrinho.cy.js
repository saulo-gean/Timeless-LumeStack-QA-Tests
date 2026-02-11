describe('Carrinho – Remoção de item exclui sempre o primeiro da lista', () => {
    it('percurso do bug 10', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.contains('Chronograph Royale').closest('div').contains('Ver Detalhes').click()
        cy.contains('Adicionar ao Carrinho').click()

        cy.contains('Coleção').click()
        cy.contains('Minimalist Slate').closest('div').contains('Ver Detalhes').click()
        cy.contains('Adicionar ao Carrinho').click()

        cy.contains('Colecao').click()
        cy.contains('Lunar Phase Limited').click()
        cy.contains('Adicionar ao Carrinho').click()

        cy.contains('Colecao').click()
        cy.contains('Mariner Automatic').click()
        cy.contains('Adicionar ao Carrinho').click()

        cy.contains('Colecao').click()
        cy.contains('Heritage 1950').click()
        cy.contains('Adicionar ao Carrinho').click()
        cy.get('svg.lucide.lucide-shopping-bag').first().click()

        //essa parte e pra ser lembrada.O item a ser excluido sera o 'Minimalist Slate'
        cy.get('svg.lucide.lucide-trash2.lucide-trash-2').eq(1).click()
        // bug confirmado. apagou o 'Chronograph Royale' msm clicando para apagar o 'Minimalist Slate'.
        cy.contains('Minimalist Slate').should('be.visible')
        //confirmacao
        //2 teste
        cy.get('svg.lucide.lucide-trash2.lucide-trash-2').eq(1).click() 
        //essa parte e pra ser lembrada.O item a ser excluido sera o 'Lunar Phase Limited'
        cy.contains('Lunar Phase Limited').should('be.visible')
        // bug confirmado. apagou o 'Chronograph Royale' msm clicando para apagar o 'Minimalist Slate'.


        
    });
});