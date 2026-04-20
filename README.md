# 📦 Node API 

API REST desenvolvida durante o desafio **“Sua primeira API com Node.js”** da Rocketseat, com foco em aplicar conceitos fundamentais de back-end moderno, organização de código e boas práticas.

O projeto simula um sistema de gerenciamento (como cursos, usuários ou entidades similares), explorando desde a criação de rotas até persistência de dados e estruturação da aplicação.

---

## 🚀 Tecnologias

Este projeto foi construído utilizando:

- Node.js
- TypeScript
- Fastify 
- Drizzle ORM
- Docker 
- Zod *(validação de dados)*
- Swagger
- PostgreSQL

---

## ⚙️ Funcionalidades

- ✅ Criação de registros  
- ✅ Listagem de dados
- ✅ Validação de dados  

---

## 🧠 Conceitos aplicados

- Princípios de API REST  
- Tipagem com TypeScript  
- Tratamento de erros  
- Boas práticas de código  

---
Passo a Passo para Iniciar a Aplicação

1 . Instalar dependências:
Execute npm install na raiz do projeto para instalar os pacotes.

2. Iniciar o banco de dados:
Rode docker compose up -d para subir o PostgreSQL em background.

3. Executar migrations (se necessário):
Use npm run db:migrate para aplicar as migrações no banco.

4. Rodar o servidor:
Execute npm run dev para iniciar o servidor em modo de desenvolvimento (porta 3333).

5. Drizzle Studio:
Execute npx drizzle-kit studio

6 . Acessar a aplicação:
API: http://localhost:3333/courses (exemplo de rota)
Documentação Swagger: http://localhost:3333/docs

