export default interface IGenerateValue {
  generate(params: Array<any>): any;
  test(stringType: string): boolean;
};
