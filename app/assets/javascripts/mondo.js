var MONDO = {
	addListeners: function(){
		console.log("Listeners added!");
		$('button.navbar-toggle').click(function(event) {
			$(this).toggleClass('active');
		});
	}
}

$(document).ready(function() {
	MONDO.addListeners();	
});