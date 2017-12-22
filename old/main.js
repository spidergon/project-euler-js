'use strict';
document.getElementById('myForm').onsubmit = function (e) {
	e.preventDefault();
	var problemNum = parseInt(document.getElementById('entry').value);
	if (Number.isInteger(problemNum)) {
		var fn = window['p' + problemNum];
		if (typeof fn === 'function') {
			var time = performance.now();
			var result = fn();
			time = performance.now() - time;
			console.log('p' + problemNum + ':' + time);
			if (time >= 1000) {
				time = math.round(time / 1000, 3) + ' s';
			} else {
				time = math.round(time, 3) + ' ms';
			}
			document.getElementById('result').innerHTML = '<p>Result (in ' + time + ') : ' + result + '</p><a href="https://projecteuler.net/problem=' + problemNum + '" target="_blank">See on projecteuler.net</a>';
		} else {
			showError('Problem not accessible');
		}
	} else {
		showError('You must enter a number');
	}
};

function showError(errorMsg) {
	document.getElementById('result').innerHTML = '<p>' + errorMsg + '</p>';
}