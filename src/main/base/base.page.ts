import { WebDriver } from 'selenium-webdriver';
import { Actions } from '../helper/actions';
import { Assertions } from '../helper/assertions';

export class BasePage {
    protected readonly driver: WebDriver;
    public readonly actions: Actions;
    public readonly assertions: Assertions;

    constructor(webDriver: WebDriver) {
        this.driver = webDriver;
        this.actions = new Actions(this.driver);
        this.assertions = new Assertions(this.driver);
    }
}
