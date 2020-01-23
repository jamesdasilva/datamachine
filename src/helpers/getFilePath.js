module.exports = function(moldFileName){
    console.log(process.cwd().match(/\\/));
    const cwd = process.cwd();
    const barType = cwd.match(/\\/);
    if(barType == '\\') {
        const moldFileNameWithBackslash = moldFileName.replace(/\//, '\\');
        return `${cwd}\\${moldFileNameWithBackslash}`;
    } else {
        const moldFileNameWithBar = moldFileName.replace(/\\/, '//');
        return `${cwd}/${moldFileNameWithBar}`;
    }
};
