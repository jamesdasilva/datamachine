module.exports = function(type){
	var regExpParams = /:([\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]*;)*[\w À-ú,\.\-\?&$@#!\+:\(\)\\°\*º]+$/g
	var stringParams = type.match(regExpParams) + '';
	if (stringParams != 'null') {
		stringParams = stringParams.slice(1);
		return stringParams.split(';');
	}
	return false;
}