# Casos de Teste – Login
Sistema: Timeless  
URL: https://timeless-lumestack.netlify.app/

---

## TC-01 – Login com sucesso com credenciais válidas
**Módulo:** Login  
**Pré-condição:** Acessar a URL do site Timeless  

**Passos:**
1. Clicar no botão "Entrar" na navbar  
2. Informar o e-mail válido: `joao@exemplo.com`  
3. Informar a senha válida: `user123`  
4. Clicar no botão "Entrar"  

**Resultado Esperado:**  
O sistema deve autenticar o usuário com sucesso, redirecioná-lo para a home do site e substituir o botão "Entrar" pelo nome do usuário logado "João Silva".

**Status:** Passou  

---

## TC-02 – Login com e-mail inválido (sem @)
**Módulo:** Login  
**Pré-condição:** Acessar a URL do site Timeless  

**Passos:**
1. Clicar em "Entrar"  
2. Informar o e-mail inválido: `joaoexemplo.com`  
3. Informar a senha válida: `user123`  
4. Clicar em "Entrar"  

**Resultado Esperado:**  
O sistema deve impedir o acesso, manter o usuário na tela de login e exibir uma mensagem informando que o formato do e-mail é inválido.

**Status:** Passou  

---

## TC-03 – Login com senha inválida
**Módulo:** Login  
**Pré-condição:** Acessar a URL do site Timeless  

**Passos:**
1. Clicar em "Entrar"  
2. Informar o e-mail válido: `joao@exemplo.com`  
3. Informar a senha inválida  
4. Clicar em "Entrar"  

**Resultado Esperado:**  
O sistema deve impedir o acesso, manter o usuário na tela de login e exibir a mensagem "Credenciais inválidas".

**Status:** Passou  

---

## TC-04 – Login como Administrador
**Módulo:** Login  
**Pré-condição:** Acessar a URL do site Timeless  

**Passos:**
1. Clicar em "Entrar"  
2. Informar o e-mail válido: `admin@timelesslumestack.com`  
3. Informar a senha válida: `admin123`  
4. Clicar em "Entrar"  

**Resultado Esperado:**  
O sistema deve autenticar o administrador e redirecioná-lo para a página inicial.

**Status:** Passou  

---

## TC-05 – Login com e-mail vazio
**Módulo:** Login  

**Passos:**
1. Clicar em "Entrar"  
2. Deixar o campo e-mail vazio  
3. Informar a senha válida  
4. Clicar em "Entrar"  

**Resultado Esperado:**  
O sistema deve impedir o acesso e exibir a mensagem "Preencha esse campo".

**Status:** Passou  

---

## TC-06 – Login com senha vazia
**Módulo:** Login  

**Passos:**
1. Clicar em "Entrar"  
2. Informar e-mail válido  
3. Deixar o campo senha vazio  
4. Clicar em "Entrar"  

**Resultado Esperado:**  
O sistema deve impedir o acesso e exibir a mensagem "Preencha esse campo".

**Status:** Passou  

---

## TC-07 – Login com e-mail e senha vazios
**Módulo:** Login  

**Resultado Esperado:**  
O sistema deve impedir o acesso e exibir mensagem de obrigatoriedade de preenchimento dos campos.

**Status:** Passou  

---

## TC-08 – Login com e-mail válido contendo espaços
**Módulo:** Login  

**Resultado Esperado:**  
O sistema deve remover os espaços em branco automaticamente, autenticar o usuário e redirecioná-lo para a home.

**Status:** Passou  
