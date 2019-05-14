module.exports = ({ getNumbersArray, max }) => {
  let result = 0
  const tab = getNumbersArray('p11')
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      // UP
      if (i - 1 >= 0 && i - 2 >= 0 && i - 3 >= 0) {
        result = max(
          result,
          tab[i][j] * tab[i - 1][j] * tab[i - 2][j] * tab[i - 3][j]
        )
      }
      // DOWN
      if (i + 1 < 20 && i + 2 < 20 && i + 3 < 20) {
        result = max(
          result,
          tab[i][j] * tab[i + 1][j] * tab[i + 2][j] * tab[i + 3][j]
        )
      }
      // LEFT
      if (j - 1 >= 0 && j - 2 >= 0 && j - 3 >= 0) {
        result = max(
          result,
          tab[i][j] * tab[i][j - 1] * tab[i][j - 2] * tab[i][j - 3]
        )
      }
      // RIGHT
      if (j + 1 < 20 && j + 2 < 20 && j + 3 < 20) {
        result = max(
          result,
          tab[i][j] * tab[i][j + 1] * tab[i][j + 2] * tab[i][j + 3]
        )
      }
      // DIAG UP LEFT
      if (
        i - 1 >= 0 &&
        j - 1 >= 0 &&
        i - 2 >= 0 &&
        j - 2 >= 0 &&
        i - 3 >= 0 &&
        j - 3 >= 0
      ) {
        result = max(
          result,
          tab[i][j] * tab[i - 1][j - 1] * tab[i - 2][j - 2] * tab[i - 3][j - 3]
        )
      }
      // DIAG UP RIGHT
      if (
        i - 1 >= 0 &&
        j + 1 < 20 &&
        i - 2 >= 0 &&
        j + 2 < 20 &&
        i - 3 >= 0 &&
        j + 3 < 20
      ) {
        result = max(
          result,
          tab[i][j] * tab[i - 1][j + 1] * tab[i - 2][j + 2] * tab[i - 3][j + 3]
        )
      }
      // DIAG DOWN LEFT
      if (
        i + 1 < 20 &&
        j - 1 >= 0 &&
        i + 2 < 20 &&
        j - 2 >= 0 &&
        i + 3 < 20 &&
        j - 3 >= 0
      ) {
        result = max(
          result,
          tab[i][j] * tab[i + 1][j - 1] * tab[i + 2][j - 2] * tab[i + 3][j - 3]
        )
      }
      // DIAG DOWN RIGHT
      if (
        i + 1 < 20 &&
        j + 1 < 2 &&
        i + 2 < 20 &&
        j + 2 < 2 &&
        i + 3 < 20 &&
        j + 3 < 20
      ) {
        result = max(
          result,
          tab[i][j] * tab[i + 1][j - 1] * tab[i + 2][j - 2] * tab[i + 3][j - 3]
        )
      }
    }
  }
  return result
}
