import faker from 'faker';

export default class LongitudeGen {
  private regExp = /^longitude$/;
  
  public generate(params: Array<any>): any {
    return faker.address.longitude();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};
