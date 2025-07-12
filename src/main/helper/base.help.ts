import { WebDriver, By, WebElement } from "selenium-webdriver";

export class BaseHelp {
    protected driver: WebDriver;
    
    constructor(webDriver: WebDriver) {
        this.driver = webDriver;
    }

    async findElement(locator: By): Promise<WebElement> {
        const element = await this.driver.findElement(locator);
        return element;
    }
}
