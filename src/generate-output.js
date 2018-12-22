var JsonGenerator = require('./json-generator');

var generateOutput = function(output, data, fileConfig){
	switch(output){
		case 'json':
			JsonGenerator.setFile(data);
			break;
	}
};

module.exports = generateOutput;
