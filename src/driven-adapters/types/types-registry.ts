// const boolean = require('./boolean');
// const cpf = require('./cpf');
// const date = require('./date');
import Decimal from './decimal';
import RandRegExp from './randRegExp';
import IObtainTypes from '../../boundary/driven-port/i-obtain-types';
// const email = require('./email');
// const __enum = require('./enum');
// const firstName = require('./firstName');
// const id = require('./id');
// const idAutoIncrement = require('./idAutoIncrement');

export default class TypesRegistry implements IObtainTypes {
  private types = {};
  constructor() {
    // this.types['boolean'] = boolean;
    // this.types['cpf'] = cpf;
    // this.types['date'] = date;
    this.types['decimal'] = new Decimal();
    this.types['regexp'] = new RandRegExp();
    // this.types['email'] = email;
    // this.types['enum'] = __enum;
    // this.types['firstName'] = firstName;
    // this.types['id'] = id;
    // this.types['idAutoIncrement'] = idAutoIncrement;
  }

  public get(tName){
    return this.types[tName];
  }
}