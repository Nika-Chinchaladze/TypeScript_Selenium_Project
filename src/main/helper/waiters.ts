import { WebDriver, By } from "selenium-webdriver";
import { BaseHelp } from "./base.help";

export class Waiters extends BaseHelp {
    constructor(webDriver: WebDriver) {
        super(webDriver);
    }
}
