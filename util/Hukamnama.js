const fetch = require('node-fetch')

module.exports.getHukamHTML = async () => {
  let response = await fetch(`https://dev-api.gurbaninow.com/v2/hukamnama/today`);
  let hukamnamaJSON = await response.json()
  let hukamnama = `<h3>${hukamnamaJSON.hukamnama[0].line.gurmukhi.unicode}</h3>`;
  hukamnamaJSON.hukamnama.shift();
  hukamnamaJSON.hukamnama.map( i => hukamnama += `<div>${i.line.gurmukhi.unicode}</div>` )

  return hukamnama;
}