var MONDO = {
	addListeners: function(){
		console.log("Listeners added!");
		$('button.navbar-trigger').click(function(event) {
			var navMenuCollapse = $('#nav-menu-collapse');
			$(navMenuCollapse).toggle(400).toggleClass('collapse');
			$(this).toggleClass('active');
		});
	}
}

$(function () {
	MONDO.addListeners();	
});