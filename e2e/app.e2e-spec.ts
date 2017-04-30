import { AwedrobePage } from './app.po';

describe('awedrobe App', () => {
  let page: AwedrobePage;

  beforeEach(() => {
    page = new AwedrobePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
