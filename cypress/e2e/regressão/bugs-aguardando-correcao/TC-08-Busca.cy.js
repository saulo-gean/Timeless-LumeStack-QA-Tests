describe('Busca – Pesquisa não retorna resultados ao buscar por preço', () => {
    it('percurso do bug 08', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.contains('Ver Todos →').click()
        cy.get('input[placeholder="Buscar relógios..."]').type('2100')
        cy.contains('Nenhum relógio encontrado com esses critérios.').should('be.visible')
    });
});