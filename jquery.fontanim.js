
(function($) {
    $.fn.animateFonts = function(options, complete) {

    	var settings = $.extend({
    		duration: 10000,
    		interval: 300,
    		fontlist: [],
    		complete: complete
    	}, options);

    	return this.each( function() {
    		var duration = settings.duration;
    		var interval = settings.interval;
			var fontlist = settings.fontlist;
			var fnComplete = settings.complete;

			var textstring = $(this).text();

			// get the text from the element being animated
			var letters = textstring.split("");
			if(letters.length == 0) {
				return;
			}

			// split each letter into a span
			var str = "";
			$(this).empty();
			$.each(letters, function(index, letter) {
				str += "<span>" + letter + "</span>";
			});

			// append the spans to the parent
			var children = $(this).append(str).children();
			var parent = $(this);
			var textstring = $(this).text();

			// center the spans vertically
			var height = parseInt(parent.css("font-size"));
			var width = height * .70;

			$(children).css({
				height: height,
				width: width,
				display: 'inline-block',
				verticalAlign: 'middle',
			});

			if(fontlist.length === 0 || typeof WebFont === "undefined") {
				fontlist = ['serif','sans-serif','fantasy','monospace'];
			} else {
				// use WebFont plugin to download the fonts from Google
				WebFont.load({
					google: {
						families: fontlist,
						// text: textstring // this doesn't seem to be working right in Chrome 41
					}
				});
			}

			// set a timer for the animation
			var timer = setInterval( function() {
				// random color
				var color = getRandomInt(0, 0xffffff).toString(16);
				// random letter index
				var index = getRandomInt(0, letters.length);
				// random font-family
				var font = getRandomInt(0, fontlist.length);

				// change the color and font of the selected letter
				$((children).get(index)).css({
					color: "#" + color,
					fontFamily: fontlist[font],
				}).attr("title", fontlist[font]);

				// stop timer when duration countdown ends
				duration -= interval;
				if(duration < 0) {
					clearInterval(timer);

					// call completion function
					if($.isFunction(fnComplete)) {
						fnComplete.call(this);
					}
				}
			}, interval);

			$(this).click(function(){clearInterval(timer);}); // TODO: replace this start and stop methods
		});
    }

    // pseudo random number generator
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

}(jQuery));
