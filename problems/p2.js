module.exports = () => {
  let a = 5
  let b = 8
  let sum = 2
  while (b < 4000000) {
    if (b % 2 === 0) sum += b
    const aa = a
    a = b
    b += aa
  }
  return sum
}
