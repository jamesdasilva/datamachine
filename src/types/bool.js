function generate(type){
  if(this.regExp.test(type)){
    var bit = Math.floor(Math.random() * 2);
    if(bit === 1) return true;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^bool$/
};
