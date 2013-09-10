# HTML Guidelines

## Table of Contents

1. [DOCTYPE](#doctype)
2. [Encoding](#encoding)
3. [Write Valid Semantic Markup](#write-valid-semantic-markup)
4. [Images Need ‘Alt’ Text](#images-need-alt-text)
5. [Use Tables for Tabular Data Only](#use-tables-for-tabular-data-only)
6. [HTML validity](#html-validity)
7. [Type attributes](#type-attributes)
8. [Sematics](#sematics-)
9. [Indentation](#indentation-)
10. [Comments](#comments-)
11. [General formatting](#general-formatting-)
12. [HTML quotation marks](#html-quotation-marks-)

###DOCTYPE
1. Ideally, the HTML5 DOCTYPE should be used. It's supported in all modern browsers, and throws IE6 and IE7 into standards mode. 
2. `<!DOCTYPE html>` It's significantly simpler than most DOCTYPEs that you’ve seen – and that was intentional. 
A lot has changed in HTML5 in an attempt to make it even easier to develop a standards-based web page, 
and it should really pay off in the end.

What’s nice about this new DOCTYPE, especially, is that all current browsers (IE, FF, Opera, Safari) 
will look at it and switch the content into standards mode – even though they don’t implement HTML5. 
This means that you could start writing your web pages using HTML5 today and have them last for a 
very, very, long time.

If nothing else, this should be a good excuse to look through the changes in HTML5 and familiarize 
yourself with what’s in the pipeline for browsers – Internet Explorer included.

I really, really, wish this was made clear yesterday – it would’ve avoided a whole lot of pain and 
suffering on the part of the Microsoft Task Force of WaSP and of the Internet Explorer team as a whole. 
I’m really glad that this is happening, though – the future of standards-based web development still 
looks quite bright.

###Encoding
Use UTF-8 (no BOM).
Make sure your editor uses UTF-8 as character encoding, without a byte order mark.

Specify the encoding in HTML templates and documents via <meta charset="utf-8">. Do not specify the encoding of style sheets as these assume UTF-8.

(More on encodings and when and how to specify them can be found in [Handling character encodings in HTML and CSS](http://www.w3.org/International/tutorials/tutorial-char-enc/).)

###Write Valid Semantic Markup
1. Writing websites with clean, semantic HTML is something we wish we could always do. Sometimes we find ourselves limited 
by the way pages were setup by our predecessors, or sometimes we're coding an HTML email. The validity of the HTML should 
never be compromised, even if to solve a browser specific bug.

2. Headings should be heirarchically created from \<h2\> onwards, paragraphs should always be in \<p\> tags and so on and 
so forth. If you write semantic HTML, the resultant page will be cleaner, lighter and easily parsed by search engine 
spiders. This is one of the simplest SEO fixes you can undertake.

###Images Need ‘Alt’ Text

The `<img>` tag requires alt text to both validate and meet accessibility guidelines. The text in the alt attribute should be descriptive of what the image shows, or is trying to achieve, unless of course the image is not critical.

If the image is of a list bullet or other trivial icons, it is recommended to simply leave the alt attribute empty, but still present. A screenreader will then ignore it, as opposed to having to read out "bullet" 20 times.

```html
<img src="dog.gif" alt="Fido and I at the park!"/>
<!-- good, descriptive -->

<img src="bullet.gif" alt="bullet" />
<!-- bad, as silly as it seems -->

<img src="bullet.gif" alt="" />
<!-- good -->
```

###Use Tables for Tabular Data Only

Tables should only ever be used for the presentation of tabular data. The only exception is when composing HTML email, in which a table is almost the only thing supported by soul crushing email clients.

For accessibility, table headers should always be presented using <th> elements. Remember to also set cellpadding, cellspacing and border values to 0 as these are more consistently controlled by CSS.


###HTML validity
Use valid HTML where possible.
Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size. Use tools such as the W3C HTML validator to test.


###Type attributes
Omit type attributes for style sheets and scripts.
Do not use type attributes for style sheets (unless not using CSS) and scripts (unless not using JavaScript).
Specifying type attributes in these contexts is not necessary as HTML5 implies text/css and text/javascript as defaults. This can be safely done even for older browsers.

```html
<!-- Not recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
 type="text/css">
<!-- Recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">

<!-- Not recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"
 type="text/javascript"></script>
<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```


###Sematics :
Use HTML according to its purpose.
Use elements (sometimes incorrectly called “tags”) for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.
Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>
<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```


###Indentation :
Indent by 2 spaces at a time.
Don’t use tabs or mix tabs and spaces for indentation.

```html
<ul>
 <li>Fantastic
 <li>Great
</ul>
```
```css
.example {
 color: blue;
}
```


###Comments :
Explain code as needed, where possible.
Use comments to explain code: What does it cover, what purpose does it serve, why is respective solution used or preferred?


###Multimedia fallback :
Provide alternative contents for multimedia.
For multimedia, such as images, videos, animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text (alt) and for video and audio transcripts and captions, if available.
Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without @alt, and other users may have no way of understanding what video or audio contents are about either.
(For images whose alt attributes would introduce redundancy, and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in alt="".)

```html
<!-- Not recommended -->
<img src="spreadsheet.png">
<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

###General formatting :
Use a new line for every block, list, or table element, and indent every such child element.
Independent of the styling of an element (as CSS allows elements to assume a different role per display property), put every block, list, or table element on a new line.
Also, indent them if they are child elements of a block, list, or table element.

    
```html
<blockquote>
 <p><em>Space</em>, the final frontier.</p>
</blockquote>
<ul>
 <li>Moe</li>
 <li>Larry</li>
 <li>Curly</li>
</ul>
<table>
   <tr>
     <td>$ 5.00</td>
     <td>$ 4.50</td>
   </tr>
</table>
```


###HTML quotation marks :
Use double quotation marks for attribute values where necessary.
When quoting attribute values, use double ("") rather than single quotation marks ('').

```html
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>
<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
```
