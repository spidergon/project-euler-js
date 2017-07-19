'use strict';
document.getElementById('myForm').onsubmit = function(e) {
	e.preventDefault();
	var entry = parseInt(document.getElementById("entry").value);
	if(Number.isInteger(entry)) {
		var fn = window["p"+entry];
		if(typeof fn === 'function') {
			var time = performance.now();
			var result = fn();
			showResult(result, entry, performance.now() - time);
		} else {
			showError("Problem not accessible");
		}
	} else {
		showError("You must enter a number");
	}
};

function showResult(result, problemNum, time) {
	console.log('p'+problemNum+':'+time);
	if(time >= 1000) {
		time = math.round(time/1000, 3) + ' s';
	} else {
		time = math.round(time, 3) + ' ms';
	}
	document.getElementById("result").innerHTML = '<p>Result (in '+time+') : '+result+'</p><a href="https://projecteuler.net/problem='+problemNum+'" target="_blank">See on projecteuler.net</a>';
}

function showError(errorMsg) {
	document.getElementById("result").innerHTML = "<p>"+errorMsg+"</p>";
}
