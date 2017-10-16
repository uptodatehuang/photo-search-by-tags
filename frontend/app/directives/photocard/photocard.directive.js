
photoCard.$inject = ['$log'];


function photoCard($log) {
  	
  	var directive = {
        restrict: 'EA',
        template: require('./photocard.template.html'),
        scope: {
            item: '='
        },
        link: linkFunc
    };

    return directive;


    function linkFunc(scope, el, attr) {
    }
}

export default photoCard;
