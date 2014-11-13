
### Installing Gulp

Installing Gulp is pretty easy. First, install the Gulp package globally:
```js
npm install -g gulp
```
Then, install it in your project:

```js
npm install --save-dev gulp
```

### Using Gulp

Let’s create a Gulp task to minify one of our JavaScript files. Create a file named `gulpfile.js`. This is where you will define your Gulp tasks, which will be run using the `gulp` command.

Put the following in your `gulpfile.js` file:

```js
var gulp = require('gulp'),
   uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});
```

Install `gulp-uglify` through npm by running `npm install --save-dev gulp-uglify`, and then run the task by running `gulp minify`. Assuming that you have a file named `app.js` in the `js` directory, a new `app.js` will be created in the build directory containing the minified contents of `js/app.js`.

What actually happened here, though?

We’re doing a few things in our `gulpfile.js` file. First, we’re loading the `gulp` and `gulp-uglify` modules:

```js
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
```
Then, we’re defining a task named `minify`, which, when run, will call the function provided as the second argument:

```js
gulp.task('minify', function () {

});
```
Finally — and this is where it gets tricky — we’re defining what our task should actually do:

```js
gulp.src('js/app.js')
   .pipe(uglify())
   .pipe(gulp.dest('build'))
```
Unless you’re familiar with streams, which most front-end developers are not, the code above won’t mean much to you.

#### Streams

Streams enable you to pass some data through a number of usually small functions, which will modify the data and then pass the modified data to the next function.

In the example above, the `gulp.src()` function takes a string that matches a file or number of files (known as a “glob”), and creates a stream of objects representing those files. They are then passed (or piped) to the `uglify()` function, which takes the file objects and returns new file objects with a minified source. That output is then piped to the `gulp.dest()` function, which saves the changed files.

In diagram form, this is what happens:

<figure>![Stream diagram.](./building-with-gulp_files/01-streams-opt.png)
<figure>When there is only one task, the function doesn’t really do much. However, consider the following code:    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'js'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src<span class="token punctuation">(</span></span><span class="token string">'js/*.js'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">jshint<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>jshint<span class="token punctuation">.</span><span class="token function">reporter<span class="token punctuation">(</span></span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">uglify<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">concat<span class="token punctuation">(</span></span><span class="token string">'app.js'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>gulp<span class="token punctuation">.</span><span class="token function">dest<span class="token punctuation">(</span></span><span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

To run this yourself, install `gulp`, `gulp-jshint`, `gulp-uglify` and `gulp-concat`.

This task will take all files matching `js/*.js` (i.e. all JavaScript files from the `js` directory), run JSHint on them and print the output, uglify each file, and then concatenate them, saving them to `build/app.js`. In diagram form:

<figure>![Stream diagram.](./building-with-gulp_files/02-steams-2-opt.png)
<figure>If you’re familiar with Grunt, then you’ll notice that this is pretty different to how Grunt does it. Grunt doesn’t use streams; instead, it takes files, runs a single task on them and saves them to new files, repeating the entire process for every task. This results in a lot of hits to the file system, making it slower than Gulp.

For a more comprehensive read on streams, check out the “[Stream Handbook](https://github.com/substack/stream-handbook)<sup class="po" id="note-11">[11](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#11)</sup>.”

#### gulp.src()

The `gulp.src()` function takes a glob (i.e. a string matching one or more files) or an array of globs and returns a stream that can be piped to plugins.

Gulp uses [node-glob](https://github.com/isaacs/node-glob)<sup class="po" id="note-12">[12](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#12)</sup> to get the files from the glob or globs you specify. It’s easiest to explain using examples:

*   `js/app.js`

    Matches the exact file
*   `js/*.js`

    Matches all files ending in `.js` in the `js` directory only
*   `js/**/*.js`

    Matches all files ending in `.js` in the `js` directory and all child directories
*   `!js/app.js`

    Excludes `js/app.js` from the match, which is useful if you want to match all files in a directory except for a particular file
*   `*.+(js|css)`

    Matches all files in the root directory ending in `.js` or `.css`

Other features are available, but they’re not commonly used in Gulp. Check out out the [Minimatch](https://github.com/isaacs/minimatch)<sup class="po" id="note-13">[13](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#13)</sup> documentation for more.

Let’s say that we have a directory named `js` containing JavaScript files, some minified and some not, and we want to create a task to minify the files that aren’t already minified. To do this, we match all JavaScript files in the directory and then exclude all files ending in `.min.js`:

    gulp<span class="token punctuation">.</span><span class="token function">src<span class="token punctuation">(</span></span><span class="token punctuation">[</span>'js<span class="token comment" spellcheck="true">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span>js<span class="token string">', '</span><span class="token operator">!</span>js<span class="token comment" spellcheck="true">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span>min<span class="token punctuation">.</span>js'<span class="token punctuation">]</span><span class="token punctuation">)</span>

#### Defining Tasks

To define a task, use the `gulp.task()` function. When you define a simple task, this function takes two attributes: the task’s name and a function to run.

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'greet'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">'Hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Running `gulp greet` will result in “Hello world” being printed to the console.

A task may also be a list of other tasks. Suppose we want to define a `build` task that runs three other tasks, `css`, `js` and `imgs`. We can do this by specifying an array of tasks, instead of the function:

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'build'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'css'</span><span class="token punctuation">,</span> <span class="token string">'js'</span><span class="token punctuation">,</span> <span class="token string">'imgs'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

These will be run asynchronously, so you can’t assume that the `css` task will have finished running by the time `js` starts — in fact, it probably won’t have. To make sure that a task has finished running before another task runs, you can specify dependencies by combining the array of tasks with the function. For example, to define a `css` task that checks that the `greet` task has finished running before it runs, you can do this:

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'css'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'greet'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true"> // Deal with CSS here
    </span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Now, when you run the `css` task, Gulp will execute the `greet` task, wait for it to finish, and then call the function that you’ve specified.

#### Default Tasks

You can define a default task that runs when you just run `gulp`. You can do this by defining a task named `default`.

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'default'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true"> // Your default task
    </span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

#### Plugins

You can use a number of plugins — over 600, in fact — with Gulp. You will find them listed on the [plugins page](http://gulpjs.com/plugins/)<sup class="po" id="note-14">[14](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#14)</sup> or by searching `gulpplugin` on npm. Some plugins are tagged “gulpfriendly”; these aren’t plugins but are designed to work well with Gulp. Be aware when searching directly on npm that you won’t be able to see whether a plugin has been blacklisted (scrolling to the bottom of the plugins page, you will see that many are).

Most plugins are pretty easy to use, have good documentation and are run in the same way (by piping a stream of file objects to it). They’ll then usually modify the files (although some, such as validators, will not) and return the new files to be passed to the next plugin.

Let’s expand on our `js` task from earlier:

    <span class="token keyword">var</span> gulp <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        jshint <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-jshint'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        uglify <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-uglify'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        concat <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-concat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'js'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src<span class="token punctuation">(</span></span><span class="token string">'js/*.js'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">jshint<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>jshint<span class="token punctuation">.</span><span class="token function">reporter<span class="token punctuation">(</span></span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">uglify<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">concat<span class="token punctuation">(</span></span><span class="token string">'app.js'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>gulp<span class="token punctuation">.</span><span class="token function">dest<span class="token punctuation">(</span></span><span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

We’re using three plugins here, [gulp-jshint](https://github.com/wearefractal/gulp-jshint)<sup class="po" id="note-15">[15](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#15)</sup>, [gulp-uglify](https://github.com/terinjokes/gulp-uglify)<sup class="po" id="note-16">[16](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#16)</sup> and [gulp-concat](https://github.com/wearefractal/gulp-concat)<sup class="po" id="note-17">[17](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#17)</sup>. You can see in the `README` files for the plugins that they’re pretty easy to use; options are available, but the defaults are usually good enough.

You might have noticed that the JSHint plugin is called twice. That’s because the first line runs JSHint on the files, which only attaches a `jshint` property to the file objects without outputting anything. You can either read the `jshint` property yourself or pass it to the default JSHint reporter or to another reporter, such as [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)<sup class="po" id="note-18">[18](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#18)</sup>.

The other two plugins are clearer: the `uglify()` function minifies the code, and the `concat('app.js')` function concatenates all of the files into a single file named `app.js`.

#### gulp-load-plugins

A module that I find really useful is gulp-load-plugins, which automatically loads any Gulp plugins from your `package.json` file and attaches them to an object. Its most basic usage is as follows:

    <span class="token keyword">var</span> gulpLoadPlugins <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-load-plugins'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        plugins <span class="token operator">=</span> <span class="token function">gulpLoadPlugins<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

You can put that all on one line (`var plugins = require('gulp-load-plugins')();`), but I’m not a huge fan of inline `require` calls.

After running that code, the `plugins` object will contain your plugins, camel-casing their names (for example, `gulp-ruby-sass` would be loaded to `plugins.rubySass`). You can then use them as if they were required normally. For example, our `js` task from before would be reduced to the following:

    <span class="token keyword">var</span> gulp <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        gulpLoadPlugins <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-load-plugins'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        plugins <span class="token operator">=</span> <span class="token function">gulpLoadPlugins<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'js'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src<span class="token punctuation">(</span></span><span class="token string">'js/*.js'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>plugins<span class="token punctuation">.</span><span class="token function">jshint<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>plugins<span class="token punctuation">.</span>jshint<span class="token punctuation">.</span><span class="token function">reporter<span class="token punctuation">(</span></span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>plugins<span class="token punctuation">.</span><span class="token function">uglify<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>plugins<span class="token punctuation">.</span><span class="token function">concat<span class="token punctuation">(</span></span><span class="token string">'app.js'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>gulp<span class="token punctuation">.</span><span class="token function">dest<span class="token punctuation">(</span></span><span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

This assumes a `package.json` file that is something like the following:

    <span class="token punctuation">{</span>
       <span class="token string">"devDependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token string">"gulp-concat"</span><span class="token punctuation">:</span> <span class="token string">"~2.2.0"</span><span class="token punctuation">,</span>
          <span class="token string">"gulp-uglify"</span><span class="token punctuation">:</span> <span class="token string">"~0.2.1"</span><span class="token punctuation">,</span>
          <span class="token string">"gulp-jshint"</span><span class="token punctuation">:</span> <span class="token string">"~1.5.1"</span><span class="token punctuation">,</span>
          <span class="token string">"gulp"</span><span class="token punctuation">:</span> <span class="token string">"~3.5.6"</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

In this example, it’s not actually much shorter. However, with longer and more complicated Gulp files, it reduces a load of includes to just one or two lines.

Version 0.4.0 of gulp-load-plugins, released in early March, added lazy plugin loading, which improves performance. Plugins are not loaded until you call them, meaning that you don’t have to worry about unused plugins in `package.json` affecting performance (although you should probably clean them up anyway). In other words, if you run a task that requires only two plugins, it won’t load all of the plugins that the other tasks require.

#### Watching Files

Gulp has the ability to watch files for changes and then run a task or tasks when changes are detected. This feature is amazingly useful (and, for me, probably Gulp’s single most useful one). You can save your LESS file, and Gulp will turn it into CSS and update the browser without your having to do anything.

To watch a file or files, use the `gulp.watch()` function, which takes a glob or array of globs (the same as `gulp.src()`) and either an array of tasks to run or a callback.

Let’s say that we have a `build` task that turns our template files into HTML, and we want to define a `watch` task that watches our template files for changes and runs the task to turn them into HTML. We can use the `watch` function as follows:

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'watch'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       gulp<span class="token punctuation">.</span><span class="token function">watch<span class="token punctuation">(</span></span><span class="token string">'templates/*.tmpl.html'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'build'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Now, when we change a template file, the `build` task will run and the HTML will be generated.

You can also give the `watch` function a callback, instead of an array of tasks. In this case, the callback would be given an `event` object containing some information about the event that triggered the callback:

    gulp<span class="token punctuation">.</span><span class="token function">watch<span class="token punctuation">(</span></span><span class="token string">'templates/*.tmpl.html'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">'Event type: '</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true"> // added, changed, or deleted
    </span>   console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">'Event path: '</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true"> // The path of the modified file
    </span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Another nifty feature of `gulp.watch()` is that it returns what is known as a `watcher`. Use the `watcher` to listen for additional events or to add files to the `watch`. For example, to both run a list of tasks and call a function, you could add a listener to the `change` event on the returned `watcher`:

    <span class="token keyword">var</span> watcher <span class="token operator">=</span> gulp<span class="token punctuation">.</span><span class="token function">watch<span class="token punctuation">(</span></span><span class="token string">'templates/*.tmpl.html'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'build'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    watcher<span class="token punctuation">.</span><span class="token function">on<span class="token punctuation">(</span></span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">'Event type: '</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true"> // added, changed, or deleted
    </span>   console<span class="token punctuation">.</span><span class="token function">log<span class="token punctuation">(</span></span><span class="token string">'Event path: '</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment" spellcheck="true"> // The path of the modified file
    </span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

In addition to the `change` event, you can listen for a number of other events:

*   `end`

    Fires when the watcher ends (meaning that tasks and callbacks won’t be called anymore when files are changed)
*   `error`

    Fires when an error occurs
*   `ready`

    Fires when the files have been found and are being watched
*   `nomatch`

    Fires when the glob doesn’t match any files

The `watcher` object also contains some methods that you can call:

*   `watcher.end()`

    Stops the `watcher` (so that no more tasks or callbacks will be called)
*   `watcher.files()`

    Returns a list of files being watched by the `watcher`
*   `watcher.add(glob)`

    Adds files to the `watcher` that match the specified glob (also, accepts an optional callback as a second argument)
*   `watcher.remove(filepath)`

    Removes a particular file from the `watcher`

### Reloading Changes In The Browser

You can get Gulp to reload or update the browser when you — or, for that matter, anything else, such as a Gulp task — changes a file. There are two ways to do this. The first is to use the LiveReload plugin, and the second is to use BrowserSync

#### LiveReload

[LiveReload](http://livereload.com/)<sup class="po" id="note-19">[19](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#19)</sup> combines with browser extensions (including a [Chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)<sup class="po" id="note-20">[20](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#20)</sup>) to reload your browser every time a change to a file is detected. It can be used with the [gulp-watch](https://www.npmjs.org/package/gulp-watch)<sup class="po" id="note-21">[21](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#21)</sup> plugin or with the built-in `gulp.watch()` that I described earlier. Here’s an example from the `README` file of the [gulp-livereload repository](https://github.com/vohof/gulp-livereload)<sup class="po" id="note-22">[22](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#22)</sup>:

    <span class="token keyword">var</span> gulp <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        less <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-less'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        livereload <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-livereload'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        watch <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-watch'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'less'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       gulp<span class="token punctuation">.</span><span class="token function">src<span class="token punctuation">(</span></span><span class="token string">'less/*.less'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">watch<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">less<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>gulp<span class="token punctuation">.</span><span class="token function">dest<span class="token punctuation">(</span></span><span class="token string">'css'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">livereload<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

This will watch all files matching `less/*.less` for changes. When a change is detected, it will generate the CSS, save the files and reload the browser.

#### BrowserSync

An alternative to LiveReload is available. [BrowserSync](http://browsersync.io/)<sup class="po" id="note-23">[23](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#23)</sup> is similar in that it displays changes in the browser, but it has a lot more functionality.

When you make changes to code, BrowserSync either reloads the page or, if it is CSS, injects the CSS, meaning that the page doesn’t need to be refreshed. This is very useful if your website isn’t refresh-resistant. Suppose you’re developing four clicks into a single-page application, and refreshing the page would take you back to the starting page. With LiveReload, you would need to click four times every time you make a change. BrowserSync, however, would just inject the changes when you modify the CSS, so you wouldn’t need to click back.

<figure>[![BrowserSync is a better way to test your design across browsers.](./building-with-gulp_files/03-browsersync-opt-500.gif)](http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/06/03-browsersync-opt.gif)<sup class="po" id="note-24">[24](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#24)</sup>
<figcaption>BrowserSync is a better way to test your design across browsers. ([View large version](http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/06/03-browsersync-opt.gif)<sup class="po" id="note-25">[25](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#25)</sup>)</figcaption>
<figure>BrowserSync also synchronizes clicks, form actions and your scroll position between browsers. You could open a couple of browsers on your desktop and another on an iPhone and then navigate the website. The links would be followed on all of them, and as you scroll down the page, the pages on all of the devices would scroll down (usually smoothly, too!). When you input text in a form, it would be entered in every window. And when you don’t want this behavior, you can turn it off.<figure>[![BrowserSync doesn’t require a browser plugin because it serves your files for you.](./building-with-gulp_files/04-browsersync-opt-500.gif)](http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/06/04-browsersync-opt.gif)<sup class="po" id="note-26">[26](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#26)</sup>
<figcaption>BrowserSync doesn’t require a browser plugin because it serves your files for you. ([View large version](http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/06/04-browsersync-opt.gif)<sup class="po" id="note-27">[27](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#27)</sup>)</figcaption>
<figure>BrowserSync doesn’t require a browser plugin because it serves your files for you (or proxies them, if they’re dynamic) and serves a script that opens a socket between the browser and the server. This hasn’t caused any problems for me in the past, though.

There isn’t actually a plugin for Gulp because BrowserSync doesn’t manipulate files, so it wouldn’t really work as one. However, the [BrowserSync module on npm](https://www.npmjs.org/package/browser-sync)<sup class="po" id="note-28">[28](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#28)</sup> can be called directly from Gulp. First, install it through npm:

    npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev browser<span class="token operator">-</span>sync

Then, the following `gulpfile.js` will start BrowserSync and watch some files:

    <span class="token keyword">var</span> gulp <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        browserSync <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'browser-sync'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'browser-sync'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">var</span> files <span class="token operator">=</span> <span class="token punctuation">[</span>
          'app<span class="token comment" spellcheck="true">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span>html'<span class="token punctuation">,</span>
          'app<span class="token operator">/</span>assets<span class="token operator">/</span>css<span class="token comment" spellcheck="true">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span>css'<span class="token punctuation">,</span>
          'app<span class="token operator">/</span>assets<span class="token operator">/</span>imgs<span class="token comment" spellcheck="true">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span>png'<span class="token punctuation">,</span>
          'app<span class="token operator">/</span>assets<span class="token operator">/</span>js<span class="token comment" spellcheck="true">/**/</span><span class="token operator">*</span><span class="token punctuation">.</span>js'
       <span class="token punctuation">]</span><span class="token punctuation">;</span>

       browserSync<span class="token punctuation">.</span><span class="token function">init<span class="token punctuation">(</span></span>files<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          server<span class="token punctuation">:</span> <span class="token punctuation">{</span>
             baseDir<span class="token punctuation">:</span> <span class="token string">'./app'</span>
          <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Running `gulp browser-sync` would then watch the matching files for changes and start a server that serves the files in the `app` directory.

The developer of BrowserSync has written about some other things you can do in his [BrowserSync + Gulp](https://github.com/shakyShane/gulp-browser-sync)<sup class="po" id="note-29">[29](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#29)</sup> repository.

### Why Gulp?

As mentioned, Gulp is one of [quite a few](https://gist.github.com/callumacrae/9231589)<sup class="po" id="note-30">[30](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#30)</sup> build tools available in JavaScript, and other build tools not written in JavaScript are available, too, including Rake. Why should you choose Gulp?

The two most popular build tools in JavaScript are Grunt and Gulp. Grunt was [very popular in 2013](http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/)<sup class="po" id="note-31">[31](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#31)</sup> and completely changed how a lot of people develop websites. Thousands of plugins are available for it, doing everything from linting, minifying and concatenating code to installing packages using Bower and starting an Express server. This approach is pretty different from Gulp’s, which has only plugins to perform small individuals tasks that do things with files. Because tasks are just JavaScript (unlike the large object that Grunt uses), you don’t need a plugin; you can just start an Express server the normal way.

Grunt tasks tend to be over-configured, requiring a large object containing properties that you really wouldn’t want to have to care about, while the same task in Gulp might take up only a few lines. Let’s look at a simple `gruntfile.js` that defines a `css` task to convert our LESS to CSS and then run [Autoprefixer](https://github.com/ai/autoprefixer)<sup class="po" id="note-32">[32](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/#32)</sup> on it:

    grunt<span class="token punctuation">.</span><span class="token function">initConfig<span class="token punctuation">(</span></span><span class="token punctuation">{</span>
       less<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          development<span class="token punctuation">:</span> <span class="token punctuation">{</span>
             files<span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">"build/tmp/app.css"</span><span class="token punctuation">:</span> <span class="token string">"assets/app.less"</span>
             <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>

       autoprefixer<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          options<span class="token punctuation">:</span> <span class="token punctuation">{</span>
             browsers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'last 2 version'</span><span class="token punctuation">,</span> <span class="token string">'ie 8'</span><span class="token punctuation">,</span> <span class="token string">'ie 9'</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          multiple_files<span class="token punctuation">:</span> <span class="token punctuation">{</span>
             expand<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
             flatten<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
             src<span class="token punctuation">:</span> <span class="token string">'build/tmp/app.css'</span><span class="token punctuation">,</span>
             dest<span class="token punctuation">:</span> <span class="token string">'build/'</span>
          <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks<span class="token punctuation">(</span></span><span class="token string">'grunt-contrib-less'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks<span class="token punctuation">(</span></span><span class="token string">'grunt-autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    grunt<span class="token punctuation">.</span><span class="token function">registerTask<span class="token punctuation">(</span></span><span class="token string">'css'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'less'</span><span class="token punctuation">,</span> <span class="token string">'autoprefixer'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Compare this to the `gulpfile.js` file that does the same:

    <span class="token keyword">var</span> gulp <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       less <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-less'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       autoprefix <span class="token operator">=</span> <span class="token function">require<span class="token punctuation">(</span></span><span class="token string">'gulp-autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gulp<span class="token punctuation">.</span><span class="token function">task<span class="token punctuation">(</span></span><span class="token string">'css'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       gulp<span class="token punctuation">.</span><span class="token function">src<span class="token punctuation">(</span></span><span class="token string">'assets/app.less'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">less<span class="token punctuation">(</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span><span class="token function">autoprefix<span class="token punctuation">(</span></span><span class="token string">'last 2 version'</span><span class="token punctuation">,</span> <span class="token string">'ie 8'</span><span class="token punctuation">,</span> <span class="token string">'ie 9'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">pipe<span class="token punctuation">(</span></span>gulp<span class="token punctuation">.</span><span class="token function">dest<span class="token punctuation">(</span></span><span class="token string">'build'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

The `gulpfile.js` version is considerably more readable and smaller.

Because Grunt hits the file system far more often than Gulp, which uses streams, Gulp is nearly always much faster than Grunt. For a small LESS file, the `gulpfile.js` file above would usually take about 6 milliseconds. The `gruntfile.js` would usually take about 50 milliseconds — more than eight times longer. This is a tiny example, but with longer files, the amount of time increases significantly.
