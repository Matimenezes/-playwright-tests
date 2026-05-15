# 🎭 Playwright Test - Automação de Testes E2E

Projeto de automação de testes end-to-end desenvolvido com Playwright para validação de um sistema de cadastro de entregadores.

## 📋 Sobre o Projeto

Este projeto contém testes automatizados para validar funcionalidades de cadastro de entregadores, incluindo:
- Cadastro completo de entregador
- Validações de campos obrigatórios (nome, CPF, email, whatsapp)
- Validações de endereço (CEP, número)
- Validações de método de entrega
- Upload de documentos (CNH)

## 🚀 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) - Framework de automação de testes
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação
- [Faker.js](https://fakerjs.dev/) - Geração de dados de teste
- [Node.js](https://nodejs.org/) - Ambiente de execução

## 📁 Estrutura do Projeto

```
PlaywrightTest/
├── tests/                      # Arquivos de teste
│   ├── cadastro.spec.ts       # Testes de cadastro
│   ├── home.spec.ts           # Testes da página inicial
│   ├── pages/                 # Page Objects
│   │   ├── cadastroPO.ts     # Page Object de cadastro
│   │   └── homePO.ts         # Page Object da home
│   └── massas/               # Dados de teste
│       └── massas.ts         # Massa de dados
├── playwright-report/         # Relatórios HTML dos testes
├── test-results/             # Resultados e evidências
├── Arquivos/                 # Arquivos auxiliares
├── playwright.config.ts      # Configurações do Playwright
└── package.json             # Dependências do projeto
```

## 📦 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Matimenezes/-playwright-tests.git
cd PlaywrightTest
```

2. Instale as dependências:
```bash
npm install
```

3. Instale os navegadores do Playwright:
```bash
npx playwright install
```

## ▶️ Executando os Testes

### Executar todos os testes:
```bash
npx playwright test
```

### Executar em modo debug:
```bash
npx playwright test --debug
```

### Executar um arquivo específico:
```bash
npx playwright test tests/cadastro.spec.ts
```

### Executar um teste específico:
```bash
npx playwright test -g "nome do teste"
```

### Executar em modo headed (visualizar navegador):
```bash
npx playwright test --headed
```

## 📊 Relatórios

Para visualizar o relatório HTML após a execução dos testes:

```bash
npx playwright show-report
```

O relatório será aberto automaticamente no navegador com informações detalhadas sobre:
- Status dos testes (passou/falhou)
- Tempo de execução
- Screenshots de falhas
- Traces de execução

## 🎯 Padrões Utilizados

### Page Object Model (POM)
O projeto utiliza o padrão Page Object para melhor organização e manutenibilidade:
- Separação entre lógica de teste e interação com elementos
- Reutilização de código
- Facilita manutenção quando há mudanças na interface

### Organização dos Testes
- **Testes de funcionalidade**: Validam fluxos completos
- **Testes de validação**: Verificam mensagens de erro e campos obrigatórios

## 📝 Cenários de Teste

### Testes de Cadastro
- ✅ Adicionar um entregador com sucesso
- ✅ Validar mensagem de erro ao não informar o nome
- ✅ Validar mensagem de erro ao não informar o CPF
- ✅ Validar mensagem de erro ao não informar o email
- ✅ Validar mensagem de erro ao informar whatsapp inválido
- ✅ Validar mensagem de erro ao não informar o CEP
- ✅ Validar mensagem de erro ao não informar o número do endereço
- ✅ Validar mensagem de erro ao não selecionar método de entrega
- ✅ Validar mensagem de erro ao não anexar CNH

### Testes da Página Inicial
- ✅ Validar página inicial
- ✅ Acessar a página de cadastro

## 🛠️ Configurações

O arquivo `playwright.config.ts` contém configurações como:
- **Browser**: Chromium (Chrome)
- **Headless**: false (navegador visível)
- **Parallel**: Testes executados em paralelo
- **Reporter**: HTML
- **Trace**: Habilitado para retry de testes falhados


