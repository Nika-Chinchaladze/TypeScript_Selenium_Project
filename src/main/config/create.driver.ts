import { Builder, Browser, WebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as chromedriver from 'chromedriver';

export class CreateDriver {
    async createChromeDriver(): Promise<WebDriver> {
        const service = new chrome.ServiceBuilder(chromedriver.path);
        const driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeService(service)
            .build();
        await driver.manage().window().maximize();
        return driver;
    }
}
