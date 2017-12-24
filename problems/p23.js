module.exports = math => {
  // var result = 0;
  // var i = 1;
  // while (true) {
  //   let k = 1;
  //   let val = i;
  //   while (val < 28123) {
  //     if(!math.isAbundant(i) || !math.isAbundant(k)) {
  //       result += val;
  //     }
  //     val += k;
  //     k++;
  //   }
  //   i++;
  // }
  // return result;
  const limit = 28123;
  var sum = 0;
  var v = 1;
  var found = false;
  while (v < limit) {
    for (let i = 12; i < limit && i < v - 12; i++) {
      for (let j = 12; j < limit && j <= v - i; j++) {
        if (v == i + j && math.isAbundant(i) && math.isAbundant(j)) {
          found = true;
          console.log('NOK', v, i, j, sum);
          break;
        }
      }
      if (found) break;
    }
    if (!found) {
      sum += v;
      console.log('OK', v, sum);
    }
    found = false;
    v++;
  }
  return sum;
};
