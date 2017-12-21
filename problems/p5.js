exports.run = (math) => {
  var result = 1;
	for(let i=2; i<21; i++) {
		if(math.isPrime(i)) {
			let i_pow = 1;
			while(math.pow(i, i_pow) <= 20) {
				i_pow++;
			}
			i_pow--;
			result *= math.pow(i, i_pow);
		}
	}
	return result;
};