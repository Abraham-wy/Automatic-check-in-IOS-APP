const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 登录操作
  await page.goto('https://www.iios.fun/login');
  await page.type('input[name="email"]', '3501654994@qq.com');
  await page.type('input[name="password"]', '18024532933wysbd');
  await page.click('button.N44eQI_9');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // 签到操作
  await page.goto('https://www.iios.fun/points');
  await page.click('.gm-checkin-panel .checkin.availabel:not(.checked)');
  await browser.close();
})();
