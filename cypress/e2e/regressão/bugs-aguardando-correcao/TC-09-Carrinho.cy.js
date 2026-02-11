describe('Carrinho – Subtotal não é atualizado ao aumentar quantidade do item', () => {
    it('percurso do bug 09', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.contains('Chronograph Royale').closest('div').contains('Ver Detalhes').click()
        cy.contains('Adicionar ao Carrinho').click()
        cy.contains('Coleção').click()
        cy.contains('Minimalist Slate').closest('div').contains('Ver Detalhes').click()
        cy.contains('Adicionar ao Carrinho').click()
        cy.get('.lucide-shopping-bag').first().click()
        cy.wait(5000)
        cy.contains('13.390').should('be.visible') //preco dos dois produtos
        cy.contains('+').first().click() //cliquei no + para adicionar +1 daquele produtos no carrinho
        cy.contains('$25.000').should('be.visible')// preco aumentou pra 25mil pelo 2 juntos 
        cy.contains('$13.390').should('be.visible')// porem o subtotal nao mudou! MUITO GRAVE.
        
    });
});