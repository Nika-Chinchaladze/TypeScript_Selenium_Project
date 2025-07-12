import { WebDriver, By } from "selenium-webdriver";
import { BaseHelp } from "./base.help";

export class Actions extends BaseHelp {
    constructor(webDriver: WebDriver) {
        super(webDriver);
    }

    async navigateToUrl(url: string): Promise<void> {
        await this.driver.get(url);
    }

    async getPageTitle(): Promise<string> {
        const pageTitle: string = await this.driver.getTitle();
        return pageTitle;
    }

    async clickOnElement(locator: By): Promise<void> {
        const element = await this.findElement(locator);
        await element.click();
    }

    async setValueInField(locator: By, text: string): Promise<void> {
        const element = await this.findElement(locator);
        await element.sendKeys(text);
    }
}
