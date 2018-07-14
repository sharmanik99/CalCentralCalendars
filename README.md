# Welcome to CalCentralCalendar!

This is a tool that makes it easier to sync your CalCentral calendar with Google calendar with 6 simple steps! You can either follow along with the steps below or go [here](https://imgur.com/a/u5GM9HX)

Heading

## Step 1: Go to CalCentral

Go to CalCentral and open "My Academics" tab and select "Choose Classes" under the Class Enrollment section. Select the current academic term and press Continue. Scroll down until you see the highlighted class schedule table.

![First Step](https://i.imgur.com/888XgsO.jpg)

## Step 2: Right Click from inside table
From anywhere inside the actual classes table, right click and click "Inspect". It's best if you do this from Chrome or Safari.

![Second Step](https://i.imgur.com/MQuCY9S.jpg)
## Step 3: Click "tbody" element 
After clicking "Inspect", the developer console will show (it might stay inside the current tab instead of opening a new tab). Within the console, click the "tbody" element
![Third Step](https://i.imgur.com/RPyak4u.png)

## Step 4: Copy the "tbody" element 
After clicking on the "tbody" tag, the console will take you to the tbody tag within the page (highlighted in blue above). You will also see the classes table highlighted in the browser. 

Right-click on the tbody tag within the console and select "Copy > Copy Element". The entire table will then be copied to your clipboard.
![Fourth Step part 1](https://i.imgur.com/7KhIVAD.png)
![Fourth Step part 2](https://i.imgur.com/bUWN08g.png)
## Step 5: Paste to CalCentralCalendar
Go to CalCentralCalendar and paste the copied information into the HTML code input box and click "Parse HTML"
![Fifth Step](https://i.imgur.com/0uzgHO4.png)
## Step 6: Edit and Create
After clicking "Parse HTML", your classes should show up in an editable table. Feel free to make any changes to the title, location, instructor, start, and end dates. If you have to change the course days or times for any reason, make sure to click on the blue "Course Days" or "Course Time" headings to get more information on how to change it. After making any changes, click the "Create Classes" button and your classes will be synced. 

![Last Step](https://i.imgur.com/lGsJlip.png)