## About The Project

End-to-end tests (Cypress)
===
This folder contains test scripts for UI and API testing.

Project layout
---
### UI Automation framework
UI Automation Framework:

    |--cypress(folder)
        |--e2e(test file)
            |--api.cy.ts(API test)
            |--employee.cy.ts(UI test)
            |--login.cy.ts(UI test)

        |--support(folder)
            |--utils(folder)
                |--data.ts(create test data for API test)
            |--commands.ts(customize cy command)
            |--index.ts

        |--types(folder)
            |--index.ts(define data type for API test)

    |--PageObject(folder)  
        |--EmployeePage.ts(employee page file)    
        |--LoginPage.ts(login page file)  
 
    |--cypress.json(cypress configuration file) 

    |--package.json  

    |--ReadMe.md（self discription file）


## Getting Started

### Prerequisites
You need to install Node.js in your local computer.
* Node.js

### Download the project
```sh
git clone https://github.com/danielxu110/Playvox-interview.git
```

### Running the tests

```sh
npm install # installs packages from package.json (run this first)
npm test # run the entire test suite
npm start # develop or debug tests using the interactive test runner
```