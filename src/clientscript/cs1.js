'use strict'; // eslint-disable-line

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
