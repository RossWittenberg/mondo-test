var MONDO = {
	addListeners: function(){
		console.log("Listeners added!");
		$('button.navbar-trigger').click(function(event) {
			var navMenuCollapse = $('#nav-menu-collapse');
			$(navMenuCollapse).toggle(400).toggleClass('collapse');
			$(this).toggleClass('active');
		});
		$('.screens__image--wrapper').click(function(event) {
			$('.screens__image--wrapper').removeClass('large').addClass('small');
			$(this).addClass('large');
		});
	}
}

$(function () {
	MONDO.addListeners();	
});