#Sencha performance issue

##Performance issue in Sencha is mainly occurred due to following,

1. DOM
2. Events
3. Drawing
4. Animations
5. Code execution

As in formulator we have a complex design of screen which consists of more number of UI nested components, so has large amount of DOM rendering.We have multiple animations and events in application.
Apart from this we have huge data to display on screen which includes complex code execution for applying views and filters.

##To overcome this problems, we have to take care of following things,

1. All the Views/Panels should not be loaded at once into the Viewport. The Views/Panels should be created whenever required. This results in better memory usage which leads to faster responsiveness of the app.

2. Keep your Dom structure Light
	Limited amout of advanced css3(border-radius, box-shadow, gradient)        
    Avoid using dom element depth.


3. Prevent unnecessary layouts.
The Over-nesting of components should be avoided. This results in slow loading of the view. The nesting of vbox inside another vbox should be avoided till it is absolutely necessary, as it results in further delay in View loading. In a normal scenario, one should use hbox instead of vbox as it provides better performance in loading of the View.

4. The use of defaults in the config of a panel/fieldset also helps enhance the performance of an app. The defaults help define some attributes for the parent panel which all the subclass panels will inherit. This helps in reducing the overall size of the code thereby enhancing the memory utilization.


5. The list should have smooth and fast scrolling. To achieve this, it is advisable to avoid using box shadows and gradients. Having just a background color enhances the responsiveness of the lists. High resolution images should also be avoided as they consume a lot of cache memory space, which further reduces performance.


6. On overlays and alerts hide, destroy them.
```css
   destroy unused containers:
    container.on('deactivate',function(oldCard),{
        oldCard.destroy();
  });
```
	As soon as we are done with views, destroy them when they are deactivated.
   
7. Add and remove listeners properly.

8. Size of the file matters.(break big files into small files)

9. Use jsbuilder for minification and packaging of java script files.




