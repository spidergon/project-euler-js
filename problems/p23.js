module.exports = ({ isAbundant }) => {
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
  const limit = 28123
  let sum = 0
  let v = 1
  let found = false
  while (v < limit) {
    for (let i = 12; i < limit && i < v - 12; i++) {
      for (let j = 12; j < limit && j <= v - i; j++) {
        if (v === i + j && isAbundant(i) && isAbundant(j)) {
          found = true
          console.log('NOK', v, i, j, sum)
          break
        }
      }
      if (found) break
    }
    if (!found) {
      sum += v
      console.log('OK', v, sum)
    }
    found = false
    v++
  }
  return sum
}
