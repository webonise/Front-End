# HTML Guidelines

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
<script src="https://gist.github.com/4147009.js?file=Image Alt example"></script>
https://gist.github.com/swapnilvathare/4147009

###Use Tables for Tabular Data Only

Tables should only ever be used for the presentation of tabular data. The only exception is when composing HTML email, in which a table is almost the only thing supported by soul crushing email clients.

For accessibility, table headers should always be presented using <th> elements. Remember to also set cellpadding, cellspacing and border values to 0 as these are more consistently controlled by CSS.



HTML validity :
Use valid HTML where possible.
Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size. Use tools such as the W3C HTML validator to test.


