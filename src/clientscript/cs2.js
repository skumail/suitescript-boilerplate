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

  static showErrorMessage(msgText) {
    const myMsg = message.create({
      title: 'Cannot Save Record',
      message: msgText,
      type: message.Type.ERROR,
    });

    myMsg.show({
      duration: 5000,
    });

    return true;
  }

  static lineInit() {
    return this.showErrorMessage('lineInit Triggered!');
  }

  static pageInit() {
    return this.showErrorMessage('pageInit Triggered!');
  }

  static postSourcing() {
    this.showErrorMessage('postSourcing Triggered!');
    return true;
  }

  static saveRecord() {
    this.showErrorMessage('saveRecord Triggered!');
    return true;
  }

  static sublistChanged() {
    this.showErrorMessage('sublistChanged Triggered!');
    return true;
  }

  static validateDelete() {
    this.showErrorMessage('validateDelete Triggered!');
    return true;
  }

  static validateField() {
    this.showErrorMessage('validateField Triggered!');
    return true;
  }

  static validateInsert() {
    this.showErrorMessage('validateInsert Triggered!');
    return true;
  }

  static validateLine() {
    this.showErrorMessage('validateLine Triggered!');
    return true;
  }

  static fieldChanged() {
    this.showErrorMessage('fieldChanged Triggered!');
    return true;
  }
}

// const cs = new ClientScript(message);

export default {
  lineInit: ClientScript.lineInit,
  pageInit: ClientScript.pageInit,
  postSourcing: ClientScript.postSourcing,
  saveRecord: ClientScript.saveRecord,
  sublistChanged: ClientScript.sublistChanged,
  validateDelete: ClientScript.validateDelete,
  validateField: ClientScript.validateField,
  validateInsert: ClientScript.validateInsert,
  validateLine: ClientScript.validateLine,
  fieldChanged: ClientScript.fieldChanged,
};
