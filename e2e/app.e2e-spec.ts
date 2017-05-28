import { MyCapstonePage } from './app.po';

describe('my-capstone App', () => {
  let page: MyCapstonePage;

  beforeEach(() => {
    page = new MyCapstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
