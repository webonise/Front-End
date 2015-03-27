#Magento Installation Guide

###Steps for Installing Magento:

  1. Download XAMPP form http://www.apachefriends.org/en/xampp-windows.html

  2. After Installing XAMPP start Apache and MySQL 

  ![alt tag](/images/Magento-images/img1.jpg)

  3.After starting Apache and MySQL download Magento from   http://www.magentocommerce.com/download (you need to log in into Magento to   download Magento)

  4. You will be directed to the following screen .

  ![alt tag](images/Magento-images/img2.jpg)

  5. Select appropriate latest version of Magento and download the zip file.

  6. After downloading the zip file extract it and place it in htdocs folder path is as   follows: C:\xampp\htdocs. And give appropriate name to it. (eg. magentodemo).

  7. Go to localhost/phpmyadmin and create a database for magento and name it...  eg(magento). 

  ![alt tag](/images/magento-images/img3.jpg)

  Magento database will be created.

  8. Open browser and type localhost/(name of the magento file eg. Magentodemo)

  9. You will get a parent directory called as magentodemo click on it.

  10. After clicking on it start with the installation of Magento.

  11. First tick on the I agree check box to agree with the terms and conditions of   Magento and then click on continue.

  ![alt tag](/images/magento-images/img4.jpg)

  12. After clicking on continue following screen will appear which is called as  Localization screen . Here you have to choose the preferred Time Zone, locale and   currency and then click on continue .

  ![alt tag](/images/magento-images/img5.jpg)

  13. After clicking on continue following screen will appear which is called as the  Configuration screen in which you have to enter the details for the database 
  such as Database name, User name and if present then, User password. 
  You can leave other options intact. Click on the check box next 
  to "Skip Base URL validation before next step". 

  ![alt tag](/images/magento-images/img6.jpg)

  14. After entering the configuration details you will be directed to next screen 
  which   is to create Admin Account. You have to enter your personal details and   Admin login information . The user name and password which will be entered
  here will be used as the user name and password for logging in into the Admin   Panel. You can leave the Encryption Key field empty and the script will generate  one for you. Click on continue.

  ![alt tag](/images/magento-images/img7.jpg)

  15. After clicking on continue you are all set. Note down the encryption key 
  as it will be used by magento to encrypt credit cards and other confidential  information.

  ![alt tag](/images/magento-images/img8.jpg)

  16. Click on front end button to go to Home page or click on Backend button 
  to go to Admin panel.

  17. Home page after clicking on Front End button

    ![alt tag](/images/magento-images/img9.jpg)

  18. Admin login panel after clicking on Backend 

  ![alt tag](/images/magento-images/img10.jpg)

  19. After entering user name and password for Admin you can log into
   Admin Panel in which you will be directed to the following screen. 
  Note: to log into Admin Panel first you have to make changes in the 
  varen.php file. As Magento only accepts real domains and localhost is not a 
  real domain browser does not save cookies so you cannot log in to the Admin 
  Panel .Hence Go to app/code/core/Mage/Core/Model/Session/Abstract/Varien.php  
  and comment the following code :

  ![alt tag](/images/magento-images/img11.jpg)

  after making changes you will be able to log in into the Admin Panel

  ![alt tag](/images/magento-images/img12.jpg)