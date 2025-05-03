import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { InventoryPageLocators } from './locators';

export class InventoryPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async getInventoryItems() {
        return this.page.$$(InventoryPageLocators.INVENTORY_ITEM);
    }

    async addProductToCart(productName: string) {
        await this.clickElement(InventoryPageLocators.ADD_TO_CART_BUTTON(productName));
    }

    async getCartItemsCount() {
        const badgeText = await this.getText(InventoryPageLocators.CART_BADGE);
        return badgeText ? parseInt(badgeText) : 0;
    }

    async goToCart() {
        await this.clickElement(InventoryPageLocators.CART_LINK);
    }

    async isProductAddedToCart(productName: string) {
        return this.isVisible(InventoryPageLocators.ADD_TO_CART_BUTTON(productName));
    }
}
