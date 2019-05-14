module.exports = ({ nbDivisors }) => {
  let triangleNumber = 1
  let div = 0
  let count = 2
  let result = 0
  while (div < 501) {
    div = nbDivisors(triangleNumber)
    result = triangleNumber
    triangleNumber += count
    count += 1
  }
  return result
}
