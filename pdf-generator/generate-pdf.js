const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://przybang.github.io/', { waitUntil: 'networkidle0' });
    await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', bottom: '20mm' }
    });
    await browser.close();
})();
