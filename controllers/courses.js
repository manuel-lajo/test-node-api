const data = require('../data');

exports.getCourses = (req, res) => {
  const type = req.query.type;
  const date = req.query.date;
  let response = data;

  if (type && type !== 'All') {
    response = response.filter(course => course.typeId.toString() === type);
  }

  if (date) {
    response = response.filter(course => course.releaseDate === date);
  }

  res.json(response);
};
