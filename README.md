#FontAnim

This is part of a collection of JQuery plugins that animate text in various ways.

There are 4 different plugins:
* [Random letter styles](http://github.com/eldub10/randomanim/)
* [Random font families](http://github.com/eldub10/fontanim/)
* Word zoom (TBA)
* Kaleidoscope letters (TBA)

FontAnim randomly displays each letter of the selected element's text using a different font face. It requires an array of font-family names passed to the plugin. The plugin uses [Web Font Loader](https://github.com/typekit/webfontloader) which is able to load fonts from [Google Fonts](http://www.google.com/fonts),  [Typekit](http://www.typekit.com/), [Fonts.com](http://www.fonts.com/), and [Fontdeck](http://fontdeck.com/), as well as self-hosted web fonts.

See a demo and find out more information about this work-in-progress:

http://github.com/eldub10/fontanim

##Usage

Include `jquery.fontanim.js` after JQuery.
FontAnim also requires [`webfontloader.js`](https://github.com/typekit/webfontloader)

```html
<script src="jquery.js"></script>
<script src="webfontloader.js"></script>
<script src="jquery.fontanim.js"></script>
```

Create an HTML element that contains text. A div element works best:
```html
<div class="animation">Animated Fonts</div>
````

Call `fontAnim` on the element:
```js
$(function () {
	$(".animation").fontAnim({
		fontlist: ['Roboto','Oswald','Lato','Slabo']
	});
})
```

##Options
```js
$(".animation").fontAnim({

	// duration the animation will last
	duration: 10000,

	// update interval for each 'frame' of animation
	interval: 300,

	// array of font-family names from Goggle Fonts
	fontlist: [],

	// function that will be called when animation is complete
	complete: function() { }
});
```
