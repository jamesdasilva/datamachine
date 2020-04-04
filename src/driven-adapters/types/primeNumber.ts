import Chance from 'chance';

export default class PrimeNumberGen {
  private regExp = /^primeNumber:\d*;\d*$/;
  
  public generate(params: Array<any>): any {
    return new Chance().prime({min: params[0], max: params[1]});
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};

