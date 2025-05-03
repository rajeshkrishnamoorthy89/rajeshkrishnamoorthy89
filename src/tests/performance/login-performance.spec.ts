import { test, expect } from '../../utils/test-helpers';
import { measurePerformance } from '../../utils/test-helpers';

test.describe('Performance Tests', () => {
  test('should load login page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Performance assertions
    expect(loadTime).toBeLessThan(3000); // Page should load within 3 seconds
    
    const perfMetrics = await measurePerformance(page);
    const ttfb = perfMetrics.responseStart - perfMetrics.navigationStart;
    expect(ttfb).toBeLessThan(600); // Time to First Byte should be less than 600ms
  });
});
