module.exports = function(req, res) {
  console.log('running date.js')
  res.status(200).send(new Date().toString());
}
