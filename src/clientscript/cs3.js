'use strict'; // eslint-disable-line

/**
*@NApiVersion 2.x
*@NScriptType ClientScript
*
*/

import message from 'N/ui/message';

class ClientScript {
  constructor(msg) {
    this.msg = msg;
  }

  showErrorMessage(msgText) {
    const myMsg = this.msg.create({
      title: 'Cannot Save Record',
      message: msgText,
      type: message.Type.ERROR,
    });

    myMsg.show({
      duration: 5000,
    });

    return true;
  }

  lineInit() {
    return this.showErrorMessage('lineInit Triggered!');
  }

  pageInit() {
    return this.showErrorMessage('pageInit Triggered!');
  }

  postSourcing() {
    this.showErrorMessage('postSourcing Triggered!');
    return true;
  }

  saveRecord() {
    this.showErrorMessage('saveRecord Triggered!');
    return true;
  }

  sublistChanged() {
    this.showErrorMessage('sublistChanged Triggered!');
    return true;
  }

  validateDelete() {
    this.showErrorMessage('validateDelete Triggered!');
    return true;
  }

  validateField() {
    this.showErrorMessage('validateField Triggered!');
    return true;
  }

  validateInsert() {
    this.showErrorMessage('validateInsert Triggered!');
    return true;
  }

  validateLine() {
    this.showErrorMessage('validateLine Triggered!');
    return true;
  }

  fieldChanged() {
    this.showErrorMessage('fieldChanged Triggered!');
    return true;
  }
}

const {
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
} = new ClientScript(message);

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
