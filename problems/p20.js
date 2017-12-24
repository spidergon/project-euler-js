module.exports = math => {
  const fact = math.bigFactorial(100).toString();
  var sum = 0;
  for (let i = 0; i < fact.length; i++) {
    sum += parseInt(fact[i]);
  }
  return sum;
};
