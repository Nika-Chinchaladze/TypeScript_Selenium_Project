import { WebDriver } from 'selenium-webdriver';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { CreateDriver } from '../main/config/create.driver';
import { Pages } from '../main/fixture/pages.fixture';

const createDriver = new CreateDriver();

describe('Example Suite', () => {
    let driver: WebDriver;
    let pages: Pages;

    beforeEach('Initiate Browser', async () => {
        driver = await createDriver.createChromeDriver();
        pages = new Pages(driver);
    });

    afterEach('Close the browser', async () => {
        await pages.tearDown();
    });

    it('First', async () => {
        await pages.homePage.actions.navigateToUrl(pages.homePage.pageUrl);
        await pages.homePage.assertions.verifyElementIsDisplayed(pages.homePage.title);
        await pages.homePage.assertions.verifyPageHasTitle('DEMOQA');
    });
});
