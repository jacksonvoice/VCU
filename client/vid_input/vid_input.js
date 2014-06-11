Template.vidInput.events ({
	'click #submit': function () {
	
		vids.insert({
			_id: $('#vid-id').val(),
			viddiv: $('#vid-div').val(),
			vidscrip: $('#script-tag').val()
		});
	}

	
});