const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 登录操作
  await page.goto('https://www.iios.fun/login');
  await page.type('input[name="username"]', 'your_username');
  await page.type('input[name="password"]', 'your_password');
  await page.click('form button[type="submit"]');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // 签到操作
  await page.goto('https://www.iios.fun/points');
  await page.click('.gm-checkin-panel .checkin.availabel:not(.checked)');
  await browser.close();
})();
