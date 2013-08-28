#CSS Guidelines

## Table of Contents

1. [ID and class name delimiters](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#id-and-class-name-delimiters-)
2. [ID and class name style](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#id-and-class-name-style-)
3. [Type selectors](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#type-selectors-)
4. [Case sensitive CSS](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#case-sensitive-css-)
5. [Ending your CSS declarations with ";"](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#ending-your-css-declarations-with-)
6. [Shorthand properties](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#shorthand-properties-)
7. [0 and units](https://github.com/webonise/Front-End/blob/master/CSS-Guidelines.md#0-and-units-)

###ID and class name delimiters :

Use meaningful or generic ID and class names.
Instead of presentational or cryptic names, always use ID and class names that reflect the purpose of the element in question, or that are otherwise generic.
Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.
Used to write meaningful names for classes(i.e. .`footerLink .mainTitle` etc)
Name your classes with camelCase.

eg:

```css
.mainContent {}
.editInfo {}
```

###ID and class name style :
Use ID and class names that are as short as possible but as long as necessary.
Try to convey what an ID or class is about while being as brief as possible.
Using ID and class names this way contributes to acceptable levels of understandability and code efficiency.

```css
/* Not recommended */
#navigation {}
.atr {}
/* Recommended */
#nav {}
.author {}
```

###Type selectors :
Avoid qualifying ID and class names with type selectors.
Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.

```css
/* Not recommended */
ul#example {}
div.error {}
/* Recommended */
#example {}
.error {}
```


###Case sensitive CSS :
CSS is Case-Sensitive, therefore it matters whether you name your classes with camel-case (i.e. `.mainContent { .... } `) 
and if you’d try to call that class with witout camel-case (i.e. `class=”maincontent”`) it will not recognize it.


###Ending your CSS declarations with ";" 
In order to differentiate a declaration from another, you end each with a semi-colon ; However, you can choose not to use it for your last CSS declaration, 
since no other declaration will need to be recognized. 


Some find it best to take advantage of it because you’d save 1byte per each page load, but if the code itself is not for a large website, 
then Its recommend to use the semi-colon at all times, because it often happens to forget about it and have code written after it, 
which will obviously end up giving you errors and at times, hard to even spot the reason why.


###Shorthand properties :
Use shorthand properties where possible.
CSS offers a variety of shorthand properties (like font) that should be used whenever possible, even in cases where only one value is explicitly set.
Using shorthand properties is useful for code efficiency and understandability.

```css
/* Not recommended */
.example {
    border-top-style: none;
    font-family: Helvetica, Arial, serif;
    font-size: 13px;
    line-height: 18px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0;
}
/* Recommended */
.example {
    border-top: 0;
    font: 13px/18px Helvetica, Arial, serif;
    padding: 0 10px 20px;
}
```

###0 and units :
Omit unit specification after “0” values.
Do not use units after 0 values unless they are required.

```css
.example {
margin: 0;
padding: 0;
}
```

###Pixels vs. Ems

We use the px unit of measurement to define font size, because it offers absolute control over text.
We realize that using the em unit for font sizing used to be popular, to accommodate for Internet
Explorer 6 not resizing pixel based text. However, all major browsers (including IE7 and IE8) now support
text resizing of pixel units and/or full-page zooming. Since IE6 is largely considered deprecated,
pixels sizing is preferred. Additionally, unit-less line-height is preferred because it does not inherit
a percentage value of its parent element, but instead is based on a multiplier of the font-size.

> Correct
```css
#selector {
font-size: 13px;
line-height: 20px;
}
```

> Incorrect
```css
/*  Equivalent to 13px font-size and 20px line-height, but only if the browser default text size is 16px. */
#selector {
font-size: 0.813em;
line-height: 1.25em;
}
```

###General Text and Font Styling

####Headings
* Define default styling for `h1-h6` headings including headings as links. It's helpful to declare these at the top of your CSS document, and modify them with as necessary for consistency across the site.
* Headings should show a hierarchy indicating different levels of importance from the top down starting with h1 having the largest font size.
* SEO: To get a rough idea of how your page hierarchy is organized and read, use your Developer Toolbar to disable CSS. You'll end up with a text-based view of all your `h1-h6` tags, `strong`, `em`, etc.

####Links
* Default styles for links should be declared and different from the main text styling, and with differing styles for hover state.
* When styling links with underlines use `border-bottom` and some padding with `text-decoration: none;`. This just looks better.

###@font-face

The [@font-face at-rule] (http://www.w3.org/TR/2011/WD-css3-fonts-20110324/#font-face-rule) allows you to define custom fonts. It was first defined in the CSS2 specification, but was removed from CSS2.1. Currently, it's a draft recommendation for CSS3.

Our first and most preferred choice for customizing fonts on the web is @font-face, simply because it is part of the CSS Fonts Module working draft which means it will continue to grow in popularity as browser support grows, and ease of use for it improves as it becomes more stable.

For now, when using `@font-face` it's recommended to declare the source for each font format. This is important if you want it to work in the most number of browsers, though it is not a requirement for use.

The font formats included in the specification are:
* __woff__: WOFF (Web Open Font Format)
* __ttf__: TrueType
* __ttf__, otf: OpenType
* __eot__: Embedded OpenType
* __svg__, svgz: SVG Font

####Bulletproof @font-face
For full cross-browser compatibility use Fontsprings' new [bulletproof @font-face syntax] (http://www.fontspring.com/blog/further-hardening-of-the-bulletproof-syntax) (latest version as of 2/21/11).

```css
@font-face {
	font-family: 'MyWebFont';
	src: url('webfont.eot'); /* IE9 Compat Modes */
	src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	     url('webfont.woff') format('woff'), /* Modern Browsers */
	     url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
	     url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

####Cross-Browser Compatibility

Safari, IE 6-9, IE 9 Compatibility Modes, Firefox, Chrome, iOS, Android, Opera

####Prevent Compatibility Mode
Sometimes IE can have a mind of its own and will switch to compatibility mode without you knowing. Include the following in the site <head> to prevent your site from defaulting to compatibility mode:

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

####Tips for @font-face
* IE 6–8 will only accept a TrueType font packaged as an EOT.
* font-weight and font-style have different meanings within @font-face. Declarations where font-weight:bold; means this is the bold version of this typeface, rather than apply bold to this text
* [@font-face gotchas] (http://www.paulirish.com/2010/font-face-gotchas/)

__Pros__
* Easy to implement
* Large variety of APIs
* Customizable
* Easy to add to elements
* Nothing required besides CSS
* Is currently part of the working draft of CSS Fonts Module 3

__Cons__
* Limited browser support if used improperly
* Some older versions of modern browsers (Chrome, Opera) don't always render well. Text can have rough edges. **I have not been able to confirm whether this is still an issue now or not.

###Google WebFonts API & Font Loader

There are two options available with Google Webfonts. Both options have their downsides of course but they can be just as good to use as @font-face, it all depends on a projects needs.

####Webfonts API
Google's Webfonts API essentially does the same thing as @font-face, it just does all the hard work for you, providing wider browser support.The major drawback to this method is the very small font library it uses. To make it work all you need to do is include the stylesheet + the font name.

<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Font+Name">
Then define a style for the selector you want to apply the font to:
1.
CSS selector {
2.
font-family: 'Font Name', serif;
3.
}
Webfont Loader◊

Another option Google offers is the Webfont Loader which is a JavaScript library that allows for more control than the font API does. You can also use multiple webfont providers like Typekit. To use it include the script in your page:

01.
<script type="text/javascript">
02.
WebFontConfig = { google: { families: [ 'Tangerine', 'Cantarell' ]} };
03.
(function() {
04.
var wf = document.createElement('script');
05.
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
06.
'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
07.
wf.type = 'text/javascript';
08.
wf.async = 'true';
09.
var s = document.getElementsByTagName('script')[0];
10.
s.parentNode.insertBefore(wf, s);
11.
})();
12.
</script>
Including the webfont.js file this way is faster if not already using the Ajax APIs. Otherwise you should use this:
1.
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
2.
<script type="text/javascript">
3.
google.load("webfont", "1");
4.
google.setOnLoadCallback(function() {
5.
WebFont.load({ google: { families: [ 'Tangerine', 'Cantarell' ]} });
6.
});
7.
</script>
By using the Webfont Loader you have more ability to customize things including the use of more fonts, not just those in the Google Webfont library which is not large. However, it then requires you to load JavaScript, sacrificing one thing for another.

Pros
Very easy to implement
Wide browser support
Can be combined with Typekit
Customizable when using the font loader
API does the same thing as @font-face
Cons
Very small font library if using the font API
Using the Webfont Loader requires the use of JavaScript to work
Most browsers will load the rest of the page first, leaving a blank space where the text would be, or otherwise show the fallback option if one exists, until the page fully loads.
Some fonts in the webfont library render poorly on Windows