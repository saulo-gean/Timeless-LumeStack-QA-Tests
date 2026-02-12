describe('Carrinho – Abertura apresenta atraso ao clicar no ícone', () => {
    it('percurso do bug 11', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.get('.lucide-shopping-bag').first().click()
        
    });
});