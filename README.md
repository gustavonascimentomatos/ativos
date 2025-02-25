# Gestão de Ativos - Notebooks

![Capa do Projeto](./capa.png)

## Sobre o Projeto

A aplicação **Gestão de Ativos - Notebooks** é uma solução web full stack que permite gerenciar notebooks de forma eficiente. O sistema foi desenvolvido utilizando a arquitetura MVC (Model-View-Controller), proporcionando organização e escalabilidade ao código.

### Funcionalidades principais

- **Gerenciamento de Usuários:** Cadastro de usuários com informações relevantes.
- **Gerenciamento de Equipamentos:** Cadastro de notebooks com seus respectivos dados.
- **Atribuição de Equipamentos:** Associação de um notebook a um usuário, registrando:
  - Data de retirada.
  - Localização atual.
  - Data de devolução (posterior).
- **Autenticação de Usuários:** Login e logout seguro.

## Tecnologias Utilizadas

### Backend
- **Linguagem:** JavaScript
- **Framework:** Node.js com Express
- **Banco de Dados:** MySQL

### Frontend
- **View Engine:** Handlebars (HBS)

## Estrutura do Projeto

O projeto segue a arquitetura MVC:
- **Model:** Gerenciamento de dados e conexão com o banco de dados MySQL.
- **View:** Renderização de páginas utilizando Handlebars.
- **Controller:** Manipulação das regras de negócio e comunicação entre Model e View.

## Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 20.11.1 ou superior)
- **MySQL** (configurar banco de dados com o script fornecido em `/database`)

### Passos para execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/gestao-ativos-notebooks.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd gestao-ativos-notebooks
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o banco de dados no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=nome_do_banco
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```

## Estrutura de Diretórios

```plaintext
├── controllers/      # Regras de negócio
├── models/           # Manipulação de dados
├── views/            # Templates Handlebars
├── public/           # Arquivos estáticos (CSS, JS, imagens)
├── routes/           # Rotas da aplicação
├── db/               # Configuração do banco de dados
├── server.js         # Arquivo principal do servidor
└── README.md         # Documentação do projeto
```

## Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção de bug:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie suas alterações:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

### Autor
Desenvolvido por **[Gustavo Matos](https://github.com/gustavonascimentomatos)**.
