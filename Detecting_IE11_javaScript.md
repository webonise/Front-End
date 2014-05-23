# How to Detect IE-11 in jquery/javascript

IE11 has a completely different User Agent string to previous IE versions; it not longer includes the "MSIE" text. That's why its difficult to detect the IE-11 using basic userAgent
code in javascript.

## 1) Method First: By detecting ActiveXObject:
So to detect IE11 we have to use the feature detection technique:
Let's see the example:

```html
    if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
        alert("This is IE-11");
    }
```

### Explanation:

All versions of IE (except really old ones) have window.ActiveXObject property present. IE11, however hides this property
from DOM and that property is now undefined. But the property itself is present within object, so checking for property presence returns true in all IE versions,
but in IE11 it also returns false for second check. And, finally, hasOwnProperty is called via Object because in IE8
window is not an instanceof Object and does not have hasOwnProperty method.

### NOTE: This activeXObject method will only work on the IE which has ActiveX installed. So this is on of its drawback.

## 2) Method Second: By using MSStream object:

```html
      var isIE11 = !!window.MSStream;
      if(isIE11){
        alert('This is IE-11 and IE-10: ' + isIE11);
      }
```

### Explanation:

This MSStream object will detect both IE-10 and IE-11 and return true.
The MSStream object is a Document Object Model (DOM) type that represents a stream of unsized, sequential binary data.
Use the MSStream object for data that is streaming over the network which hasn't completed downloaded yet, or as an analogous type to IInputSteam winrt objects.
MSStream is backed by IInputStream.

The MSStream object also allows Interop with XHR and HTML tags for the IInputStream WinRT object.

An MSStream is consumed or created in the following areas:

i).  XmlHttpRequest (XHR)
ii). MSApp.createStreamFromInputStream

You create a Uniform Resource Identifier (URI) for the MSStream object using the window.URL.createObjectURL method.
MSStream is intended for a one-time use only; the URI is revoked when it is resolved by the HTML element that is consuming the stream.