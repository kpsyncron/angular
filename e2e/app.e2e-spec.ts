import { Hello2Page } from './app.po';

describe('hello2 App', function() {
  let page: Hello2Page;

  beforeEach(() => {
    page = new Hello2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
