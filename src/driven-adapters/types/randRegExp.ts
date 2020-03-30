var RandExp = require('randexp');

export default class RandRegExp {
  generate(params) {
    return new RandExp(new RegExp(params[0].slice(1, params[0].length - 1))).gen();
  }
}