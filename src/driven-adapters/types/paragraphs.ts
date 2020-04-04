import faker from 'faker';

export default class ParagraphsGen {
  private regExp = /^paragraphs$/;
  
  public generate(params: Array<any>): any {
    return faker.lorem.paragraphs();
  }

  public test(stringType: string): boolean {
    return this.regExp.test(stringType);
  }
};


