# 📘 Timeless LumeStack — Documentação Técnica do Projeto

## 1. Visão Geral

O **Timeless LumeStack** é uma aplicação web de e-commerce do tipo **Single Page Application (SPA)**, focada na venda de relógios de luxo.

O sistema permite:
- Navegação pelo catálogo de produtos
- Busca e visualização de detalhes
- Gestão de carrinho de compras
- Checkout simulado
- Criação e autenticação de usuários
- Painel administrativo para gestão de produtos e clientes

### 🎯 Objetivo deste Documento
Este documento serve como **fonte da verdade** para o time de **Quality Assurance (QA)**, apoiando a criação de:
- Plano de Testes
- Casos de Teste
- Execução de Testes
- Relatórios de Bugs

---

## 2. Especificações Técnicas e Nuances do Sistema

### 🧱 Stack Tecnológica
- **Frontend:** React (Vite)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS

### 💾 Persistência de Dados
- Os dados são armazenados **em memória (RAM)**.

> ⚠️ **Observação Importante:**  
> Ao recarregar a página (F5), **todos os dados são perdidos**, incluindo:
> - Usuários cadastrados
> - Itens no carrinho
> - Pedidos realizados
> - Alterações em produtos  
> O sistema retorna ao estado inicial definido no arquivo `constants.ts`.

### 🔌 Backend
- Não existe backend real.
- Todas as operações (Login, Cadastro, CRUD, Checkout) são **simuladas no frontend**.

---

## 3. Perfis de Acesso e Credenciais de Teste

Para execução dos testes, utilize as seguintes credenciais mockadas:

| Perfil   | Email                              | Senha     | Permissões |
|--------|------------------------------------|----------|-----------|
| Admin  | admin@timelesslumestack.com         | admin123 | Acesso total ao sistema e Painel Administrativo |
| Cliente| joao@exemplo.com                    | user123  | Comprar, visualizar pedidos e editar perfil |
| Guest  | N/A                                | N/A      | Navegar, buscar produtos e adicionar ao carrinho |

---

## 4. Requisitos Funcionais (Comportamento Esperado)

### 4.1 Navegação e Interface Geral (UI)

- **Navbar** deve exibir:
  - Logo
  - Links de navegação
  - Ícone de favoritos
  - Ícone de carrinho com contador (badge)
  - Área do usuário (login/perfil)

- **Badge do Carrinho**
  - Deve aparecer no canto superior do ícone
  - Deve exibir a soma total de itens adicionados

- **Responsividade**
  - Em dispositivos móveis, o menu deve ser colapsável (menu hambúrguer)

- **Performance**
  - Transições entre telas devem ocorrer em menos de **200ms**
  - Não deve haver travamentos ou bloqueios da interface

---

### 4.2 Catálogo de Produtos e Busca

- **Listagem**
  - Produtos exibidos em formato de cards contendo:
    - Imagem
    - Nome
    - Material
    - Tamanho
    - Preço

- **Busca**
  - Deve filtrar produtos por **Nome** ou **Material**
  - Deve ser **case-insensitive** (ignorar maiúsculas/minúsculas)

---

### 4.3 Detalhes do Produto

- **Visualização**
  - Ao clicar em um produto, deve abrir a tela de detalhes com:
    - Imagem ampliada
    - Descrição completa
    - Especificações técnicas

- **Imagem**
  - Deve manter proporção correta (aspect ratio)
  - Não deve apresentar distorções

- **Legibilidade**
  - Textos devem possuir contraste adequado com o fundo

- **Ações**
  - **Adicionar ao Carrinho:** incrementa o contador na Navbar
  - **Favoritar:** alterna o estado de favorito do produto

---

### 4.4 Carrinho de Compras

- **Acesso**
  - Clique no ícone do carrinho deve abrir a visualização imediatamente

- **Listagem**
  - Exibir:
    - Imagem do produto
    - Nome
    - Quantidade
    - Subtotal por item

- **Cálculos Financeiros**
  - Subtotal do item = Preço unitário × Quantidade
  - Total do carrinho = Soma dos subtotais

- **Edição**
  - Botões **+ / -** ajustam a quantidade (mínimo de 1)
  - Botão **Remover (lixeira)** remove apenas o item selecionado

---

### 4.5 Checkout e Pagamento

- **Fluxo**
  - Usuário logado → Checkout
  - Usuário não logado → Tela de Login

- **Formulário**
  - Nome
  - Endereço
  - Dados do cartão (simulado)

- **Finalização**
  - Gerar número de pedido único
  - Salvar pedido no histórico do usuário
  - Limpar carrinho
  - Redirecionar para tela de confirmação com resumo do pedido

---

### 4.6 Autenticação (Login e Registro)

#### Login
- Admin e Cliente devem ser redirecionados para a Home
- Senha incorreta deve exibir mensagem de erro
- Sistema deve permitir login sempre que as credenciais forem válidas

#### Registro
- Deve validar se **Senha** e **Confirmar Senha** são iguais
- Usuário deve entrar logado automaticamente após o cadastro

---

### 4.7 Painel Administrativo (Acesso Restrito ao Admin)

#### Produtos
- Listagem em formato de tabela
- **Adicionar:** novo produto aparece imediatamente no catálogo
- **Editar:** alterar preço, estoque e descrição
- **Excluir:** remover produto do catálogo

#### Clientes
- Listagem de usuários cadastrados
- Visualização de detalhes:
  - Endereço
  - Telefone
- Visualização do histórico de pedidos por cliente

> ⚠️ **Segurança:**  
> A exibição de senhas é um dado sensível. Apesar de visível no mock atual, deve ser avaliada como possível vulnerabilidade.

---

## 5. Requisitos Não Funcionais

- **Usabilidade**
  - Sistema deve fornecer feedback visual para ações (ex: “Produto adicionado ao carrinho”)

- **Desempenho**
  - Transições e carregamento de imagens devem ser fluidos

- **Compatibilidade**
  - Deve funcionar corretamente nas versões recentes do:
    - Google Chrome
    - Mozilla Firefox
    - Safari
    - ---
