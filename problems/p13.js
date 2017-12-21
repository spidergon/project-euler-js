exports.run = (math) => {
  var result = ''
  //var sum_list = [0 for i in range(50)]
  var rest = 0
  //const fs = require('fs');
  //const myFile = fs.readFileSync('./public/files/p13');
  //console.log(myFile);

  var LineByLineReader = require('line-by-line');
  var lr = new LineByLineReader('./public/files/p13');

  lr.on('error', function (err) {
    // 'err' contains error object
  });

  lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.
    console.log(line);
  });

  lr.on('end', function () {
    // All lines are read, file is closed now.
  });
  /*with open('problems/files/p13.txt') as f:
      for line in f:
          if line[-1] == '\n':
              line = line[:-1]
          for i in reversed(range(50)):
              calc = sum_list[i] + int(line[i]) + rest
              if i > 0:
                  sum_list[i] = calc % 10
                  rest = int(calc / 10)
              else:
                  sum_list[i] = calc

  for i in range(10):
      result += str(sum_list[i])
  return result[:10]*/
};