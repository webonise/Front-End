# Graphs Implementation

As we are all went through some of the projects in which graph for data representation has been used, and we usually left that graph implementations on
developers end. So to fasten up the development process we can also implement the graphs by ourselves,
just need to use some jQuery code and modify it as per our need. Let’s have a look to the process.
## Implementing Graph Plug-in:
	There are lots of plug-in for the implementations of the graphs are available on the net, but there is one graph plug-in which has its own full
	development organization and very much extensible and customizable this is ‘Highcharts js’.

## Why Highcharts js?
    The reason why I chose highcharts or suggest to use highcharts in the projects:
   • Supports all kinds of graphs( line, spline, area, areaspline, column, bar, pie, scatter, angular gauges, arearange, areasplinerange, columnrange, bubble, box plot, error bars, funnel, waterfall and polar chart) .
   • Highly rich and customizable.
   • Support till IE-6+ as uses VML(Vector Markup Language) rendering (which is very important, from our point of view).
   • Easily supportive with the php or any other programming language.
   • Written in HTML5/Javascript, so very fast in rendering.
   • Support for Android2.x +

So, we are going to see the graph implementation of Basic Line and Pie Chart (Doughnut chart).

##Let’s start with the Basic Line Graph
    ### 1)Installation
        Just download the highchart.js and J-Query version 1.4.3+ and put on your webpage.
        ```html
            <script src="/js/jquery.min.js"></script>
          	<script src="/js/highcharts.js"></script>
        ```

    ### 2)Creating Chart
            a)Add a div in the page. Give it the attribute id and set its specific width and height.
                ```html
                    <div id=”lineGraph” style=”width: 500px; height 400px;”></div>
                ```
            b)Now initialize the chart inside the javascript tag anywhere in a webpage inside the document.ready function.
              Now there are two ways of initializing the chart.
              i) One using the id and call the highchart functions, and
              ii) Second create a new object of the highchart using constructor Highcharts.Chart.

Let’s see the examples of both ways.
#### Using id:
```html
	
	<script>
        $(document).ready(function(){
            $(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Fruit Consumption'
                    },
                    xAxis: {
                        categories: ['Apples', 'Bananas', 'Oranges']
                    },
                    yAxis: {
                        title: {
                            text: 'Fruit eaten'
                        }
                    },


                    series: [{
                        name: 'Jane',
                        data: [1, 0, 4]
                    }, {
                        name: 'John',
                        data: [5, 7, 3]
                    }]
                });
            });
        });
	</script>
```
#### Using Constructor Highcharts.Chart:
```html
        $(document).ready(function(){
            $(function () {
                var lineChart = new Highcharts.Chart({
                    chart: {
                          type: 'line'
                    },
                         // same as the above code//
                });
            });
        });
```

### The above code will render like this:
    image will come here

The second method is used basically when we use Moo Tools or Prototype, instead of $(function() syntax.
###for example:
#### MooTools
```html
        $(document).ready(function(){
            window.addEvent('domready', function() {
               var chart1 = new Highcharts.Chart({
                  chart: {
                     renderTo: 'container',
                     type: 'bar'
               ...
            });
        });
```
#### Prototype
```html
        $(document).ready(function(){
            document.observe("dom:loaded", function() {
               var chart1 = new Highcharts.Chart({
                  chart: {
                     renderTo: 'container',
                     type: 'bar'
               ...
            });
        });
```

## What is Option Object?
    When you initialize the chart using its constructor Highcharts.Chart, the options object is the first parameter you pass.

###Let’s see the basic x-axis and y-axis value modifications:-
    #### X-Axis Modifications:
            1) Setting up the x-axis value(categories):
                Default Values: 0 2 4….
                Now we can set this x-axis value or categories by passing the values to the categories array:
                ```html
                        $(document).ready(function(){
                            $(function () {
                                var lineChart = new Highcharts.Chart({
                                 xAxis: {
                                                categories: ['Apples', 'Bananas', 'Oranges']
                                            },
                                  credits: {
                                            enabled : false
                                   }
                                });
                            });
                        });
                ```
###Let’s see what basic modification we can do in Graph regarding look and feel:-
    #### • Removing the Highchart.com add in right-Bottom of graph:
           As we can see on the above graph there is advertisement of graph coming on the right-bottom side of graph.
           In graph that is called the credit. So, if we want to remove that credits then we have to false the credit option.
            ```html
                $(document).ready(function(){
                    $(function () {
                        var lineChart = new Highcharts.Chart({
                           credits: {
                                    enabled : false   // this line will hide the highchart.js Ad from bottom-right corner.
                           }
                        });
                    });
                });
            ```
