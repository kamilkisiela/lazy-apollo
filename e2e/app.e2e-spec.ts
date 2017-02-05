import { LazyApolloPage } from './app.po';

describe('lazy-apollo App', function() {
  let page: LazyApolloPage;

  beforeEach(() => {
    page = new LazyApolloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
