export const LoginPageLocators = {
    USERNAME_INPUT: '[data-test="username"]',
    PASSWORD_INPUT: '[data-test="password"]',
    LOGIN_BUTTON: '[data-test="login-button"]',
    ERROR_MESSAGE: '[data-test="error"]'
} as const;

export const InventoryPageLocators = {
    INVENTORY_ITEM: '.inventory_item',
    ADD_TO_CART_BUTTON: (itemName: string) => `[data-test="add-to-cart-${itemName}"]`,
    CART_BADGE: '.shopping_cart_badge',
    CART_LINK: '.shopping_cart_link'
} as const;

export const CheckoutPageLocators = {
    FIRST_NAME: '[data-test="firstName"]',
    LAST_NAME: '[data-test="lastName"]',
    POSTAL_CODE: '[data-test="postalCode"]',
    CONTINUE_BUTTON: '[data-test="continue"]',
    FINISH_BUTTON: '[data-test="finish"]',
    CHECKOUT_BUTTON: '[data-test="checkout"]',
    COMPLETE_HEADER: '.complete-header'
} as const;
