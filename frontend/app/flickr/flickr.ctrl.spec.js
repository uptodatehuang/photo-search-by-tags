import appModule from '../app.module';

describe('Controller: FlickrController', function(){
  
  var flickrCtrl;

  beforeEach(function() {
      angular.mock.module(appModule);

      angular.mock.inject(function($controller){
        flickrCtrl = $controller('FlickrController', {});
      });
    });

  it('should set up default value correctly', function(){
    expect(flickrCtrl.isSearching).toBeUndefined();
    expect(flickrCtrl.searchInput).toBeUndefined();
    expect(flickrCtrl.errorMessage).toBeUndefined();
    expect(flickrCtrl.controllerName).toEqual('FlickrController');
  });

});

