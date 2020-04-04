import faker from 'faker';

export default class LatitudeGen {
  private regExp = /^latitude$/;
  
  public generate(params: Array<any>): any {
    return faker.address.latitude();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
}
