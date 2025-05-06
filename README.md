# ♠️ PokerBank Frontend

**PokerBank Frontend** é a interface web do sistema PokerBank, construída com **React + Vite**, permitindo a interação dos usuários com as funcionalidades de gerenciamento de jogadores, fichas e jogos de poker. A aplicação consome as APIs REST do backend desenvolvido com Spring Boot.

---

## 🚀 Tecnologias Utilizadas

* ⚛️ **React** – Biblioteca para construção de interfaces declarativas.
* ⚡ **Vite** – Bundler rápido e moderno para desenvolvimento com React.
* 🌐 **React Router DOM** – Gerenciamento de rotas no SPA.
* 💅 **CSS Modules / Styled Components** – Estilização dos componentes.
* 📦 **Axios** – Cliente HTTP para requisições à API.

Perfeito! Com base na configuração real das rotas que você acabou de me mostrar, aqui está a **seção atualizada** do README referente às **rotas da aplicação**, substituindo as anteriores de `/about`, `/contact`, etc., que eram genéricas.

---

## 🧭 Navegação da Aplicação

Abaixo estão as rotas reais do projeto **PokerBank**, espelhando as funcionalidades principais do sistema:

| Caminho                | Página                     | Descrição                                 |
| ---------------------- | -------------------------- | ----------------------------------------- |
| `/`                    | 🏠 **Página Principal**    | Página inicial com visão geral            |
| `/game`                | 🆕 **Nova Partida**        | Formulário para criar uma nova partida    |
| `/game/:gameId`        | 🎲 **Detalhes da Partida** | Exibe os dados de uma partida específica  |
| `/game/:gameId/player` | ➕ **Adicionar Jogador**    | Permite adicionar jogadores a uma partida |
| `/ranking`             | 🏆 **Ranking**             | Lista os jogadores em ordem de pontuação  |

> Todas essas rotas são gerenciadas com `React Router` utilizando `createHashRouter`, o que garante compatibilidade em ambientes que não suportam history API nativamente.

---

## ⚙️ Como Executar

### ✅ Pré-requisitos

* 📦 Node.js **16+**
* 🧶 npm ou yarn

### ▶️ Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/pokerbank-frontend.git
cd pokerbank-frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
http://localhost:5173
```

---

## 🔗 Integração com a API

A aplicação se comunica com o backend por meio de **requisições HTTP** aos endpoints do Spring Boot.
Você pode configurar a URL da API no arquivo `.env`:

```env
VITE_API_URL=http://localhost:8080
```

> A API deve estar rodando antes de iniciar o frontend. Acesse [PokerBank API](https://github.com/j0aoarthur/pokerbank) para mais detalhes sobre os endpoints disponíveis.

---

## 📁 Estrutura de Arquivos

```
📂 src
├── 📄 main.jsx           # Arquivo principal da aplicação
├── 📂 pages              # Páginas do sistema (Home, About, Contact, Dashboard)
├── 📂 components         # Componentes reutilizáveis (Navbar, Card, etc.)
└── 📂 services           # Lógica de comunicação com a API (ex: apiService.js)
```

---
