import { WebDriver } from 'selenium-webdriver';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { CreateDriver } from '../main/config/create.driver';
import { HomePage } from '../main/pages/home.page';

describe('Example Suite', () => {
    const createDriver = new CreateDriver();
    let driver: WebDriver;
    let homePage: HomePage;

    beforeEach('Initiate Browser', async () => {
        driver = await createDriver.createChromeDriver();
        homePage = new HomePage(driver);
    });

    afterEach('Close the browser', async () => {
        await driver.quit();
    });

    it('First', async () => {
        await homePage.navigateToUrl(homePage.pageUrl);
        const pageTitle: string = await homePage.getPageTitle();
        console.log(pageTitle);
    });
});
