import { test } from '@playwright/test';
import { CadastroPage } from './pages/cadastroPO';
import { HomePage } from './pages/homePO';

test('Adicionar um entregador', async ({ page }) => {      
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.dadosPessoais();
    await cadastroPage.endereco();
    await cadastroPage.tipoDeEntregaCarro();
    await cadastroPage.FinalizarCadastro();
})

test('Validar mensagem de erro ao não informar o nome', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.preencherDadosPessoaisComNomeVazio();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroNome();
})

test('Validar mensagem de erro ao não informar o CPF', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.preencherDadosPessoaisComCPFVazio();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroCPF();
})

test('Validar mensagem de erro ao não informar o email', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.preencherDadosPessoaisComEmailVazio();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroEmail();
})

test('Validar mensagem de erro ao informar whatsapp inválido', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.preencherDadosPessoaisComWhatsappInvalido();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroWhatsapp();
})

 test('Validar mensagem de erro ao não informar o CEP', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.dadosPessoais();
    await cadastroPage.preencherEnderecoComCEPVazio();
    await cadastroPage.validarMensagemErroCEP();
})
test('Validar mensagem de erro ao não informar o número do endereço', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.dadosPessoais();
    await cadastroPage.preencherEnderecoComNumeroVazio();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroNumero();
})

test('Validar mensagem de erro ao não selecionar método de entrega', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.dadosPessoais();
    await cadastroPage.endereco();
    await cadastroPage.naoSelecionarMetodoEntrega();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroMetodoEntrega();
})

test('Validar mensagem de erro ao não anexar CNH', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
    await cadastroPage.dadosPessoais();
    await cadastroPage.endereco();
    await cadastroPage.tipoDeEntregaCarro();
    await cadastroPage.naoAnexarCNH();
    await cadastroPage.submeterFormulario();
    await cadastroPage.validarMensagemErroCNH();
})