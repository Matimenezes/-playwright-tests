import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    // Seletores
    private readonly btnCadastroEntregador = '//a[@href="/deliver"]';
    
    constructor(page: Page) {
        this.page = page;
    }
    
     async validarTelaInicial() {
        await this.page.goto('https://buger-eats.vercel.app/');
        await expect(this.page).toHaveTitle('Buger Eats');
    }
    
    async acessarTelaCadastro() {
         await this.page.click(this.btnCadastroEntregador);
         await expect(this.page).toHaveURL('https://buger-eats.vercel.app/deliver');
    } 

   
   
}