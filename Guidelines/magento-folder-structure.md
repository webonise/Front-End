#Magento Default File and Folder Structure

Below are the files and folders which are included in the main directory of Magento:

![alt tag](/images/Magento-images/mag_folder1.jpg)


###.htaccess
    This contains mod_rewrite rules, which are essential for the Search Engine Friendly URLs.
    Here you can also find standard web server and php directives that can improve your website performance.
    In short this focuses on site speed, security and SEO.

###.htaccess.sample
This is a backup of the .htaccess file.This file can be used to restore the default settings if you modify .htaccess

###404
This folder stores the default 404 template and skin for Magento

###app
This folder contains modules, themes, configuration and translation files. Also template files for the default administration  theme and installation are present.

###cron.php
Executing of this file on a defined time perios will ensure that the complicated Magento caching system will not affect the web site performance. A Cron Job (A cron job is a command for scheduling a task to be executed sometime in the future. This is normally used to schedule a job that is executed periodically ) is to be set for this file.

###downloader
Storage of web downloader files which are used for the installation and upgrade of Magento through your browser.

###favicon.ico
This is default favicon for Magento

###index.php
This is the main index file for Magento

###index.php.sample
This is a backup of index.php file. This file can be used to revert the changes ina case of index.php modification

###js
This folder contains the pre-complied libraries of the Javascript code included in Magento.

###lib
This folder conains Magento's core code. It contains the software's PHP libraries.

###LICENSE_AFL.txt
This is the Academic Free License under which the Magento software is distributed

###LICENSE.txt
This is the Open Software License under which the Magento software is distributed 

###media
This is the storage of the Magento media files which contains images, generated thumbnails, uploaded category and product images. It is also used as a container for importing images through the mass import/export tools

###mage
This controls the automatic update through the downloader script and SSH. It handles the update of each individual Magento module.

###php.ini.sample
This file conatins sample php directives that can be used in order to modify your PHP setup. If you want to alter thedefault setp edit the file and then rename it to php.ini

##pkginfo
Contains the information regarding the module upgrade changes.

###report
This folder contains the skin of the Magento error reports

###skin
Contains the theme files which consists of images, javascripts files, css files. It also consist of the skin files for the installation of skin and administration templates.

###var
Consists of cache,sessions database backups, data exports and cached error reports.

###Theming is related to the template files which are separated in 3 folders as follows:

###/app/design/frontend/default/YOUR_TEMPLATE_NAME/layout/
Contains the .xml files that define which modules should be called by the template files and loaded in defined areas on the site

###/app/design/frontend/default/YOUR_TEMPLATE_NAME/template/
Contains files and subfolders that structure the final output for tehe users using the functions loacetd in tehe layout/folder. This folder contains .phtml files.

###/skin/frontend/default/YOUR_TEMPLATE_NAME/
Contains the css, images, javascript files related to the template.
