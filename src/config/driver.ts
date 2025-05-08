import { Builder, WebDriver, Browser } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { ServiceBuilder } from 'selenium-webdriver/chrome';

let driver: WebDriver;

export async function initDriver(): Promise<WebDriver> {
    const service = new ServiceBuilder(require('chromedriver').path);
    const options = new chrome.Options();
    options.excludeSwitches('enable-logging');

    driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeService(service)
        .setChromeOptions(options)
        .build();

    return driver;
}

export async function quitDriver() {
    if (driver) {
        await driver.quit();
    }
}
