import { test, expect } from '@playwright/test';

test('exemple de test e2e - vérifier que la page d\'accueil se charge', async ({ page }) => {
  await page.goto('/');
  
  // Vérifier que le titre de la page est visible
  await expect(page.locator('h1')).toBeVisible();
  
  // Vérifier que le texte "Page d'accueil" est présent
  await expect(page.getByText('Page d\'accueil')).toBeVisible();
});

test('exemple de test e2e - vérifier le composant Example', async ({ page }) => {
  await page.goto('/');
  
  // Vérifier que le composant Example est présent
  const exampleComponent = page.locator('.bg-blue-500');
  await expect(exampleComponent).toBeVisible();
  
  // Vérifier que le titre du composant est présent
  await expect(exampleComponent.getByText('Bienvenue')).toBeVisible();
});

