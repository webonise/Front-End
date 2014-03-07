# Place holder line-height issue:

![alt tag](http://s24.postimg.org/9volhl5it/screen_IE10.jpg)

### What is the issue?

There is a input box with height 36px as show in above image.
In IE10 placeholder is not vertically middle.


### Solution:

Applied same 36px line-height to input[type="text"].


### Side effect:

Before giving line-height: 36px it was working fine in all browser. As I applied
36px line-height to input[type="text"], below is what happened  in Safari:

![alt tag](http://s23.postimg.org/j2ds7axcb/screen_safari.jpg)


### Second Solution:

Apply line-height with IE hack.
That is as follows
input[type="text"] {
	line-height: 36px\9; // CSS Hack only for IE.
}
_______________________________________________________________________________________________


# Placeholder text color issue:

![alt tag](http://s2.postimg.org/qgsv78xc9/screen_IE10_webkit.jpg)

### What is the issue?

Text color of placeholder for input and textarea is not same.


### Solution:

Add css selector for IE10 and webit browsers.
#####Note: It does not work if you combine both by " , "


### For Webkit browsers

textarea::-webkit-input-placeholder {
    color: #c0b5b5;
}


### For IE10

textarea:-ms-input-placeholder {
    color: #c0b5b5;
}
