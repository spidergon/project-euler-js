exports.run = (math) => {
  var triangle_number = 1;
  var nb_divisors = 0;
  var count = 2;
  var result = 0;
  while (nb_divisors < 501) {
    nb_divisors = math.nbDivisors(triangle_number);
    result = triangle_number;
    triangle_number += count;
    count += 1;
  }
  return result;
};