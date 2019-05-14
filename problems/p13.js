module.exports = () => {
  let result = ''
  let rest = 0
  const sumList = Array(50).fill(0)
  require('fs')
    .readFileSync('./public/files/p13')
    .toString()
    .split('\n')
    .forEach(line => {
      if (line !== '') {
        line = line.substring(0, 50)
        for (let i = 49; i >= 0; i--) {
          const calc = sumList[i] + parseInt(line[i]) + rest
          if (i > 0) {
            sumList[i] = calc % 10
            rest = parseInt(calc / 10)
          } else {
            sumList[i] = calc
          }
        }
      }
    })
  for (let i = 0; i < 10; i++) {
    result += sumList[i].toString()
  }
  return result.substring(0, 10)
}
