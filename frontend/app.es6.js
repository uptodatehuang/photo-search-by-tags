require('./reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import MainCtrl from './main.ctrl.es6.js';
import FlickrController from './flickr/flickr.ctrl.es6.js';

import FlickrService from './services/flickr.service.es6.js';

import photoCard from './directives/photocard/photocard.directive.es6.js';

import safeHtml from './filters/safeHtml.filter.es6.js';

import appConfig from './config.es6.js';

angular.module('app', [uiRouter])
  .controller('MainCtrl', MainCtrl)
  .controller('FlickrController', FlickrController)

  .directive('photoCard', photoCard)

  .filter('safeHtml',safeHtml)

  .factory('FlickrService', FlickrService)
  .config(appConfig);
