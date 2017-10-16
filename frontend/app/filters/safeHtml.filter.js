safeHtml.$inject = ['$sce'];

function safeHtml($sce) {  
  	return function (val) {
        return $sce.trustAsHtml(val);
    };

}

export default safeHtml;
