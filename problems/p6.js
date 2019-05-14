module.exports = () => {
  let nb1 = 0
  let nb2 = 0
  for (let i = 1; i < 101; i++) {
    nb1 += i * i
    nb2 += i
  }
  return nb2 * nb2 - nb1
}
