exports.problemPage = (req, res) => {

  const id = req.params.id;
  if (!Number.isInteger(parseInt(id))) {
    throw Error('You must enter a number');
  }

  const present = require('present');
  const math = require('../mathPlus').lib;
  const p = require(`../problems/p${id}`);
  var time = present();
  const result = p.run(math);
  time = present() - time;
  if (time >= 1000) {
    time = math.round(time / 1000, 3) + ' s';
  } else {
    time = math.round(time, 3) + ' ms';
  }

  res.render('problem', {
    id: id,
    title: `Problem #${id}`,
    time: time,
    result: result,
    total: 16
  });
}