exports.run = (math) => {
  var primes = math.getPrimes(10001);
	return primes[10000];
};