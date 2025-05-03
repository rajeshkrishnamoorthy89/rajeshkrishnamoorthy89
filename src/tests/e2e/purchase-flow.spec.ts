import { test, expect } from '../../utils/test-helpers';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CheckoutPage } from '../../pages/checkout.page';
import { TestUsers, TestProducts, TestCheckoutData } from '../../fixtures/test-data';

test.describe('End-to-End Tests', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        checkoutPage = new CheckoutPage(page);
    });

    test('should successfully complete purchase flow', async () => {
        // Login
        await loginPage.goto();
        await loginPage.login(TestUsers.STANDARD_USER.username, TestUsers.STANDARD_USER.password);
        
        // Add product to cart
        await inventoryPage.addProductToCart(TestProducts.BACKPACK.name);
        const cartCount = await inventoryPage.getCartItemsCount();
        expect(cartCount).toBe(1);
        
        // Go to cart and checkout
        await inventoryPage.goToCart();
        const { firstName, lastName, postalCode } = TestCheckoutData.VALID_USER;
        const confirmationMessage = await checkoutPage.completeCheckout(firstName, lastName, postalCode);
        
        // Verify order completion
        expect(confirmationMessage).toBe('Thank you for your order!');
    });

    test('should allow adding multiple items to cart', async () => {
        // Login
        await loginPage.goto();
        await loginPage.login(TestUsers.STANDARD_USER.username, TestUsers.STANDARD_USER.password);
        
        // Add multiple products
        await inventoryPage.addProductToCart(TestProducts.BACKPACK.name);
        await inventoryPage.addProductToCart(TestProducts.BIKE_LIGHT.name);
        
        // Verify cart count
        const cartCount = await inventoryPage.getCartItemsCount();
        expect(cartCount).toBe(2);
    });
});
