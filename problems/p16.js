module.exports = ({ bigInt }) => {
  const resultStr = bigInt(2)
    .pow(1000)
    .toString()
  let result = 0
  for (let i = 0, c = resultStr.length; i < c; i++) {
    result += parseInt(resultStr[i])
  }
  return result
}
