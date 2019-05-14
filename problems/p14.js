module.exports = ({ collatzSequenceCount }) => {
  let result = 0
  let iSize = 0
  for (let i = 14; i < 1000000; i++) {
    const count = collatzSequenceCount(i)
    if (iSize < count) {
      iSize = count
      result = i
    }
  }
  return result
}
