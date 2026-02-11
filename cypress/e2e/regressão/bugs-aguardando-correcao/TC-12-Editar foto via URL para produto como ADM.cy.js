describe('URL da imagem informada não é aplicada ao produto criado', () => {
    it('percurso do bug 1', () => {
        cy.visit('https://timeless-lumestack.netlify.app/')
        cy.contains('Entrar').click()
        cy.get('input[placeholder="seu@email.com"]').type('admin@timelesslumestack.com')
        cy.get('input[placeholder="••••••••"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Produtos').click()
        cy.get('svg.lucide.lucide-pen').eq(1).click() // item sem foto 
        cy.contains('Ocean Master Diver').should('be.visible')
        cy.get('input[placeholder="URL da Imagem"]').clear().type('https://share.google/E7a5i0xIKhSUZ6iln')// foto do bobo esponja
        cy.contains('Salvar').click()// salvo
        cy.contains('Ocean Master Diver').should('be.visible')// procurando o item pra ver c a alteracao funcionou

        
})



}
)


  

