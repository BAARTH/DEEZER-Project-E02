	$(function() {
            // Setup the player to autoplay the next track
            var a = audiojs.createAll({
                trackEnded: function() {
                    var next = $('.trackList #playable.playing').next();
                    if (!next.length) next = $('ol #playable').first();
                    next.addClass('playing').siblings().removeClass('playing');
                    audio.load($('a', next).attr('data-src'));
                    audio.play();
                }
            });
            // Load in the first track
            var audio = a[0];
            first = $('.trackList a').attr('data-src');
            $('.trackList #playable').first().addClass('playing');
            audio.load(first);
            // Load in a track on click
            $('.trackList #playable').click(function(e) {
                e.preventDefault();
                $(this).addClass('playing').siblings().removeClass('playing');
                audio.load($('a', this).attr('data-src'));
                audio.play();
            });
            // Keyboard shortcuts
            $(document).keydown(function(e) {
                var unicode = e.charCode ? e.charCode : e.keyCode;
                // right arrow
                if (unicode == 39) {
                    var next = $('#playable.playing').next();
                    if (!next.length) next = $('.trackList #playable').first();
                    next.click();
                    // back arrow
                } else if (unicode == 37) {
                    var prev = $('#playable.playing').prev();
                    if (!prev.length) prev = $('.trackList #playable').last();
                    prev.click();
                    // spacebar
                } else if (unicode == 32) {
                    audio.playPause();
                }
            })
        });