# 🚀 Gerador de QrCode e Password

Esse simples sistema gera QR Codes via terminal e também senhas seguras.  
Basta escolher a opção desejada quando o programa estiver rodando!

---

## 📋 Funcionalidades

- ✅ Gerar QR Code  
- ✅ Gerar Senhas  

---

## ⚙️ Pré-requisitos

Antes de começar, verifique se você tem instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)  
- npm (vem junto com o Node.js)  

---

## 🛠️ Como rodar o projeto

```bash
# 1 - Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git

# 2 - Vá até o diretório clonado
cd seu-repo

# 3 - Instale as dependências
npm install

# 4 - Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
UPPERCASE_LETTERS=TRUE
LOWERCASE_LETTERS=TRUE
NUMBER=TRUE
SPECIAL_CARACTERS=TRUE
PASSWORD_LENGTH=12

# 5 - Rode a aplicação
npm start
