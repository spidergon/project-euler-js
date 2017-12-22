const mathjs = require('mathjs');
const special = {
  bigInt: require('big-integer'),
  primeFactors: (n) => {
    var factors = [], p = 2;
    while (n > 1) {
      if (n % p == 0) {
        factors.push(p);
        n /= p;
      }
      p += 1;
    }
    return factors;
  },
  getPrimes: (limit) => {
    var arr = [2, 3];
    var counter = 4;
    while (arr.length < limit) {
      if (counter % 2 != 0 && counter % 3 != 0) {
        var temp = 4;
        while (temp * temp <= counter) {
          if (counter % temp == 0) { break; }
          temp++;
        }
        if (temp * temp > counter) {
          arr.push(counter);
        }
      }
      counter++;
    }
    return arr;
  },
  getPrimesSum: (limit) => {
    var sum = 5; // 2 + 3
    var counter = 4; // next prime
    while (counter < limit) {
      if (counter % 2 != 0 && counter % 3 != 0) {
        var temp = 4;
        while (temp * temp <= counter) {
          if (counter % temp == 0) { break; }
          temp++;
        }
        if (temp * temp > counter) { sum += counter; }
      }
      counter++;
    }
    return sum;
  },
  isPalindrome: (s) => {
    var len = s.length;
    if (len <= 1) { return true; }
    if (s[0] != s[len - 1]) { return false; }
    return special.isPalindrome(s.substring(1, len - 1));
  },
  pythagoreanTriplet: (limit) => { // Returns the pythagorean triplet (a, b, c) where a + b + c = limit
    var a = 1, b = 2, c = 0;
    while (true) {
      c = limit - a - b;
      if (c < 3) { return []; }
      if (a * a + b * b == c * c) { break; }
      if (a + 1 < b) {
        a += 1;
      } else {
        a = 1;
        b += 1;
      }
    }
    return [a, b, c];
  },
  nbDivisors: (n) => {
    var nb = 0;
    var limit = n;
    var count = 1;
    while (count < limit) {
      if (n % count == 0) {
        limit = n / count;
        nb += 1;
      }
      count += 1;
    }
    return nb * 2;
  },
  collatzSequenceCount: (n) => {
    var count = 1;
    while (n > 1) {
      if (n % 2 == 0)
        n /= 2;
      else
        n = 3 * n + 1;
      count++;
    }
    return count;
  },
  factorial: (n) => {
    if (n == 0) return 1;
    return n * special.factorial(n - 1);
  }
};
exports.lib = Object.assign({}, special, mathjs);