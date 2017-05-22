import { NgCrudPage } from './app.po';

describe('ng-crud App', () => {
  let page: NgCrudPage;

  beforeEach(() => {
    page = new NgCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
