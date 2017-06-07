import { NewFeturesAngular4Page } from './app.po';

describe('new-fetures-angular4 App', () => {
  let page: NewFeturesAngular4Page;

  beforeEach(() => {
    page = new NewFeturesAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
