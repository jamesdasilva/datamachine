import IGenerateValue from './i-generate-value';

export default class IntegerGen implements IGenerateValue {
  private regExp = /^integer:\d*;\d*$/;

  public generate(params: Array<any>): any{
    let number;
    let min = params[0], max = params[1];
    while(true){
      number = Math.floor(Math.random() * max);
      if(number > min) break;
    }
    return number;
  }
  
  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};
