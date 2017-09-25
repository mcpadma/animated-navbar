import { AnimatednavbarPage } from './app.po';

describe('animatednavbar App', () => {
  let page: AnimatednavbarPage;

  beforeEach(() => {
    page = new AnimatednavbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
