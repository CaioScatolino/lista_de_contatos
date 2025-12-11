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
- **Persistência de dados**: Os dados são salvos localmente em um arquivo JSON (`data/list.json`).

## 🛠️ Instalação e Uso

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências executando:

```bash
npm install
```

3. Para iniciar o servidor em modo de desenvolvimento (com *watch* para alterações):

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
  "contatos": [
    "João Silva",
    "Maria Souza"
  ]
}
```
