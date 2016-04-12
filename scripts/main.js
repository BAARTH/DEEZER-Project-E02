$(document).ready(function () {


	$("#user-interface").hide();
	$("#user-button").click(
		function () {
			$("#user-interface").slideToggle();
			$(this).find('i').toggleClass("rotate");

		});
	var boxWidth = $("#right-bar").width();
	//$("#right-bar").width(0);




	$("#toggleButton-right").click(function () {


		if ($("#right-bar").hasClass("active")) {
			$("#right-bar").removeClass("active");
			$("#right-bar").animate({
				width: 0
			});
		} else {
			$("#right-bar").addClass("active");
			$("#right-bar").animate({
				width: boxWidth
			});
		}
	});
	audiojs.events.ready(function () {
		var as = audiojs.createAll();
	});

	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();

			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		});
	})(jQuery);
	
	$(function() {
  $('.acc_ctrl').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
      .stop()
      .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
      .stop()
      .slideDown(300);
    }
  });
});

	

});