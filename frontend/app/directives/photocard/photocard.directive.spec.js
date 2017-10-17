import appModule from '../../app.module';

describe('Directive: photoCard', function() {
  var element, scope;
  
  beforeEach(function() {
      angular.mock.module(appModule);

      angular.mock.inject(function($rootScope, $compile) {
	    scope = $rootScope.$new();
	    
	    scope.item = {"description":"this is a flickr photo"};
	    
	    element ='<photo-card item="item"></photo-card>';
	    
	    element = $compile(element)(scope);
	    scope.$digest();
	  });
    });

  it("should have populated correct value in scope", function() {
    var isolated = element.isolateScope();
    expect(isolated.item.description).toBe("this is a flickr photo");
  });


});
