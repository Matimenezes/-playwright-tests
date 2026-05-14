import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePO';

test('Pagina inicial', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validarTelaInicial();
})

test('Acessar a pagina de cadastro', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.validarTelaInicial();
    await homePage.acessarTelaCadastro();
})