FlickrController.$inject = ['FlickrService'];


function FlickrController(FlickrService) {

  var vm = this;

  vm.isSearching = undefined;
  vm.searchInput = undefined;
  vm.errorMessage = undefined;

  vm.photoListResult = [];
  vm.resultMetadata = {};

  vm.searchInputChanged = searchInputChanged;


  function searchInputChanged(){

  	if(vm.searchInput !== undefined && vm.searchInput !== ""){
  		vm.isSearching = true;
  		vm.photoListResult = [];
  		
	 	FlickrService.getPublicPhotos(vm.searchInput)
		 .then(
		 	function(response){
			 	// console.log("search completed");
			 	vm.isSearching = false;
			 	return response;
		 	}
		 )
		 .then(getPublicPhotosSuccessHandler,getPublicPhotosFailedHandler);
  	}
  } //end method: searchInputChanged


  function getPublicPhotosSuccessHandler(response){
  	if(response.data){
		vm.photoListResult = response.data.items;
		vm.resultMetadata.title = response.data.title;
		vm.resultMetadata.modified = response.data.modified;
	}
  }

  function getPublicPhotosFailedHandler(response){
  	vm.errorMessage = "Error occorred.";
  }


}

export default FlickrController;
