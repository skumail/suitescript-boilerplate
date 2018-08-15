# SuiteScript Boilerplate
A SuiteScript ES6 Boilerplate Project

## Installation Instructions
1. Install Node.js 8+ using detailed installation instructions [here](https://nodejs.org/en/download/package-manager/)
2. Clone repository
```
$ git clone https://github.com/skumail/suitescript-boilerplate.git
```
3. Change into the working directory
```
$ cd suitescript-boilerplate
```
4. Execute following commands to install NPM dependencies
```
$ npm install
```

## Build
To build suitescript 2.x compatible code
```
$ npm run build
```
To watch build changes
```
$ npm run watch:build
```

## Test
jest 
```
$ npm test
```

## Style Guide
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Writing SuiteScript
### ES6 ClientScript Example 
```javascript
/**
*@NApiVersion 2.x
*@NScriptType ClientScript
*
*/

import message from 'N/ui/message';

const showErrorMessage = (msgText) => {
  const myMsg = message.create({
    title: 'Cannot Save Record',
    message: msgText,
    type: message.Type.ERROR,
  });

  myMsg.show({
    duration: 5000,
  });
};

const lineInit = () => {
  showErrorMessage('lineInit Triggered!');
  return true;
};

const pageInit = () => {
  showErrorMessage('pageInit Triggered!');
  return true;
};

const postSourcing = () => {
  showErrorMessage('postSourcing Triggered!');
  return true;
};

const saveRecord = () => {
  showErrorMessage('saveRecord Triggered!');
  return true;
};

const sublistChanged = () => {
  showErrorMessage('sublistChanged Triggered!');
};

const validateDelete = () => {
  showErrorMessage('validateDelete Triggered!');
  return true;
};

const validateField = () => {
  showErrorMessage('validateField Triggered!');
  return true;
};

const validateInsert = () => {
  showErrorMessage('validateInsert Triggered!');
  return true;
};

const validateLine = () => {
  showErrorMessage('validateLine Triggered!');
  return true;
};

const fieldChanged = () => {
  showErrorMessage('fieldChanged Triggered!');
  return true;
};

export default {
  lineInit,
  pageInit,
  postSourcing,
  saveRecord,
  sublistChanged,
  validateDelete,
  validateField,
  validateInsert,
  validateLine,
  fieldChanged,
};
```
### Netsuite Compatible ClientScript After build
```javascript
'use strict';

/**
*@NApiVersion 2.x
*@NScriptType ClientScript
*
*/

define(['N/ui/message'], function (message) {

  var showErrorMessage = function showErrorMessage(msgText) {
    var myMsg = message.create({
      title: 'Cannot Save Record',
      message: msgText,
      type: message.Type.ERROR
    });

    myMsg.show({
      duration: 5000
    });
  };

  var lineInit = function lineInit() {
    showErrorMessage('lineInit Triggered!');
    return true;
  };

  var pageInit = function pageInit() {
    showErrorMessage('pageInit Triggered!');
    return true;
  };

  var postSourcing = function postSourcing() {
    showErrorMessage('postSourcing Triggered!');
    return true;
  };

  var saveRecord = function saveRecord() {
    showErrorMessage('saveRecord Triggered!');
    return true;
  };

  var sublistChanged = function sublistChanged() {
    showErrorMessage('sublistChanged Triggered!');
  };

  var validateDelete = function validateDelete() {
    showErrorMessage('validateDelete Triggered!');
    return true;
  };

  var validateField = function validateField() {
    showErrorMessage('validateField Triggered!');
    return true;
  };

  var validateInsert = function validateInsert() {
    showErrorMessage('validateInsert Triggered!');
    return true;
  };

  var validateLine = function validateLine() {
    showErrorMessage('validateLine Triggered!');
    return true;
  };

  var fieldChanged = function fieldChanged() {
    showErrorMessage('fieldChanged Triggered!');
    return true;
  };

  return {
    lineInit: lineInit,
    pageInit: pageInit,
    postSourcing: postSourcing,
    saveRecord: saveRecord,
    sublistChanged: sublistChanged,
    validateDelete: validateDelete,
    validateField: validateField,
    validateInsert: validateInsert,
    validateLine: validateLine,
    fieldChanged: fieldChanged
  };
});
```
