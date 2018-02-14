import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  enterSearchHero(name : string) {
    element(by.tagName('input')).sendKeys(name);
    browser.sleep(2000);
    element(by.css('.search-result')).click();
  }

  getDetailsTitle(){
    return element(by.tagName('h2')).getText();
  }

  editHeroName(name: string){
    element(by.tagName('input')).sendKeys(name);
    element(by.buttonText('Save')).click();
    browser.sleep(3000);
  }

  deleteAnyHero(){
    element.all(by.tagName('button')).click();
  }
}
