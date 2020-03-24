export default function(moldFileName){
  const cwd: string = process.cwd();
  const barra = cwd.match(/\//) || cwd.match(/\\/);
  const barType: string = barra[0] as string;
  if(barType == '\\') {
    const moldFileNameWithBackslash = moldFileName.replace(/\//, '\\');
    return `${cwd}\\${moldFileNameWithBackslash}`;
  } else {
    const moldFileNameWithBar = moldFileName.replace(/\\/, '//');
    return `${cwd}/${moldFileNameWithBar}`;
  }
};
