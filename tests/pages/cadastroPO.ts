import { Page, expect } from '@playwright/test';
import { criarMassa } from '../massas/massas';

export class CadastroPage {
    readonly page: Page;
    readonly massa = criarMassa();
    

    private readonly inputNome = '//input[@name="name"]';
    private readonly inputCPF = '//input[@name="cpf"]';
    private readonly inputEmail = '//input[@name="email"]';
    private readonly inputWhatsapp = '//input[@name="whatsapp"]';
    private readonly inputCEP = '//input[@name="postalcode"]';
    private readonly btnBuscarCEP = '//input[@value="Buscar CEP"]';
    private readonly inputNumero = '//input[@name="address-number"]';
    private readonly inputComplemento = '//input[@name="address-details"]';
    private readonly btnMoto = '//img[@alt="Moto"]';
    private readonly btnBicicleta = '//img[@alt="Bicicleta"]';
    private readonly btnCarro = '//img[@alt="Van/Carro"]';
    private readonly inputCNH = '//input[@accept="image/*"]';
    private readonly btnSubmit = '//button[@type="submit"]';
    private readonly mensagemSucesso = '#swal2-html-container';
    private readonly CNH = 'Arquivos/IMG_5573.jpg';
    private readonly mensagemErroNome = '//span[@class="alert-error" and text()="É necessário informar o nome"]';
    private readonly mensagemErroCPF = '//span[@class="alert-error" and text()="É necessário informar o CPF"]';
    private readonly mensagemErroEmail = '//span[@class="alert-error" and text()="É necessário informar o email"]';
    private readonly mensagemErroWhatsapp = '//span[@class="alert-error" and text()="Oops! Whatsapp com formato incorreto"]';
    private readonly mensagemErroCEP = '//span[@class="alert-error" and text()="Informe um CEP válido"]';
    private readonly mensagemErroNumero = '//span[@class="alert-error" and text()="É necessário informar o número do endereço"]';
    private readonly mensagemErroMetodoEntrega = '//span[@class="alert-error" and text()="Selecione o método de entrega"]';
    private readonly mensagemErroCNH = '//span[@class="alert-error" and text()="Adicione uma foto da sua CNH"]';
    
    constructor(page: Page) {
        this.page = page;
    }
    
    async dadosPessoais() {
        await this.page.goto('https://buger-eats.vercel.app/deliver');
        await this.page.fill(this.inputNome, this.massa.nomeCompleto);
        await this.page.fill(this.inputCPF, this.massa.CPF);
        await this.page.fill(this.inputEmail, this.massa.email);
        await this.page.fill(this.inputWhatsapp, this.massa.whatsapp);
    } 

    async endereco() {
        await this.page.fill(this.inputCEP, '06417030');
        await this.page.click(this.btnBuscarCEP);
        await this.page.fill(this.inputNumero, this.massa.numeroDeEndereco);
        await this.page.fill(this.inputComplemento, 'Casa');
    }

    async tipoDeEntregaMoto() {
        await this.page.click(this.btnMoto);
    }

    async tipoDeEntregaBicicleta() {
        await this.page.click(this.btnBicicleta);
    }

    async tipoDeEntregaCarro() {
        await this.page.click(this.btnCarro);
    }
    
    async FinalizarCadastro() {
        await this.page.setInputFiles(this.inputCNH, this.CNH);
        await this.page.click(this.btnSubmit);
        await expect(this.page.locator(this.mensagemSucesso)).toHaveText('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.');
    }

    async submeterFormulario() {
        await this.page.click(this.btnSubmit);
    }

    async validarMensagemErroNome() {
        await expect(this.page.locator(this.mensagemErroNome)).toBeVisible();
    }

    async validarMensagemErroCPF() {
        await expect(this.page.locator(this.mensagemErroCPF)).toBeVisible();
    }

    async validarMensagemErroEmail() {
        await expect(this.page.locator(this.mensagemErroEmail)).toBeVisible();
    }

    async validarMensagemErroWhatsapp() {
        await expect(this.page.locator(this.mensagemErroWhatsapp)).toBeVisible();
    }

     async validarMensagemErroCEP() {
        await expect(this.page.locator(this.mensagemErroCEP)).toBeVisible();
    }

    async validarMensagemErroNumero() {
        await expect(this.page.locator(this.mensagemErroNumero)).toBeVisible();
    }

    async validarMensagemErroMetodoEntrega() {
        await expect(this.page.locator(this.mensagemErroMetodoEntrega)).toBeVisible();
    }

    async validarMensagemErroCNH() {
        await expect(this.page.locator(this.mensagemErroCNH)).toBeVisible();
    }

    async preencherDadosPessoaisComNomeVazio() {
        await this.page.goto('https://buger-eats.vercel.app/deliver');
        await this.page.fill(this.inputCPF, this.massa.CPF);
        await this.page.fill(this.inputEmail, this.massa.email);
        await this.page.fill(this.inputWhatsapp, this.massa.whatsapp);
    }

    async preencherDadosPessoaisComCPFVazio() {
        await this.page.goto('https://buger-eats.vercel.app/deliver');
        await this.page.fill(this.inputNome, this.massa.nomeCompleto);
        // Deixa CPF vazio
        await this.page.fill(this.inputEmail, this.massa.email);
        await this.page.fill(this.inputWhatsapp, this.massa.whatsapp);
    }

    async preencherDadosPessoaisComEmailVazio() {
        await this.page.goto('https://buger-eats.vercel.app/deliver');
        await this.page.fill(this.inputNome, this.massa.nomeCompleto);
        await this.page.fill(this.inputCPF, this.massa.CPF);
        // Deixa email vazio
        await this.page.fill(this.inputWhatsapp, this.massa.whatsapp);
    }

    async preencherDadosPessoaisComWhatsappInvalido() {
        await this.page.goto('https://buger-eats.vercel.app/deliver');
        await this.page.fill(this.inputNome, this.massa.nomeCompleto);
        await this.page.fill(this.inputCPF, this.massa.CPF);
        await this.page.fill(this.inputEmail, this.massa.email);
        await this.page.fill(this.inputWhatsapp, '123');
    }

    async preencherEnderecoComCEPVazio() {
        // Deixa CEP vazio e tenta buscar
        await this.page.click(this.btnBuscarCEP);
    }

    async preencherEnderecoComNumeroVazio() {
        await this.page.fill(this.inputCEP, '06417030');
        await this.page.click(this.btnBuscarCEP);
        await this.page.fill(this.inputComplemento, 'Casa');
    }

    async naoSelecionarMetodoEntrega() {
        await this.page.setInputFiles(this.inputCNH, this.CNH);
    }

    async naoAnexarCNH() {   
    }
}
