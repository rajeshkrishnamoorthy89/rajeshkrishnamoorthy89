import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async getElement(selector: string): Promise<Locator> {
        return this.page.locator(selector);
    }

    protected async clickElement(selector: string): Promise<void> {
        const element = await this.getElement(selector);
        await element.click();
    }

    protected async fillInput(selector: string, text: string): Promise<void> {
        const element = await this.getElement(selector);
        await element.fill(text);
    }

    protected async getText(selector: string): Promise<string | null> {
        const element = await this.getElement(selector);
        return element.textContent();
    }

    protected async isVisible(selector: string): Promise<boolean> {
        const element = await this.getElement(selector);
        return element.isVisible();
    }

    protected async waitForElement(selector: string): Promise<void> {
        const element = await this.getElement(selector);
        await element.waitFor({ state: 'visible' });
    }
}
