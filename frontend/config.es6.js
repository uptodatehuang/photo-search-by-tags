function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('flickr', {
      url: '/',
      template: require('./flickr/flickr.page.html'),
      controller: 'FlickrController',
      controllerAs: 'vm'
    });

}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];