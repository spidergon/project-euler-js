module.exports = ({ isPalindrome }) => {
  let result = 10000
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      const p = i * j
      if (p > result && isPalindrome(p.toString())) result = p
    }
  }
  return result
}
