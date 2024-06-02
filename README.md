Project Setup & WebdriverIO Installation

-> check Appium installation done on machine
   run: appium-doctor 

-> If not instlled do the setup all required s/w's for mobile app execution on Android device

Step 1 - Create a new folder and open in IDE (VS Code)

Step 2 - Open terminal in VS Code and run commands npm init -y and npm init wdio

Step 3 - Select the options as required and install

Step 4 - Check wdio.conf.js file and project folders are created

1. Directory Structure
Before starting, ensure your project directory is properly organized. Here’s a suggested structure:

2. Feature File (login.feature)
Create the feature file under the features directory. This file will define the scenarios for valid and invalid login attempts.

3. Page Object (LoginPage.js)
Create the LoginPage object under the src/pageobjects directory. This file encapsulates the elements and actions related to the login page.

4. Step Definitions (loginSteps.js)
Create the step definitions file under the src/steps directory. This file will contain the JavaScript code to execute the steps defined in the feature file.

5. WebDriverIO Configuration (wdio.conf.js)
Ensure your WebDriverIO configuration file includes the necessary settings for Cucumber, Appium, and reporting.

6. Dependencies (package.json)
Ensure you have the required dependencies in your package.json.

Step 5 - To run existing tests

Run all tests in the folder configured in wdio.conf.js npx wdio run wdio.conf.js

Step 6: Share on GitHub
Create a new repository on GitHub and push the code:
git init
git branch -b "newbranch"
git add .
git commit -m "Initial commit"
git push -u origin master

