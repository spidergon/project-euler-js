module.exports = math => {
  const propDivSum = n => math.divisors(n, true).reduce((a, v) => a + v, 0);
  var sum = 0;
  for (let i = 0; i < 10000; i++) {
    let d = propDivSum(i);
    if (d == i || propDivSum(d) != i) {
      continue;
    }
    sum += i;
  }
  return sum;
};
