import { CondorProjectPage } from './app.po';

describe('condor-project App', function() {
  let page: CondorProjectPage;

  beforeEach(() => {
    page = new CondorProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
