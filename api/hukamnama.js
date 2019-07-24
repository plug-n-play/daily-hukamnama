const fetch = require('node-fetch')

module.exports = async (req, res) => {
  let response = await fetch(`https://api.gurbaninow.com/v2/hukamnama/today`);
  let data = await response.json()
  return res.send(data);
}