# About

This library is for test automation of saucedemo application and API request

## Getting Started

Use the package manager [npm](https://docs.npmjs.com/about-npm) to install needed dependencies.

```bash
npm install
```

## Usage

To run the UI tests use

```
npm run test
```

You can find needed spec at ./tests/specs/ directory

## Reporter
You can generate report and it will be opened by executing
```
npm run generate:report
```

## Linter
To run eslint checks you can use 
```
npm run eslint:check
```
To run eslint checks with automatic fixes you can use
```
npm run eslint:fix
```

## Tech
* [Node.js](https://nodejs.org/en/)
* [WebdriverIO](https://webdriver.io/) | [Mocha](https://mochajs.org/): - frameworks
* [Faker](https://faker.readthedocs.io/en/master/) - used for data generating
* [Allure Test Report](http://allure.qatools.ru/) - reporter

## To run API tests you need:

1. Download Postman application
2. Import  postman-collections/Test Task.postman_collection.json file into postman (you can use guide from this [link](https://kb.datamotion.com/?ht_kb=postman-instructions-for-exporting-and-importing))
3. You need to use Collection Runner to run API test (can use this [link](https://learning.postman.com/docs/running-collections/intro-to-collection-runs/))
4. Observe results in "Run summary"