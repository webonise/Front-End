# Review Points

## Display: block for default block element

No need of display: block for block level elements such as h1, h2, h3. . . , div , p


## Avoid height

No need of height for section like header, footer etc


## Display : inline-block and float

Display : inline-block does not work when you use float for same element.


## Display icons in center

Do not set icon in center by using margin left or right, instead give display inline-block for icon and give text-align: center for outer element.


## Multiple times width and height

If you are give some width for one of the tag, then not need to give same width for inner elements.
Exactly opposite for height if height is given to inner element no need of height for outer element.


## CSS to direct tag

Do not apply CSS directly to tag such as header, footer etc. Instead give class or ID.


## CSS to action points

Do not use button, input and a as selector while applying CSS, because when HTML is used for development action points may change according to developers requirement.


## Height: auto

By default every element has height: auto, so need to use height: auto. Height: auto is used only to overwrite fixed height.


## CSS for listing

Give common CSS like font-size, line-height, color, font-weight etc to <li> and not to <ul>


## Use of !important

!important should be used only to overwrite inline and external CSS.


## Use of inline element in block element

Do not use <div>, <p>, <h1>….etc in inline element such as <span>, <a> etc.


## Class & Id name

Class & Id name should not be more than 20 characters.
