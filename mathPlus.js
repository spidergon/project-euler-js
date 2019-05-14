const mathjs = require('mathjs')

const mathPlus = {
  bigInt: require('big-integer'),
  primeFactors (n) {
    const factors = []
    let p = 2
    while (n > 1) {
      if (n % p === 0) {
        factors.push(p)
        n /= p
      }
      p += 1
    }
    return factors
  },
  getPrimes (limit) {
    const arr = [2, 3]
    let counter = 4
    while (arr.length < limit) {
      if (counter % 2 !== 0 && counter % 3 !== 0) {
        let temp = 4
        while (temp * temp <= counter) {
          if (counter % temp === 0) {
            break
          }
          temp++
        }
        if (temp * temp > counter) {
          arr.push(counter)
        }
      }
      counter++
    }
    return arr
  },
  getPrimesSum (limit) {
    let sum = 5 // 2 + 3
    let counter = 4 // next prime
    while (counter < limit) {
      if (counter % 2 !== 0 && counter % 3 !== 0) {
        let temp = 4
        while (temp * temp <= counter) {
          if (counter % temp === 0) {
            break
          }
          temp++
        }
        if (temp * temp > counter) {
          sum += counter
        }
      }
      counter++
    }
    return sum
  },
  isPalindrome (s) {
    const len = s.length
    if (len <= 1) {
      return true
    }
    if (s[0] !== s[len - 1]) {
      return false
    }
    return mathPlus.isPalindrome(s.substring(1, len - 1))
  },
  pythagoreanTriplet (limit) {
    // Returns the pythagorean triplet (a, b, c) where a + b + c = limit
    let a = 1
    let b = 2
    let c = 0
    while (true) {
      c = limit - a - b
      if (c < 3) {
        return []
      }
      if (a * a + b * b === c * c) {
        break
      }
      if (a + 1 < b) {
        a += 1
      } else {
        a = 1
        b += 1
      }
    }
    return [a, b, c]
  },
  nbDivisors (n) {
    let nb = 0
    let limit = n
    let count = 1
    while (count < limit) {
      if (n % count === 0) {
        limit = n / count
        nb += 1
      }
      count += 1
    }
    return nb * 2
  },
  divisors (n, isProper = false) {
    const divisors = []
    for (let d = 1, c = mathjs.sqrt(mathjs.abs(n)); d <= c; d++) {
      if (n % d === 0) {
        divisors.push(d)
        if (d > 1) {
          divisors.push(n / d)
        }
      }
    }
    if (!isProper) {
      divisors.push(n)
    }
    return divisors
  },
  collatzSequenceCount (n) {
    let count = 1
    while (n > 1) {
      if (n % 2 === 0) n /= 2
      else n = 3 * n + 1
      count++
    }
    return count
  },
  bigFactorial (n) {
    if (n === 0) return mathPlus.bigInt(1)
    return mathPlus.bigInt(n).times(mathPlus.bigFactorial(n - 1))
  },
  isAbundant: n => n < mathPlus.divisors(n, true).reduce((a, v) => a + v, 0)
}

const tools = {
  getNumbersArray (file) {
    const numbers = []
    require('fs')
      .readFileSync(`./public/files/${file}`)
      .toString()
      .split('\n')
      .forEach(line => {
        if (line !== '') {
          numbers.push(line.split(' ').map(item => parseInt(item)))
        }
      })
    return numbers
  }
}

module.exports = Object.assign({}, mathjs, mathPlus, tools)
