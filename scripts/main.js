$(document).ready(function () {


	/******** BOUTON PROFIL ********/

	$("#user-interface").hide();
	$("#user-button, #user-profile").click(


		/******** BOUTON RIGHT BAR ********/

		function () {
			$("#user-interface").slideToggle();
			$("#user-button").find('i').toggleClass("rotate");

		});
	var boxWidth = $("#right-bar").width();
	$("#right-bar").addClass("active");
	$("#content").css("margin-right", boxWidth);
	$("#toggleButton-right").click(function () {


		if ($("#right-bar").hasClass("active")) {
			$("#right-bar").removeClass("active");
			$("#right-bar").animate({
				width: 0
			});
			$("#content").animate({
				marginRight: 0
			});
		} else {
			$("#right-bar").addClass("active");
			$("#right-bar").animate({
				width: boxWidth
			});
			$("#content").animate({
				marginRight: boxWidth
			});
		}
	});


	/******** GESTION MENU ********/

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


	/******** GESTION MENU ********/
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


			$(".acc_playlist").sortable({
				connectWith: '.acc',
				start: function (event, ui) {
					ui.item.toggleClass("highlight");
				},
				stop: function (event, ui) {
					ui.item.toggleClass("highlight");
				}
			});

			$(".acc_playlist").disableSelection();




		});
	}

	playlist();

	$("#new_playlist").click(function () {

		$(".acc_playlist").prepend('<div id="playlist" > <div class="acc_ctrl" class="ui-state-default"><i id="delete" class="fa fa-times" aria-hidden="true"></i><h2 contentEditable="true">New playlist</h2></div> <ul class="acc_panel"><li class="track"></li> </ul> </div>');
		$('.acc_ctrl').off('click');
		button_playlist();
		playlist();
		$("#delete").click(function(){
		$(this).parent().remove();
	});
	});


	/******** GENERATION ALAEATOIRE VIA JSON ********/

	var trackData = track.tracks.data;
	var nombre1 = Math.floor(Math.random() * trackData.length);
	var numberOfTrack = $(".track");
	var trackLink = trackData[nombre1].preview;
	var trackAlbum = trackData[nombre1].album;
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
	
	$("#delete, .track #delete").click(function(){
		$(this).parent().remove();
	});


	/******** GESTION DISPLAY ********/

	$("#accueil").addClass("pageActive");
	$(".pageActive").show();
	$(".nouv-image-titre").each(function () {
		nombre1 = Math.floor(Math.random() * trackData.length);
		trackLink = trackData[nombre1].preview;
		trackAlbum = trackData[nombre1].album.cover_big;
		trackArtist = trackData[nombre1].artist.name;
		trackTitle = trackData[nombre1].title;
		$(this).find(".title").html(trackTitle);
		$(this).find(".artist").html(trackArtist);
		$(this).find("img").attr('src', trackAlbum);
	});
	$(".menuAccueil").click(function (e) {
		e.preventDefault;
		$(".nouv-image-titre").each(function () {
			nombre1 = Math.floor(Math.random() * trackData.length);
			trackLink = trackData[nombre1].preview;
			trackAlbum = trackData[nombre1].album.cover_big;
			trackArtist = trackData[nombre1].artist.name;
			trackTitle = trackData[nombre1].title;
			$(this).find(".title").html(trackTitle);
			$(this).find(".artist").html(trackArtist);
			$(this).find("img").attr('src', trackAlbum);
		});
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#accueil").addClass("pageActive");
		$(".pageActive").show();
	});
	$(".menuDiscover").click(function (e) {
		e.preventDefault;
		$("#decouvertes .block").each(function () {
			nombre1 = Math.floor(Math.random() * trackData.length);
			trackLink = trackData[nombre1].preview;
			trackAlbum = trackData[nombre1].album.cover_big;
			trackArtist = trackData[nombre1].artist.name;
			$(this).find(".artist").html(trackArtist);
			$(this).find("img").attr('src', trackAlbum);
		});
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#decouvertes").addClass("pageActive");
		$(".pageActive").show();
	});
	$(".menuMix").click(function (e) {
		e.preventDefault;
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#mix").addClass("pageActive");
		$(".pageActive").show();
	});
	$(".menuProfil").click(function (e) {
		e.preventDefault;
		$(".nouv-image-titre").each(function () {
			nombre1 = Math.floor(Math.random() * trackData.length);
			trackLink = trackData[nombre1].preview;
			trackAlbum = trackData[nombre1].album.cover_big;
			trackArtist = trackData[nombre1].artist.name;
			$(this).find(".title").html(trackTitle);
			$(this).find(".artist").html(trackArtist);
			$(this).find("img").attr('src', trackAlbum);
		});
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#profil").addClass("pageActive");
		$(".pageActive").show();
	});
	$(".menuAmbiance").click(function (e) {
		e.preventDefault;
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#ambiance").addClass("pageActive");
		$(".pageActive").show();
	});
	$(".menuNew").click(function (e) {
		e.preventDefault;
		$(".album-button-hover").each(function () {
			nombre1 = Math.floor(Math.random() * trackData.length);
			trackLink = trackData[nombre1].preview;
			trackAlbum = trackData[nombre1].album.cover_big;
			trackArtist = trackData[nombre1].artist.name;
			trackTitle = trackData[nombre1].title;
			$(this).find(".title").html(trackTitle);
			$(this).find(".artist").html(trackArtist);
			$(this).find("img").attr('src', trackAlbum);
		});
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#nouveautes").addClass("pageActive");
		$(".pageActive").show();
	});
	$(".menuTop").click(function (e) {
		e.preventDefault;
		$(".topTrack").each(function () {
			nombre1 = Math.floor(Math.random() * trackData.length);
			trackLink = trackData[nombre1].preview;
			trackAlbum = trackData[nombre1].album.cover_big;
			trackArtist = trackData[nombre1].artist.name;
			trackTitle = trackData[nombre1].title;
			console.log(this);
			$(this).find(".title").html(trackTitle);
			$(this).find(".artist").html(trackArtist);
			$(this).find("img").attr('src', trackAlbum);
		});
		$(".pageActive").hide();
		$(".pageActive").removeClass("pageActive");
		$("#top").addClass("pageActive");
		$(".pageActive").show();
	});




	/******** GESTION DISPLAY PAGE PROFIL ********/

	$('#onglet-album, .menuAlbum').on('click', function () {
		$('.profil-content').removeClass('profil-active');
		$('.albums-profil').addClass('profil-active');
	});

	$('#onglet-musique').on('click', function () {
		$('.profil-content').removeClass('profil-active');
		$('.ma-musique').addClass('profil-active');
	});

	$('#onglet-playlists, .menuPlaylist').on('click', function () {
		$('.profil-content').removeClass('profil-active');
		$('.playlists-liste').addClass('profil-active');
	});

	$('#onglet-coups-coeur, .menuCoeur').on('click', function () {
		$('.profil-content').removeClass('profil-active');
		$('.coups-coeur').addClass('profil-active');
	});

	$('#onglet-artistes, .menuPodcast, .menuApp').on('click', function () {
		$('.profil-content').removeClass('profil-active');
		$('.artistes-profil').addClass('profil-active');
	});

	
	/******** CAROUSEL ********/

	$(function ($) {

		var $slider = $('.slider');
		var $slide = 'li';
		var $transition_time = 1000;
		var $time_between_slides = 3000;

		function slides() {
			return $slider.find($slide);
		}

		slides().fadeOut();
		slides().first().addClass('active');
		slides().first().fadeIn($transition_time);

		$interval = setInterval(
			function () {
				var $i = $slider.find($slide + '.active').index();

				slides().eq($i).removeClass('active');
				slides().eq($i).fadeOut($transition_time);

				if (slides().length == $i + 1) $i = -1;

				slides().eq($i + 1).fadeIn($transition_time);
				slides().eq($i + 1).addClass('active');
			}, $transition_time + $time_between_slides
		);

	});
	$('.carousel-control').on('click', function (e) {
		e.preventDefault();
		console.log('click');
	})


});