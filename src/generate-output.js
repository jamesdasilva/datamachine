var JsonGenerator = require('./json-generator');

var generateOutput = function(output, data, fileConfig){
	switch(output){
		case 'json':
			console.log("Generating json...");
			JsonGenerator.setFile(data);
			break;
	}
};

module.exports = generateOutput;
