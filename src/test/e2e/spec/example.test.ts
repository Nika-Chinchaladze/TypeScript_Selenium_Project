import { describe, it, beforeEach, afterEach } from 'mocha';
import { BaseTest } from '../base/baseTest';

describe('Example Suite', () => {
  const baseTest = new BaseTest();

  beforeEach('Initiate Browser', async () => {
    await baseTest.setUp();
  });

  afterEach('Close browser', async () => {
    await baseTest.tearDown();
  });

  it('Navigate user to HomePage', async () => {
    await baseTest.pom.homePage.actions.navigateToUrl(baseTest.pom.homePage.pageUrl);
    await baseTest.pom.homePage.assertions.verifyElementIsDisplayed(baseTest.pom.homePage.title);
    await baseTest.pom.homePage.assertions.verifyPageHasTitle('DEMOQA');
  });
});
