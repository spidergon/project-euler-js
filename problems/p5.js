module.exports = ({ isPrime, pow }) => {
  let result = 1
  for (let i = 2; i < 21; i++) {
    if (isPrime(i)) {
      let iPow = 1
      while (pow(i, iPow) <= 20) iPow++
      result *= pow(i, --iPow)
    }
  }
  return result
}
