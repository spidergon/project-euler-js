exports.run = () => {
  var i = 3,
    sum = 0;
  while (i < 1000) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
    i += 1;
  }
  return sum;
};
