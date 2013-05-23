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