import angular from 'angular';
import 'angular-mocks';

import appModule from '../app.es6.js';
import FlickrController from './flickr.ctr.es6.js';

const { module, inject } = angular.mock;

describe('FlickrController', () => {
  let mockService, notify;
  beforeEach(module(appModule));

  let $controller;

  beforeEach(function() {
    mockService = {getPublicPhotos: jasmine.createSpy()};

    module(function($provide) {
      $provide.value('FlickrService', mockService);
    });

    inject((_$controller_) => {
      $controller = _$controller_;
    })
  });


  it('should set up default value correctly', () => {
    const controller = $controller(FlickrController, {});

    expect(controller.isSearching).toBeUndefined();
  });
});
