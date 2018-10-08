var JsonGenerator = require('./json-generator');
var GenerateOutput = require('./firestore');

var generateOutput = function(output, data, fileConfig){
    switch(output){
        case 'json':
            JsonGenerator.setFile(data);
            break;
        case 'firestore':
        case 'Cloud Firestore':
            if (fileConfig)
                GenerateOutput.sendData(data, fileConfig);
            break;
    }
};

module.exports = generateOutput;