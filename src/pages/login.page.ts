import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { LoginPageLocators } from './locators';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.fillInput(LoginPageLocators.USERNAME_INPUT, username);
    await this.fillInput(LoginPageLocators.PASSWORD_INPUT, password);
    await this.clickElement(LoginPageLocators.LOGIN_BUTTON);
  }

  async getErrorMessage() {
    return this.getText(LoginPageLocators.ERROR_MESSAGE);
  }

  async isErrorMessageVisible() {
    return this.isVisible(LoginPageLocators.ERROR_MESSAGE);
  }
}
