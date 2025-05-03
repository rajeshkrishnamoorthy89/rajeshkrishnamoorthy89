import { test, expect } from '../../utils/test-helpers';
import { APIClient } from '../../utils/api-client';
import { TestUsers, TestProducts } from '../../fixtures/test-data';

test.describe('API Tests', () => {
    let apiClient: APIClient;

    test.beforeEach(async ({ request }) => {
        apiClient = new APIClient(request, 'https://www.saucedemo.com/api');
    });

    test.describe('Product API', () => {
        test('should get product inventory', async () => {
            const response = await apiClient.get('/inventory.json');
            expect(response.ok()).toBeTruthy();
            
            const data = await response.json();
            expect(Array.isArray(data)).toBeTruthy();
            expect(data.length).toBeGreaterThan(0);
        });

        test('should get single product details', async () => {
            const response = await apiClient.get(`/inventory/${TestProducts.BACKPACK.name}.json`);
            expect(response.ok()).toBeTruthy();
            
            const data = await response.json();
            expect(data.name).toBe(TestProducts.BACKPACK.fullName);
            expect(data.price).toBe(TestProducts.BACKPACK.price);
        });
    });

    test.describe('Cart API', () => {
        test('should add item to cart', async () => {
            const response = await apiClient.post('/cart.json', {
                productId: TestProducts.BACKPACK.name
            });
            expect(response.ok()).toBeTruthy();
        });
    });
});
