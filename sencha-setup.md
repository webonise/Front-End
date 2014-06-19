# Sencha setup

## Supported Platforms :
1. Android
2. IOS
3. Windows Phone
4. Microsoft Surface & RT
5. Blackberry

## Prerequisites :
1. Sencha CMD
2. Sencha Touch
3. Modern webkit browser (Chrome , safari, firefox)
4. Apache Ant, Ruby, SASS, Compass
5. Apache web server
6. Webstorm IDE (Optional)

## Installation :

   Step 1: Extract the Sencha touch-2.x zip file to your sencha projects directory

   Step 2: The following command generates a new application with the namespace  MyApp  to
                  "/path/to/myapp":    
                 #  Make sure the current working directory is the Sencha Touch 2 directory	
                 cd /path/to/sencha-touch-2-directory

   Step 3:  sencha generate app MyApp /path/to/create/myapp  
                 [sencha generate app MyApp ../MyApp]

   Step 4: Create virtual host (http://local.myapp.com) so that you should be able to navigate to the                                  
                MyApp  from your browser.


### Note:
If you need support for server-side scripting or PHP, you can get another web server such as XAMPP. If you use XAMPP, put the files you want to serve in the htdocs directory.
