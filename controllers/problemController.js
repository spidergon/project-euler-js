exports.problemPage = (req, res) => {

  const id = req.params.id;
  if (Number.isInteger(parseInt(id))) {
    console.log('OK');
  } else {
    console.log('You must enter a number');
  }

  res.render('problem', {
    id: id,
    title: `Problem #${id}`
  });
}