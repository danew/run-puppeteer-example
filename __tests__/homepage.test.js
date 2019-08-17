import run from 'run-puppeteer';

run('Homepage', () => {
  it('loads the homepage successfully', async () => {
     let text = await page.evaluate(() => document.body.textContent);
     expect(text).toContain('google');
  })
});