import appModule from '../app.module';

describe('Controller: FlickrController', () => {
  
  let flickrCtrl;

  beforeEach(() => {
      angular.mock.module(appModule);

      angular.mock.inject(($controller) => {
        flickrCtrl = $controller('FlickrController', {});
      });
    });

  it('should set up default value correctly', () => {
    expect(flickrCtrl.isSearching).toBeUndefined();
    expect(flickrCtrl.searchInput).toBeUndefined();
    expect(flickrCtrl.errorMessage).toBeUndefined();
    expect(flickrCtrl.controllerName).toEqual('FlickrController');
  });

});

