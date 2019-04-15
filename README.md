# CS391-Group72-Capstone
For project #72 (Field diagnostics app) and individual written assignments
The actual Android project can be located here: https://github.com/jeffreykat/MyVetPath. We couldn't add an Android project into this repository.


# Build Instructions
## Set Up Android Studio
1. Download and run the Android Studio installation setup wizard here: https://developer.android.com/studio
2. The wizard will ask you if you want to install “Android Studio” and “Android Virtual Device”. Make sure both boxes are checked and click    “Next”
3. The wizard will then ask you where you want to install Android studio. Choose where you want to put it and click on “Next”
4. The wizard will ask you to choose a start menu folder. The default option should work fine. Click on “Next”. The wizard will now start      installing.
5. Once the wizard is finished, start Android Studio
6. The setup wizard will now ask you if you want a “Standard” or “Custom” setup for Android Studio. Select “Standard” and click on “Next”
7. The wizard will then ask you what UI theme you want. Choose whatever you prefer and click on “Next”.
8. The wizard will ask you to verify the installation settings. Click on “Finish”. Android Studio will now start downloading components.
9. Once all the components have finished downloading, click on “Finish”.

## Clone the GitHub Repository (can be found here: https://github.com/jeffreykat/MyVetPath)
10. Open up a terminal and navigate to the directory you want to clone the repository to
11. Clone the repository (“git clone https://github.com/jeffreykat/MyVetPath.git”)

## Open The Project
12. When Android Studio opens up for the first time, it will give you a list of options of what you can do. Click on “Open An Existing         Project” (if the actual Android Studio opens up, then go to File -> Open...)
13. Find the directory where you cloned our repository (in step 11) and click the item that says “MyVetPath” (It should have the Android     Studio icon next to it). Click on the “OK” button.
14. Android studio will take some time to sync all the files, run a build, and index. Wait until all these processes are done.
15. Click on the green play button near the top of Android Studio.
16. If you don’t already have a virtual device, then you will need to install one (go to step 16.A). If you do already have one, skip to step 17.
  A. Click on the “Create New Virtual Device” button
  B. Select any phone on the list (such as the Nexus 5x)
  C. Click on “Next”
  D. Download a system image by clicking on “Download” next to the API you want. We tested our application by downloading Pie (API level        28). Agree to the terms and download it.
  E. Once the components have downloaded, click on “Finish”
  F. Click on the system image you just downloaded and click on “Next”
  G. Click on the “Finish” button on the “Verify Configuration” page
17. Click on an available virtual device and then click on the “OK” button
18. The emulator will now launch and our application should automatically install and open up

## Setup MySql Server
1. Run the Script MySQLInstall on a Ubuntu machine using Bash. Command: "bash MySQLInstall"
2. When Prompeted, "This operation will take X Space. Do you want to continue?" type, "y"
3. Once the install script is completed Stary the mysql shell by typing, "sudo mysql -u root"
4. Once the mysql shell has started ctrl-A the text from the file "Create Database SQL" 
5. Past the text in the command line. (It should start running the sql)
6. Once the command is finished run sql, "SHOW DATABASES;"
7. After the database My_Vet_Path is there then run the sql, "USE My_Vet_Path;"
8. To see a list of the tables run the sql, "SHOW tables;"
9. To see the create statements for the sql, "SHOW CREATE TABLE \`tableName\`;"

