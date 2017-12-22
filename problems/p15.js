exports.run = (math) => {
  const r = 20;
  const val1 = math.factorial(2 * r);
  const val2 = math.factorial(r) * math.factorial(r);
  return parseInt(val1 / val2);
};