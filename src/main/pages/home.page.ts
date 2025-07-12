import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from '../base/base.page';

export class HomePage extends BasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }

  public pageUrl: string = 'https://demoqa.com/';
  public title: By = By.css('header a');
}
