import { WebDriver } from "selenium-webdriver";
import { HomePage } from "../pages/home.page";

export class Pages {
    private driver: WebDriver;
    public homePage: HomePage;

    constructor(webDriver: WebDriver) {
        this.driver = webDriver;
        this.homePage = new HomePage(this.driver);
    }

    async tearDown(): Promise<void> {
        await this.driver.quit();
    }
}
