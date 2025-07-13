import { Builder, Browser, WebDriver } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as chromedriver from 'chromedriver';

export class CreateDriver {
  getBrowserOptions(): chrome.Options {
    const options = new chrome.Options();
    options.addArguments('--headless=new');
    options.addArguments('--disable-gpu');
    options.addArguments('--window-size=1920,1080');
    return options;
  }

  async createChromeDriver(): Promise<WebDriver> {
    const service = new chrome.ServiceBuilder(chromedriver.path);
    const driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeService(service)
      .setChromeOptions(this.getBrowserOptions())
      .build();
    await driver.manage().window().maximize();
    return driver;
  }
}
