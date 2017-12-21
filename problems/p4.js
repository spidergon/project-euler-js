exports.run = (math) => {
  var result = 10000;
	for(let i=100; i<1000; i++) {
		for(let j=100; j<1000; j++) {
			let p = i*j;
			if(p > result && math.isPalindrome(p.toString())) {
				result = p;
			}
		}
	}
	return result;
};