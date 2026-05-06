import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('mukesh otwani');
  await page.getByText('Mukesh Otwani', { exact: true }).click();
  await page.locator('iframe[name="a-43zzw0htl6mg"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-43zzw0htl6mg"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-43zzw0htl6mg"]').contentFrame().locator('.rc-canonical-bridge').click();
  await page.goto('https://www.google.com/search?q=mukesh+otwani&sca_esv=b11a07be0e58f07f&source=hp&ei=V5XUaab1Ne7XseMP84KO2AE&iflsig=AFdpzrgAAAAAadSjZ929NQiZa87rn4P88QLBTUpkFask&gs_ssp=eJzj4tVP1zc0TDOoLDEqLjY3YPTizS3NTi3OUMgvKU_MywQAjVwJ2A&oq=mukesh+otwani&gs_lp=Egdnd3Mtd2l6Ig1tdWtlc2ggb3R3YW5pKgIIADIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIulFQAFiFHXAAeACQAQCYAcABoAHiDqoBBDAuMTO4AQHIAQD4AQGYAg2gAqEPwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGIMBGIoFwgIIEC4YgAQYsQPCAgsQLhiABBjHARivAZgDAJIHBDAuMTOgB4mgAbIHBDAuMTO4B6EPwgcFMC41LjjIBy2ACAA&sclient=gws-wiz&sei=ZpXUaeaUPMmYseMPgcDpgAQ');
});