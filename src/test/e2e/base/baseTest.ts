import { WebDriver } from 'selenium-webdriver';
import { Pom } from '../../../main/e2e/fixture/pages.fixture'
import { CreateDriver } from '../../../main/e2e/config/create.driver';

export class BaseTest {
  protected driver!: WebDriver;
  public pom!: Pom;

  async setUp() {
    const createDriver = new CreateDriver();
    this.driver = await createDriver.createChromeDriver();
    this.pom = new Pom(this.driver);
  }

  async tearDown() {
    await this.driver.quit();
  }
}
