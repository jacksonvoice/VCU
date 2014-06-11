Router.map(function() {
	this.route('index', {path: '/'})
	this.route('pedagogy', {path: '/pedagogy'})
	this.route('vidInputPage', {path: '/videoinput'})
	this.route('videos', {
		path: '/videos/:_id',
		data: function() {return vids.findOne(this.params._id); }
	});

});