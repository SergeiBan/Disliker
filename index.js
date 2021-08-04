// It will ask to enter Captcha several times an hour

// The Two-Factor Authentication should be OFF, otherwise the script won't login successfuly 
import puppeteer from "puppeteer";

const url = 'https://vk.com';

// Add your login and password below
const login = '';
const password = '';

const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
});

const page = await browser.newPage();
await page.goto(url);

await page.waitForSelector('#index_email');
await page.waitForSelector('#index_pass');
await page.click('#index_email');
await page.keyboard.type(login);
await page.click('#index_pass');
await page.keyboard.type(password);
await page.keyboard.press('Enter');
await page.waitForSelector('#ui_rmenu_likes');
await page.click('#ui_rmenu_likes');

// No need for terminal condition, because there are like a million likes to delete
while (true) {
    await page.waitForSelector('.like_btn');
    await page.click('.like_btn');
    await page.waitFor(3000);
    await page.click('[href="/feed"]');
    await page.waitFor(3000);
    await page.waitForSelector('#ui_rmenu_likes');
    await page.click('#ui_rmenu_likes');
    await page.waitFor(3000);

}

// No need for these two lines right now
// await page.close();
// await browser.close();