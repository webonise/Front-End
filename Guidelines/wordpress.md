# Installation steps of wordpress

  In this tutorial I'm going to take you through the steps that will give you a local WordPress environment that will allow you to
  safely and efficiently develop for WordPress.


### What You Need
```

a. Xampp
b. A current version of WordPress
c. A web browser
d. Your favorite text editor

```
### 1. Install Xampp:
a. Download and install XAMPP from ``http://www.apachefriends.org/en/xampp.html``  website.

### 2. Start Xampp:
a. After successful completion of  XAMPP setup , start Apache and mysql from XAMPP control Panel.

### 3. Check Xampp
a. Go to browser → type ``http://localhost/xampp/`` . It will open XAMPP window , if window will not open then there is problem with installation or problem with port no.

### 4. Download Wordpress
a. Download Wordpress from ``http://wordpress.org/download/``  website.

### 5. Extract wordress zip and path
a. Extract wordpress .zip file
b. copy and paste the extracted wordpress folder into C:\xampp\htdocs folder.

### 6. Database setup
a. go to browser and hit this -> ``http://localhost/phpmyadmin``
b. It will open MySql database
c. Create database with any name e.g wordpressdemo

### 7. wp-config settings.
a. go to C:\xampp\htdocs\wordpressfolder\ .
b. Rename wp-config-sample.php as wp-config.php and open wp-config.php file in editor.
c. and edit as follow ->
 ```
 line 19 →   change line as - define('DB_NAME', 'wordpressdb(whatever db name you have created)');
 line 22 → change line as - define('DB_USER', 'root');
 line 25 →  change line as – if password is not assigned to phpMyAdmin define('DB_PASSWORD', ''); else define('DB_PASSWORD', 'yourpassword');
 line 28 → change line as - define('DB_HOST', 'localhost');

 ```
 ### 8. check working wordpress
 a. Go to borwser and type localhost/wordpress(folder name which is copied into C:\xampp\htdocs).

 ### 9. Fill Form
 a. Fill proper information and click on Install Wordpress.

 ### 10. Form submission
a. If form is successfully submitted , log into wordpress admin panel using ``http://localhost/wordpress3/wp-login.php``
