#Creating a CMS page and adding its link in Menu

1. For Eg. I want to add Services CMS Page and inlcude its link in main navigation bar between About us and Contact us.

  ![alt tag](/images/Magento-images/cms1.jpg)

2. Go to Admin Panel → CMS → Pages

3. Create a new page by clicking on Add new Page Button

  ![alt tag](/images/Magento-images/cms2.jpg)

4. You will get the following screen in which you have to fill all the appropriate details about the page under the **Page Information** tab options and click on save and continue . Your page will get saved.

  ![alt tag](/images/Magento-images/cms3.jpg)

5. When you will save the page you will get to see that your page is added in the pages list under 
CMS Tab. You can preview your newly created page by licking on **Preview** link at the right side.

  ![alt tag](/images/Magento-images/cms4.jpg)

6.Now you need to add your page in top.phtml file manually as my Main Nav is present in that file so that you will see a link to services page in main navigation bar. **(In This case go to)C:\xampp\htdocs\magentodemo\app\design\frontend\testLayout\testLayout\template\catalog\navigation\top.phtml** And add one extra li for Services and save top.phtml

  ![alt tag](/images/Magento-images/cms5.jpg)

7.Goto Admin panel → System → Cache Management and click on Flush Magento Cache button. You need to do this to clear the cache and for your changes to get reflected.

  ![alt tag](/images/Magento-images/cms6.jpg)

8. Refresh your home page and now your Page is visible in frontend along with its link in the main navigation bar in header.

  ![alt tag](/images/Magento-images/cms7.jpg)


