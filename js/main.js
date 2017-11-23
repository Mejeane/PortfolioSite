var modalPortfolio = new tingle.modal({
    footer: false,
    stickyFooter: false,
});

$(document).ready(function() {
	$('#fullpage').fullpage();

	$('.section').on('click', '.trigger', function(event){
		var html = $(this).parent().find('.popup-content').html();

		modalPortfolio.setContent(html);
		modalPortfolio.open();
	})
});









    



