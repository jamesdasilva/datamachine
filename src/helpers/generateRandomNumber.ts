export default function (inferiorLimit, upperLimit){
	if(upperLimit > inferiorLimit){
		return Math.floor(Math.random() * (upperLimit - inferiorLimit)) + inferiorLimit;
	}else{
		return false;
	}
}; 
