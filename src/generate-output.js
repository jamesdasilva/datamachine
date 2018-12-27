var JsonGenerator = require('./json-generator');

var generateOutput = function(output, data, dataFileName){
	switch(output){
		case 'json':
			console.log("Generating json...");

			var dataFileName = dataFileName.split('.');
			console.log(dataFileName);
			JsonGenerator.setFile(data, dataFileName[0]);
			break;
	}
};

module.exports = generateOutput;
