	$(function () {

		/********************************
		
	JOUER AUTOMATIQUEMENT LA PROCHAINE PISTE
		
		********************************/

		var a = audiojs.createAll({
			trackEnded: function () {
				var next = $('.trackList #playable.playing').next();
				if (!next.length) next = $('.trackList #playable').first();
				next.addClass('playing').siblings().removeClass('playing');
				audio.load($('a', next).attr('data-src'));
				audio.play();
			}
		});



		var audio = a[0];

		/********************************
		
				CHARGEMENT DE LA PISTE AU CLIC
		
		********************************/

		$('.trackList #playable, .historyList #playable').click(function (e) {
			e.preventDefault();
			$(this).addClass('playing').siblings().removeClass('playing');
			var title = $(this).find(".title").html();
			var artist = $(this).find(".artist").html();
			var album = $(this).find("img").attr('src');

			$(".acc_history").prepend('<li id="playable" class="ui-state-default track"><a href="#" data-src=""> <img src=""><span class="title"></span></br><span class="artist"></span></a></li>');

			audio.load($('a', this).attr('data-src'));
			$("#play-bar .title, #history li:first-child .title").html(title);
			$(this).find(".title").html(title);
			$("#play-bar .artist, #history li:first-child .artist").html(artist);
			$(this).find(".artist").html(artist);
			$("#play-bar img, #history li:first-child img").attr('src', album);
			$(this).find("img").attr('src', album);
			console.log(album);
			audio.play();
			$("#pause").addClass("active");
			$("#play").removeClass("active");


		});


		/********************************
		
			GESTION DES BOUTONS PLAY/PAUSE
		
		********************************/

		$("#play, #pause").click(function () {
			if ($("audio").attr('src') == undefined) {
				$("#play").addClass("active");
			} else {
				audio.playPause();
				$("#play, #pause").toggleClass("active");
			}


			/********************************
		
					GESTION DU BOUTON BACKWARD
		
			********************************/

			$("#prev").click(function () {
				var prev = $('#playable.playing').prev();
				if (!prev.length) prev = $('.trackList #playable').last();
				audio.playPause();
				prev.click();
			});


			/********************************
		
				GESTION DU BOUTON FORWARD
		
		********************************/

			$("#next").click(function () {
				var next = $('#playable.playing').next();
				if (!next.length) next = $('.trackList #playable').first();
				audio.playPause();
				next.click();
			});

		});

	});