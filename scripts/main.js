$(document).ready(function () {


	$("#user-interface").hide();



	$("#user-button").click(
		function () {
			$("#user-interface").slideToggle();
			$(this).find('i').toggleClass("rotate");

		});
	var boxWidth = $("#right-bar").width();
	$("#right-bar").width(0);




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


});