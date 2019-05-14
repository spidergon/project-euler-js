module.exports = ({ bigFactorial }) => {
  const fact = bigFactorial(100).toString()
  let sum = 0
  for (let i = 0; i < fact.length; i++) {
    sum += parseInt(fact[i])
  }
  return sum
}
