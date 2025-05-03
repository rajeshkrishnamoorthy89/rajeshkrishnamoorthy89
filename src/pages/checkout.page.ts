import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { CheckoutPageLocators } from './locators';

export class CheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
        await this.fillInput(CheckoutPageLocators.FIRST_NAME, firstName);
        await this.fillInput(CheckoutPageLocators.LAST_NAME, lastName);
        await this.fillInput(CheckoutPageLocators.POSTAL_CODE, postalCode);
    }

    async clickContinue() {
        await this.clickElement(CheckoutPageLocators.CONTINUE_BUTTON);
    }

    async clickFinish() {
        await this.clickElement(CheckoutPageLocators.FINISH_BUTTON);
    }

    async getOrderConfirmationMessage() {
        return this.getText(CheckoutPageLocators.COMPLETE_HEADER);
    }

    async startCheckout() {
        await this.clickElement(CheckoutPageLocators.CHECKOUT_BUTTON);
    }

    async completeCheckout(firstName: string, lastName: string, postalCode: string) {
        await this.startCheckout();
        await this.fillShippingInfo(firstName, lastName, postalCode);
        await this.clickContinue();
        await this.clickFinish();
        return this.getOrderConfirmationMessage();
    }
}
