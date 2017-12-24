module.exports = () => {
  var result = "";
  var sumList = Array(50).fill(0);
  var rest = 0;

  // var LineByLineReader = require('line-by-line');
  // var lr = new LineByLineReader('./public/files/p13');

  // lr.on('error', (err) => {
  //     // 'err' contains error object
  // });

  // lr.on('line', (line) => {
  //     // 'line' contains the current line without the trailing newline character.
  //     for (let i = 49; i >= 0; i--) {
  //         const calc = sumList[i] + parseInt(line[i]) + rest;
  //         if (i > 0) {
  //             sumList[i] = calc % 10;
  //             rest = parseInt(calc / 10);
  //         } else {
  //             sumList[i] = calc;
  //         }
  //     }
  // });

  // lr.on('end', () => {
  //     // All lines are read, file is closed now.
  //     for (let i = 0; i < 10; i++) {
  //         result += sumList[i].toString();
  //     }
  //     time = present() - time;
  //     if (time >= 1000) {
  //         time = math.round(time / 1000, 3) + ' s';
  //     } else {
  //         time = math.round(time, 3) + ' ms';
  //     }
  //     console.log(`Result (in ${time}) : ${result.substring(0, 10)}`);
  // });

  require("fs")
    .readFileSync("./public/files/p13", "UTF-8")
    .toString()
    .split("\n")
    .forEach(line => {
      line = line.substring(0, 50);
      for (let i = 49; i >= 0; i--) {
        const calc = sumList[i] + parseInt(line[i]) + rest;
        if (i > 0) {
          sumList[i] = calc % 10;
          rest = parseInt(calc / 10);
        } else {
          sumList[i] = calc;
        }
      }
    });
  for (let i = 0; i < 10; i++) {
    result += sumList[i].toString();
  }
  return result.substring(0, 10);
};
