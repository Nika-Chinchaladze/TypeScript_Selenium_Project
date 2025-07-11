import { By, WebDriver, WebElement } from 'selenium-webdriver';

export class BasePage {
    constructor(private driver: WebDriver) {}

    async findElement(locator: By): Promise<WebElement> {
        const element = await this.driver.findElement(locator);
        return element;
    }

    async navigateToUrl(url: string): Promise<void> {
        await this.driver.get(url);
    }

    async getPageTitle(): Promise<string> {
        const pageTitle: string = await this.driver.getTitle();
        return pageTitle;
    }
}
