module.exports = math => {
  const resultStr = math
    .bigInt(2)
    .pow(1000)
    .toString();
  var result = 0;
  for (let i = 0, c = resultStr.length; i < c; i++) {
    result += parseInt(resultStr[i]);
  }
  return result;
};
