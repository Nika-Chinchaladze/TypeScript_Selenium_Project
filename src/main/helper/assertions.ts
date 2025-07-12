import { WebDriver, By } from "selenium-webdriver";
import { expect } from "chai";
import { BaseHelp } from "./base.help";

export class Assertions extends BaseHelp {
    constructor(webDriver: WebDriver) {
        super(webDriver);
    }

    async verifyPageHasTitle(title: string): Promise<void> {
        const pageTitle: string = await this.driver.getTitle();
        expect(pageTitle).equals(title);
    }

    async verifyElementIsDisplayed(locator: By): Promise<void> {
        const element = await this.findElement(locator);
        const isDisplayed = await element.isDisplayed();
        expect(isDisplayed).to.be.true;
    }
}
