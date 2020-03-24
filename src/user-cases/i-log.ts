export default interface ILog {
  putInfo(text: string);
  putSuccess(text: string);
  putWarning(text: string);
  putErro(text: string);
}