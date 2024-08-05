## About The Project
This project consists of UI testing and API testing. I use Cypress to build test automation framework. I also introduce POM and DDT into this design. I utilize Postman to test API automatically by loading testdata stored in a file.<br/>

### UI Automation framework comprises of 3 folders
UI Automation Framework:
    |--fixtures(folder)
        |--products.json(testdata file)

    |--integration(folder)
        |--ui_autotest.spec.js(test file)

    |--PageObject(folder)  
        |--CartPage.js(cart page file)    
        |--LoginPage.js(login page file)  
        |--ProductsPage.js(products page file)   

    |--cypress.json(cypress configuration file)   

API Automation:
    |--API_Auto
        |--jobadder.postman_collection.json(postman collection file)
        |--jobadder_API_testdata.txt(API testdata file)

ReadMe.md（self discription file）




### Built With
* Cypress
* POM
* DDT
* Postman

## Getting Started


### Prerequisites
You need to install some software in your local computer. My computer's OS is windows 7.

* Cypress
* Node.js
* Postman

### Installation

__UI automation:__
1. download all folders and file to your local computer.<br/>
   open Git Bash and execute command: git clone https://github.com/DanielXu1978/jobadder-1.git 
   				
2. find cypress.json under your cypress installation path like "E:\Cypress\node_modules\.bin" and modify it referring to my cypress.json.  <br/>
  for example, in my computer the project path is E:/jobadder-1/<br/>
  __"integrationFolder": "E:/jobadder-1/integration",__<br/>
  __"fixturesFolder": "E:/jobadder-1/fixtures"__ <br/>
3. launch Cypress Studio<br/>
  open cmd terminal and execute command "cypress open" under path "..\.bin". <br/>
  For example, "E:\Cypress\node_modules\.bin" is the cypress installation path <br/>
  E:\software\Cypress\node_modules\.bin>__cypress open__
4. the cypress studio lists the test file "ui_autotest.spec.js" in the folder "integration" <br/>
  click the file and lunch Test Runner to execute test
 
__API automation:__
1. open Postman
2. import jobadder.postman_collection.json from folder "API_Auto"
3. select this collection and click "Run Collection"
4. set parameters "Delay" and "Data" <br/>
  __Delay: 20 or other values__<br/>
  __Data: you can select the file "jobadder_API_testdata.txt" from folder "API_Auto"__
5. click run 
