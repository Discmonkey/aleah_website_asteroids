(function(numTimes) {
	console.log(numTimes++);
	this(numTimes);
})(1);