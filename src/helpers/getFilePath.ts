export default function(moldFileName){
  const cwd: string = process.cwd();
  const barType: string = cwd.match(/\\/)[0] as string;
  if(barType == '\\') {
    const moldFileNameWithBackslash = moldFileName.replace(/\//, '\\');
    return `${cwd}\\${moldFileNameWithBackslash}`;
  } else {
    const moldFileNameWithBar = moldFileName.replace(/\\/, '//');
    return `${cwd}/${moldFileNameWithBar}`;
  }
};
