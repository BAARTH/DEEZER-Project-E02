$(document).ready(function () {


	$("#user-interface").hide();
	$("#user-button, #user-profile").click(

		function () {
			$("#user-interface").slideToggle();
			$("#user-button").find('i').toggleClass("rotate");

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

	/* AUDIO */

	audiojs.events.ready(function () {
		var as = audiojs.createAll();
	});


	/* GESTIONNAIRE TAB */

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

	function button_playlist() {
		$(function () {
			$('.acc_ctrl').on('click', function (e) {
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
	}

	button_playlist();

	/* GESTIONNAIRE DE PLAYLIST */
	function playlist() {
		$(function () {

			$(".acc_panel").sortable({
				connectWith: '.acc_panel',
				start: function (event, ui) {
					ui.item.toggleClass("highlight");
				},
				stop: function (event, ui) {
					ui.item.toggleClass("highlight");
				}
			});

			$(".acc_panel").disableSelection();


			$(".acc").sortable({
				connectWith: '.acc',
				start: function (event, ui) {
					ui.item.toggleClass("highlight");
				},
				stop: function (event, ui) {
					ui.item.toggleClass("highlight");
				}
			});

			$(".acc").disableSelection();




		});
	}

	playlist();

	$("#new_playlist").click(function () {

		$(".acc").prepend('<div id="playlist" > <div class="acc_ctrl" class="ui-state-default"><h2 contentEditable="true">New playlist</h2></div> <ul class="acc_panel"><li class="track"></li> </ul> </div>');
		$('.acc_ctrl').off('click');
		button_playlist();
		playlist();
	});



	var trackData = track.tracks.data;

	var nombre1 = Math.floor(Math.random() * trackData.length);
	var numberOfTrack = $(".track")
	var trackLink = trackData[nombre1].preview;
	var trackAlbum = trackData[nombre1].album.cover_small;
	var trackTitle = trackData[nombre1].title;
	var trackArtist = trackData[nombre1].artist.name;

	$("li#playable").each(function () {
		nombre1 = Math.floor(Math.random() * trackData.length);
		numberOfTrack = $(".track")
		trackLink = trackData[nombre1].preview;
		trackAlbum = trackData[nombre1].album.cover_small;
		trackTitle = trackData[nombre1].title;
		trackArtist = trackData[nombre1].artist.name;
		$(this).find(".title").html(trackTitle);
		$(this).find(".artist").html(trackArtist);
		$(this).find("img").attr('src', trackAlbum);
		$(this).find("a").attr('data-src', trackLink);
	});
});