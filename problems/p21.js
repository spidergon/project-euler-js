module.exports = ({ divisors }) => {
  const propDivSum = n => divisors(n, true).reduce((a, v) => a + v, 0)
  let sum = 0
  for (let i = 0; i < 10000; i++) {
    const d = propDivSum(i)
    if (d === i || propDivSum(d) !== i) continue
    sum += i
  }
  return sum
}
