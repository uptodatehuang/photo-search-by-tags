FlickrController.$inject = ['FlickrService'];

function FlickrController(FlickrService) {

  var vm = this;

  vm.isSearching = undefined;
  vm.searchInput = undefined;
  vm.errorMessage = undefined;
  vm.controllerName = 'FlickrController';

  vm.photoListResult = [];
  vm.resultMetadata = {};

  vm.searchInputChanged = searchInputChanged;
  vm.getPublicPhotosSuccessHandler = getPublicPhotosSuccessHandler;
  vm.getPublicPhotosFailedHandler = getPublicPhotosFailedHandler;


  function searchInputChanged() {
    if (vm.searchInput !== undefined && vm.searchInput !== "") {
      vm.isSearching = true;
      vm.photoListResult = [];

      FlickrService.getPublicPhotos(vm.searchInput)
        .then(vm.getPublicPhotosSuccessHandler, vm.getPublicPhotosFailedHandler);
    }
  } //end method: searchInputChanged

  function getPublicPhotosSuccessHandler(response) {
    vm.isSearching = false;
    if (response.data) {
      vm.photoListResult = response.data.items;
      vm.resultMetadata.title = response.data.title;
      vm.resultMetadata.modified = response.data.modified;
    }
  }

  function getPublicPhotosFailedHandler(response) {
    vm.isSearching = false;
    vm.errorMessage = "Error occorred.";
  }

}

export default FlickrController;
