module.exports = math => {
  var result = 1;
  for (let i = 2; i < 21; i++) {
    if (math.isPrime(i)) {
      let iPow = 1;
      while (math.pow(i, iPow) <= 20) {
        iPow++;
      }
      result *= math.pow(i, --iPow);
    }
  }
  return result;
};
