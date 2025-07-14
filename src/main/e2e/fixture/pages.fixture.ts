import { WebDriver } from 'selenium-webdriver';
import { HomePage } from '../pages/home.page';

export class Pom {
  public homePage: HomePage;

  constructor(webDriver: WebDriver) {
    this.homePage = new HomePage(webDriver);
  }
}
