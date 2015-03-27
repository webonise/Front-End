#Steps for Installing Magento theme using Magento Connect

There are two methods to install themes in Magento :

###METHOD I. Installing theme via Magento Connect .
###METHOD II. Install via placing appropriate theme template folders in your Magento Installation. ( We use this method)

### METHOD I. Installing theme via Magento Connect

1. Select any free magento theme and click on install now.

  ![alt tag](/images/Magento-images/i1.jpg)

2. After you click on install now you need to select Magento Connect 1.0 or2.0(depending upon your Magento version)(select 2.0 is version is above 1.5) and click the Check Box I Agree to the Extension licence agreement and click on Get Extension Key Button as below.

  ![alt tag](/images/Magento-images/i2.jpg)

3. After clicking on the Get Extension Button you will get the Extension key copy it.

  ![alt tag](/images/Magento-images/i3.jpg)

4. After copying the key go to Admin → System → Magento Connect → Magento Connect Manager, then the following screen will appear where you need to re enter your admin login user name and password.

  ![alt tag](/images/Magento-images/i4.jpg)

5. After you log into the admin panel you will be getting the following screen.
(NOTE: For selecting your theme you can follow the steps from STEP1 or first you can open Magento Connect Manager and then select a theme by clicking on Magento Connect which is circled in the screen shot . By clicking on it you will get variety of themes you can choose from.)

  ![alt tag](/images/Magento-images/i5.jpg)

6. Next the copied Extension key is to be pasted as below.

  ![alt tag](/images/Magento-images/i6.jpg)

7. After the key is pasted click on install button and you will get the following result.

  ![alt tag](/images/Magento-images/i7.jpg)

  Here extension dependencies will be seen and then you click on proceed button

8. After clicking on proceed  after a few seconds to display magento theme 
   installed successfully message and click Refresh Button as seen below.

  ![alt tag](/images/Magento-images/i8.jpg)

9. After refreshing the page return to Admin by clicking on return to Admin link
   or enter url localhost/magento-folder-name/index.php/admin. Then go to 
   System → Design and click on Add Design Change Button as below

  ![alt tag](/images/Magento-images/i9.jpg)

10. As in the image below select Custom Design tab in dropdown list and select
    your installed new theme eg. f002(magento Classic theme) and click on save 
    button.

  ![alt tag](/images/Magento-images/i10.jpg)

11. After selecting your theme refresh your home page and then see the result.

  ![alt tag](/images/Magento-images/i11.jpg)

###METHOD II. Install via placing appropriate theme template folders in your Magento Installation.

1. Select the theme which you want to download and download it's zip file.

  ![alt tag](/images/Magento-images/i12.jpg)

2. Unzip the zip file and rename the file (eg. mMagezon)

3. Go to mMagezon → app rename it with the same name as the unzipped folder name
   i.e. mMageZon and place it in magento_installation folder/apps/design/frontend/mMageZon(create a new folder which will be package)/mMagezon (create a new folder which will be theme)/ layout and template 

  ![alt tag](/images/Magento-images/i13.jpg)

4. Go to mMagezon →skin rename it with the same name as the unzipped folder i.e. mMageZon and place
    it in magento_installation_folder/skin/frontend/mMagezon(create a new folder which will be package)/mMagezon (create a new folder which will be theme)/ css, Images,js etc.

  ![alt tag](/images/Magento-images/i14.jpg)

5. Open Admin Panel and go to CMS → Pages select home page and then go 
   to->Design ->custom Layout → mMagezon .

  ![alt tag](/images/Magento-images/i15.jpg)

6. Go to System → Configuration → Design and add your theme's name under package and theme tab

  ![alt tag](/images/Magento-images/i16.jpg)

7. Refresh your home page and your new theme will be activated.

  ![alt tag](/images/Magento-images/i17.jpg)