const admin = require('firebase-admin');

var sendData = function (data, fileAccountConfig){
    var serviceAccount = require(`../${fileAccountConfig}`);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    
    var db = admin.firestore();
    
    var docRef = db.collection('dados');
    data.forEach(item => {
        delete item._id;
        docRef.add(item);
    });
    return true;
};

var setData = function (data){
    data.forEach(item => {
        delete item._id;
        docRef.add(item);
    });
    return true;
};

module.exports = {
    setData: setData,
    sendData: sendData
}