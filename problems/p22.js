module.exports = () => {
  const alphabeticalValue = str => {
    let value = 0
    for (let i = 0; i < str.length; i++) {
      value += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(str[i]) + 1
    }
    return value
  }
  return require('fs')
    .readFileSync(`./public/files/p22`)
    .toString()
    .replace(/[\n|"]/g, '')
    .split(',')
    .sort()
    .reduce((a, v, i) => a + (i + 1) * alphabeticalValue(v), 0)
}
