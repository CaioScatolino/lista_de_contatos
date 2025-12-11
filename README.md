# Lista de Contatos

Este é um projeto simples de API para gerenciamento de uma lista de contatos, desenvolvido com Node.js e TypeScript.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Helmet](https://helmetjs.github.io/)

## ✨ Funcionalidades

- **Adicionar contato**: Rota para inserir um novo nome na lista.
- **Listar contatos**: Rota para visualizar todos os nomes cadastrados.
- **Remover contato**: Rota para apagar um contato da lista.
- **Persistência de dados**: Os dados são salvos localmente em um arquivo JSON (`data/list.json`).

## 🛠️ Instalação e Uso

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências executando:

```bash
npm install
```

3. Para iniciar o servidor em modo de desenvolvimento (com _watch_ para alterações):

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`.

## 📡 Endpoints da API

### `POST /contato`

Adiciona um novo contato à lista.

**Corpo da requisição (JSON):**

```json
{
  "name": "Nome do Contato"
}
```

### `GET /contatos`

Retorna a lista completa de contatos cadastrados.

**Resposta de exemplo:**

```json
{
  "contatos": ["João Silva", "Maria Souza"]
}
```

### `DELETE /contato`

Remove um contato da lista.

**Query Params:**

- `name`: Nome do contato a ser removido (insensível a maiúsculas/minúsculas).

**Exemplo de requisição:**
`DELETE /contato?name=João Silva`

**Resposta de exemplo:**

```json
{
  "contato": "João Silva"
}
```
