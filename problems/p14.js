module.exports = math => {
  var result = 0;
  var iSize = 0;
  for (let i = 14; i < 1000000; i++) {
    const count = math.collatzSequenceCount(i);
    if (iSize < count) {
      iSize = count;
      result = i;
    }
  }
  return result;
};
