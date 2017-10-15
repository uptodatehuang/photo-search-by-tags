import angular from 'angular';
import 'angular-mocks';

import appModule from '../app.es6.js';

const { module, inject } = angular.mock;

describe('photocard directive', () => {
  let $compile;
  let $rootScope;

  beforeEach(module(appModule));

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', () => {
    const element = $compile('<div photo-card></div>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('photo_card');
  });
});
