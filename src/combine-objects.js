module.exports = function (obj1, obj2, childName){
    
    if(childName){
        let objWithChild = {};
        objWithChild[childName] = obj2;
        return Object.assign({}, obj1, objWithChild);
    }
    
    return Object.assign({}, obj1, obj2);
};