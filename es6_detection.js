var es6Detector = function(es6list){
	var index = 0;
	var array = new Array();
	var check = function(expression){
		try{
			eval(expression);
		}
		catch(err){
			return false;
		}
		return true;
	}
	for(index; index < es6list.length; index++){
		var support ={
			name : null,
			support : false
		};
		var feature = es6list[index];
		support.name = feature.name;
		support.support = check(feature.func);
		array.push(support);
	}
	return array;
}

