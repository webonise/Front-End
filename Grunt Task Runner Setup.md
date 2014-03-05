
#Grunt Taskrunner Setup


Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager.
###1 . Install Node.js by downloading from following link

[windows 64 bit](http://nodejs.org/dist/v0.10.26/x64/node-v0.10.26-x64.msi)

[windows 32 bit](http://nodejs.org/dist/v0.10.26/node-v0.10.26-x86.msi)

###2. Installing the CLI
run this command on command prompt
####npm install -g grunt-cli

grunt-cli will put the grunt command in your system path, allowing it to be run from any directory.



##- Preparing setup for new Grunt project
A typical setup will involve adding two files to your project root directory: ***package.json***   and the ***Gruntfile.js***

##1. package.json:
This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.

Create the package.json file in your project root directory with following code

**package.json**
```json
{
    "name": "Project-name",
	"devDependencies":
	{
	}
}
```

###Installing Grunt and gruntplugins in project root directory
```cmd
npm install grunt --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-contrib-watch --save-dev
```
Here **--save-dev** option  automatically update your  ***package.json***

##2. The Gruntfile
Create Gruntfile.js in your project root directory by following code
**Gruntfile.js**
```js
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: { 
                src: ['js/*.js'],
                dest: 'js-concat/alljs.js'
            }
        },
        
        
        uglify: {
            dist: {
                files: {
                'min-js/alljs.min.js': ['js-concat/alljs.js']
                }
            }
        },

        compass: {
            dist: {
                options: {
                sassDir: 'sass',
                cssDir: 'css',
                }
            },
        },

        watch: {
            script:{
                files: ['js/*.js'],
                tasks: ['concat'],
            },
            
            min:{
                files: ['js-concat/*.js'],
                tasks: ['uglify'],
            },

        style:{
            files:['sass/*.scss'],
            tasks:['compass'],
        }
    }
});

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['concat','uglify','compass','watch']);
};
```
after all this done, just run **grunt** command from your project root directory it will execute javascript defined in Gruntfile.js

##- Preparing setup for existing Grunt project

1. check in your system, that Node.js is installed or not by using following command.
```cmd
node --version or node
```
if node.js not installed in your system, then install node.js using following link

    [windows 64 bit](http://nodejs.org/dist/v0.10.26/x64/node-v0.10.26-x64.msi)

    [windows 32 bit](http://nodejs.org/dist/v0.10.26/node-v0.10.26-x86.msi)

2. after that run grunt command 

    if command is not working then install **CLI** using
    ```cmd
    npm install -g grunt-cli
    ```

3. And run **grunt** command from your project root directory 

