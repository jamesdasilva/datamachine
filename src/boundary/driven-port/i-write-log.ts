export default interface IWriteLog {
  putInfo(text: string);
  putSuccess(text: string);
  putWarning(text: string);
  putErro(text: string);
}