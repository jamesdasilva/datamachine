export default class Decimal {
  private regExp: RegExp = /^decimal:\d+;\d*\.?\d+;\d*\.?\d+$/;
  generate(params){
    const decimalPlaces = params[0] || 2;
    const min = params[1] || 0.00;
    const max = params[2] || 10000.00;
    let number;
    while(true){
      number = Math.random() * max;
      if(number > min) break;
    }
    return parseFloat(Number(number).toFixed(decimalPlaces));
  }
  public test(stringType) {
    return this.regExp.test(stringType);
  }
}
