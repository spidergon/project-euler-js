exports.run = (math) => {
  const primes = math.getPrimes(10001);
	return primes[10000];
};