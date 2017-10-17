import angular from 'angular';
import uiRouter from 'angular-ui-router';

import '../style/app.css';

import appConfig from './app.config.js';

import FlickrController from './flickr/flickr.ctrl.js';
import FlickrService from './services/flickr.service.js';
import photoCard from './directives/photocard/photocard.directive.js';
import safeHtml from './filters/safeHtml.filter.js';

var MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter])
  
  .controller('FlickrController', FlickrController)
  .directive('photoCard', photoCard)
  .filter('safeHtml',safeHtml)
  .factory('FlickrService', FlickrService)

  .config(appConfig);


export default MODULE_NAME;