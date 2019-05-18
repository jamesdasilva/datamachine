var JsonGenerator = require('./json-generator');

var generateOutput = function(output, data, dataFileName){
	switch(output){
		case 'json':
			var dataFileName = dataFileName.split('.');
			JsonGenerator.setFile(data, dataFileName[0]);
			break;
	}
};

module.exports = generateOutput;
