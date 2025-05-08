import { initDriver, quitDriver } from '../config/driver';
import { WebDriver } from 'selenium-webdriver';

let driver: WebDriver;

describe('Demo QA Page', () => {
    before(async () => {
        driver = await initDriver();
    });

    after(async () => {
        await quitDriver();
    });

    it('test 1', async () => {
        await driver.get('https://demoqa.com/');
    });
});
