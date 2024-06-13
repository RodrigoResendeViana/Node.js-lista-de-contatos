# Lista de Contatos

Este projeto é uma API para gerenciar uma lista de contatos. É possível realizar um cadastro, fazer login e, em seguida, salvar e gerenciar seus contatos específicos.

## Descrição

A API permite que os usuários:
- Cadastrem-se
- Realizem login
- Salvem, visualizem, atualizem e excluam contatos associados ao seu login

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (com Mongoose)
- JWT para autenticação
- dotenv para variáveis de ambiente

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/lista-de-contatos.git
    cd lista-de-contatos
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:
    ```env
    PORT=porta-a-sua-escolha
    CONNECTION_STRING=sua-string-de-conexao-com-o-mongodb
    ACCESS_TOKEN_SECRET=sua-chave-secreta-para-jwt
    ```

4. Inicie o servidor:
    ```sh
    npm start
    ```

## Uso

### Endpoints de Usuário

- **Cadastro de Usuário**
    ```http
    POST /api/users/register
    ```
    Corpo da requisição:
    ```json
    {
        "username": "seu-usuario",
        "email": "seu-email",
        "password": "sua-senha"
    }
    ```

- **Login de Usuário**
    ```http
    POST /api/users/login
    ```
    Corpo da requisição:
    ```json
    {
        "email": "seu-email",
        "password": "sua-senha"
    }
    ```

- **Usuário Atual**
    ```http
    GET /api/users/current
    ```
    Cabeçalho:
    ```http
    Authorization: Bearer seu-token-jwt
    ```

### Endpoints de Contatos

- **Obter Todos os Contatos**
    ```http
    GET /api/contacts
    ```
    Cabeçalho:
    ```http
    Authorization: Bearer seu-token-jwt
    ```

- **Criar Novo Contato**
    ```http
    POST /api/contacts
    ```
    Cabeçalho:
    ```http
    Authorization: Bearer seu-token-jwt
    ```
    Corpo da requisição:
    ```json
    {
        "name": "nome do contato",
        "email": "email do contato",
        "phone": "telefone do contato"
    }
    ```

- **Obter Contato por ID**
    ```http
    GET /api/contacts/:id
    ```
    Cabeçalho:
    ```http
    Authorization: Bearer seu-token-jwt
    ```

- **Atualizar Contato por ID**
    ```http
    PUT /api/contacts/:id
    ```
    Cabeçalho:
    ```http
    Authorization: Bearer seu-token-jwt
    ```
    Corpo da requisição:
    ```json
    {
        "name": "novo nome do contato",
        "email": "novo email do contato",
        "phone": "novo telefone do contato"
    }
    ```

- **Deletar Contato por ID**
    ```http
    DELETE /api/contacts/:id
    ```
    Cabeçalho:
    ```http
    Authorization: Bearer seu-token-jwt
    ```
    
  ## Contribuição
    1. Faça um fork do projeto
    2. Crie uma branch para sua feature (git checkout -b feature/nova-feature)
    3. Commit suas alterações (git commit -m 'Adicionei uma nova feature')
    4. Faça o push para a branch (git push origin feature/nova-feature)
    5. Abra um Pull Request
