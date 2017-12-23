exports.run = () => {
  var a = 5,
    b = 8,
    sum = 2;
  while (b < 4000000) {
    if (b % 2 == 0) {
      sum += b;
    }
    let aa = a;
    a = b;
    b += aa;
  }
  return sum;
};
