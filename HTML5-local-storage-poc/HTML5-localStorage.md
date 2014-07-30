# HTML5 Local Storage / Web storage

Web storage and DOM storage (document object model) are web application software methods and protocols used for storing data in a web browser.
Web storage supports persistent data storage, similar to cookies but with a greatly enhanced capacity and no information stored in the HTTP request header.
There are two main web storage types: local storage and session storage, behaving similarly to persistent cookies and session cookies respectively.

Like cookies, this data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you.
Unlike cookies, this data is never transmitted to the remote web server (unless you go out of your way to send it manually).
Unlike all previous attempts at providing persistent local storage, it is implemented natively in web browsers,
so it is available even when third-party browser plugins are not.

#### Which browsers? Well, the latest version of pretty much every browser supports HTML5 Storage… even Internet Explorer!
![ScreenShot](images/storage_support.jpg)

#### Now how to check whether your browser is supporting local storage or not.
From your JavaScript code, you can access HTML5 Storage through the localStorage object on the global window object.
Before you can use it, you should detect whether the browser supports it.

So we can check it in two ways:

1) Using 'typeof' function:
```html
    <script>
        $(document).ready(function(){
            window.onload = function(){
                if(typeof(localStorage) !== 'undefined'){
                  // some function or action
                }else {
                    alert("Sorry! No web storage support.");
                }
            }
        });
    </script>
```

2) Instead of writing this function yourself, you can use Modernizr to detect support for HTML5 Storage.
```html
    <script>
        $(document).ready(function(){
            if (Modernizr.localstorage) {
              // some function or action
            } else {
              alert("Sorry! No web storage support.");
            }
        });
    </script>
```

#### Type of Web Storage.
Web storage offers two different storage areas:— local storage and session storage — which differ in scope and lifetime.

##### Local Storage
Data placed in local storage is per origin (the combination of protocol, hostname, and port number as defined in the same origin policy)
(the data is available to all scripts loaded from pages from the same origin that previously stored the data)
and persists even after the browser is closed.
```html
    <script>
        $(document).ready(function(){
            // Store value on the browser beyond the duration of the session
            localStorage.setItem('key', 'value');

            // Retrieve value (persists even after closing and re-opening the browser)
            alert(localStorage.getItem('key'));
        });
    </script>
```
##### Session Storage
Session storage is per-page-per-window and is limited to the lifetime of the window. Session storage is intended to allow separate instances of
the same web application to run in different windows without interfering with each other, a use case that's not well supported by cookies.
```html
    <script>
        $(document).ready(function(){
            // Store value on browser for duration of the session
            sessionStorage.setItem('key', 'value');

            // Retrieve value (gets deleted when browser is closed and re-opened)
            alert(sessionStorage.getItem('key'));
        });
    </script>
```