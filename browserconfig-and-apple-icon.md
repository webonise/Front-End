#Browser configuration file and Apple touch icon

## Table of Contents

1. [How to create broswerconfig.xml file for IE11]
2. [How to create web clip icon for Apple devices]


### How to create broswerconfig.xml file for IE11
#### browserconfig.xml  :
* This file was introduced in IE11 , it lets you define advanced web application tiles.
* This file is very useful when it comes to favicon : it define the various tile picture and background color.
* By default IE11(windows 8) looks for browserconfig.xml at root of the web site , if the file is not present in root it will give 404 error .

#### Steps for creating browserconfig.xml file:
* Create browserconfig.xml using text editor file and save following code in your file ( Note : this is basic code) .

```css
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="small.png"/>
            <square150x150logo src="medium.png"/>
            <wide310x150logo src="wide.png"/>
            <square310x310logo src="large.png"/>
            <TileColor>#fffef1</TileColor>
        </tile>
    </msapplication>
</browserconfig>
```
(here small.png , medium.png , wide.png , large.png  file need to be place in the same directory as browserconfig.xml itself and TileColor tag set the colour for your pinned site.
 Note-  prefer absoulute path(full-path) for images )

* Save the above file in your root directory.

#### How to use borswerconfig.xml
* To use this file include following code in header section of your page

```css
<meta name="msapplication-config" content="browserconfig.xml" />
```
Here misapplication-config defines the name and location of an xml file containing browser configuration elements.

* If you want to stop using this file , use following code
```css
<meta name=”msapplication-config” content=”none”/>
```
* If a webpage does not specify browser configuration file , IE11(window-8 desktop) automatically looks browserconfig.xml in root of server  , to prevent this ,use “misapplication-config” header with the content=”none”.

#### Using HTML

*  Include following tag in you head tag.

```css
  <meta name="application-name" content=" Contoso" />
  <meta name="msapplication-TileColor" content=" #009900" />
  <meta name="msapplication-square70x70logo" content="images/small.png" />
  <meta name="msapplication-square150x150logo" content="images/medium.png" />
  <meta name="msapplication-wide310x150logo" content="images/wide.png" />
  <meta name="msapplication-square310x310logo" content="images/large.png" />
```

### How to configure web application icon on iOS or iPhone

If you want user to able to add your web application or website link to their home screen, these link reprented by icons that called web clips.

Following are some steps to show an icon to represent your web application or website on iOS

1.	If you want to specify an icon for your whole website , insert an icon file in PNG format in root folder called apple.touch.icon.png.

2.	If you want to specify icon just one page add link element to that webpage as follows

```css
<link rel=”apple-touch-icon” href=”/custom_icon.png”>
```
(you can use any name with icon.png)

3.	To specify multiple icons for different device resolution e.g for iPhone and iPad devices you need to add a sizes attribute to each link element as following way.

e.g
```css
<link rel=”apple-touch-icon” href=”touch-icon-iphone.png”>
<link rel=”apple-touch-icon” sizes=”76x76”  href=”touch-icon-ipad.png”>
<link rel=”apple-touch-icon” sizes=”120x120”  href=”touch-icon-iphone-retina.png”>
<link rel=”apple-touch-icon” sizes=”152x152” href=”touch-icon-ipad-retina.png”>
```
    here , icons that is most appropriate size for device  is used , if we do not specifiy any sizes attribute then default is 60 x 60 .
    If no icons are specified then website root directory is serach for icons start with appli-touch-icon… prefix. E.g  if device icons size is 60x60 then system searched for file name as apple-touch-icon-76x76.png or apple-touch-icon.png

4.	Apple Device icons size

    Each apple device has different screen size and resolution , threrfore we need a separate  , different sized icon for each device so we need to update on size ,  following are some icons size

    *	iPhone and iPad Touch (Retina Display) – 114px by 114px
    *	iPhone and iPod Touch (Non Retina)- 57px by 57px.
    *	iPad (Retina Display) – 144px by 144px
    *	iPad (Non Retina)-  72px by 72px

    iOS automatically determine which icons to use depending on its size

5.	Specifying a startup image.

    On iOS , similar to native application ,we can also specify a startup image or splash image display while web application or website launches.

```css
<link rel=”apple-touch-startup-image” href=”/startup.png”>
```

    On iPhonen and iPad touch , the image must be 320 x 480 pixel and in portrait orientation.





