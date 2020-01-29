function counterFactory(){
    let count = 0;
    return () => ++count;
}

module.exports = {
    generate: counterFactory(),
    regExp: /^idAutoIncrement$/
};