# <noscript> tag

As we know today’s all websites used javascript for the smooth and in full functionality running, but sometimes it may happen that on our desktop we are opening a website and we are unable to see most of the javascript functionality.
					The reason is simple the web browsers javascript  functionality is most of the time is disabled, we have to manually enabled the javascript functionality. Now here is the key point to worry. What happen if the user is a non-technical person and he/she is barely know about the browsers setting except its normal use. So, what about for that users we can do, here this <noscript> tag is very handy to us as development perspective. Lets have a look to its use and feature:-

## Feature and Usage:
1. <noscript> tag is used to create an alternate content for those browser which has javascript disabled or not supported.
2. We can add any content or html structure inside the <noscript> tag  which we want to show the user when their browser’s javascript is disabled.
3.	<noscript> tag can be used inside both <body> or <head> tag but in the previous version before HTML 5 it can only be used inside the <body> tag.
4.	In XHTML, the <noscript> tag is not supported.

### Example:
```html
	
	<script>
		alert(‘this is script enabled section’);		
	</script>
	
	<noscript>
		<div class=”noscriptWrap”>
			<p>
			It seems your browser’s javascript functionality is disabled so, to see the javascript fucntionality will work you can go through the below site to know how to enable the javascript:
			<a href=http://www.enable-javascript.com/>www.enable-javascript.com/</a>
			</p>
		</div>
	</noscript>
	<!-- noscript tag ends -->
	
Now lets see a situation, where we want to auto redirect the user on that above link or any other new page where  some information or other design without javascript code is present, So, can we do that…?

## YES ofcourse!

Here is one attribute of <noscript> tag is present where we can refresh the page and auto-redirect the user somewhere else (new page or any link). Lets see its syntax:

```html
	<noscript>
		<meta http-equiv="refresh" content="0;url=/page-path or any link">
	</noscript>

The above meta tag will redirect the user to the specified url it would be a external or any pages relative path in our project.

Refrence for the enable or disabled the javascript:
http://www.enable-javascript.com/   
visit this website to enable or disabled your bowser’s javascript and then goto facebook page and see how they created an alternative page for the non javascript sites.


  						

