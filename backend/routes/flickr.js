var JSONP = require('node-jsonp');

exports.getPublicPhotos = function(req, res) {

	if(req.query.format === undefined || req.query.format === ""){
		res.status(400).send('Bad request. request param "format" is mandatory.');
		return;
	}else if(req.query.tags === undefined || req.query.tags === ""){
		res.status(400).send('Bad request. request param "tags" is mandatory.');
		return;
	}

	JSONP(
		'http://api.flickr.com/services/feeds/photos_public.gne',
		{'format':req.query.format,'tags': req.query.tags},
		'jsoncallback',
		function(json){
	     res.send(json);
	    }
    );
};
