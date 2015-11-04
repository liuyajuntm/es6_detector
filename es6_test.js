var load = function(){
	var arr = es6Detector(ES6_LIST);
	var index = 0;
	for(index; index < arr.length; index++){
		show(String(arr[index].name) + " : " + String(arr[index].support) + "<br>");	
	}
	var obj = {};Reflect.has(obj,'name');
}

var show = function(str){
	var billboard = document.getElementById("billboard");
	billboard.innerHTML += str;
}