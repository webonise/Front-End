# Before project delivery check following:

## Doctype

Check for the doctype declaration. A document type declaration, or DOCTYPE, defines which version of (X)HTML your webpage
is actually using and this is essential for  proper rendering and functioning of web documents in compliant browsers.

## Favicon

http://www.favicon-generator.org/

Well-written Sass is:

## Title

The <title>title</title> tag is required in all HTML documents as it defines the title of the document.
This tag displays the page title in browser’s toolbar and in the search-engine results (SERPs).
It also provides a title for the page when it is added to favorites. A descriptive <title>title</title>
 tag is important in helping search engines determine your web page's relevancy for certain keywords.

### ImageAlt

Check if alt attribute is present for all images in your project. If an image is not displayed (wrong src, slow connection, etc),
 the alt attribute provides alternative information. Using keywords and human-readable captions in the alt attributes is a good SEO
 practice because search engines cannot really see the images. For images with a decorative role (bullets, round corners, etc)
 you are advised to use an empty alt or a CSS background image. `http://seositecheckup.com/tool/img_alt`

## Alignment

Test the page alignment in IE 9, IE 10+, Chrome (latest version), Firefox (latest version), Safari (latest version)

## Test page optimization.

There are free online tools that calculate document weight, composition, and
 page load times, and even offer recommendations for optimizing web documents. `Yslow` is one such tool.

## Retina images

Apple's newest devices feature the Retina Display, a screen that packs double as many pixels into the same space as older devices.
While using an image from the PSD for desktop view always remember to make it a retina display image simultaneously.

## Inline Css

Inline Css should usually be avoided. All the properties should be included in our main css file(external css). `http://seositecheckup.com`

## Responsive Testing

This is included in unit testing. After Htmlization test the site for its responsiveness. Firstly test it by resizing the browser,
 Secondly test it in all the supported devices. Responsive breakpoints should be
 max-width : 1200px, min-width : 768px to max-width: 979px, min-width: 767px, max-width: 480px.

## Image optimization

Images play a very important role in  page load, so before project delivery we need to take care that all small icons and images should
be present in an image sprite and  larger images should be optimized to a certain level where the image will not be blurred.
`kraken.io` is a very good website for this purpose.


## Google Analytics code

Before delivering any project we also need to take care of the google Analytics
code:
`<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXXXX']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
  })();
</script>`

Just add the above code and the `UA-XXXXXXXX` placeholder — replace this with your unique tracking code.


## URL and Links

There are lot of anchors and urls used in a project, so before delivering we should confirm  that all links should work properly
 and if there is no links/href then there should be javascript:void(0); mentioned so that # won’t be visible on the address bar.
  `http://seositecheckup.com`

## Coding Standard

A very essential part for development is to keep your coding standard up-to-date. Lot of things should be taken care of, such as  :
Use of header tags, title attribute on anchors and input fields, alt attribute to img tag etc. For checking your w3c consortium
you can check your website on: `validator.w3.org.`

## Naming conventions

All the classes and ids used in the project should follow a standard naming convention. Use camelCase naming convention which increases readability.

## Sprites

The reason why we are using sprite is to minimize the network request for small images and icons. So for better performance
 we group different small icons and small images into one image sprite and just
call it once in the css and only by changing the coordinates we show the different images, so the image is  loaded only once and used many times.

## Media print css

Use Media print css for styling print preview pages.