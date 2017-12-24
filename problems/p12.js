module.exports = math => {
  var triangle_number = 1;
  var nbDivisors = 0;
  var count = 2;
  var result = 0;
  while (nbDivisors < 501) {
    nbDivisors = math.nbDivisors(triangle_number);
    result = triangle_number;
    triangle_number += count;
    count += 1;
  }
  return result;
};
