import { DevelopmentAngularAppRouterPage } from './app.po';

describe('development-angular-app-router App', () => {
  let page: DevelopmentAngularAppRouterPage;

  beforeEach(() => {
    page = new DevelopmentAngularAppRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
