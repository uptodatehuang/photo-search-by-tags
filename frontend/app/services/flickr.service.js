FlickrService.$inject = ['$http', '$log'];

function FlickrService($http, $log) {
  	const FLICKR_PUBLIC_PHOTO_URL = '/api/flickr/photos_public';
  	return {
		getPublicPhotos : function(tags) {
			
			var url = FLICKR_PUBLIC_PHOTO_URL + "?format=json&tags=" + encodeURIComponent(tags);

			return $http.get(url);
		}
	};
}

export default FlickrService;
