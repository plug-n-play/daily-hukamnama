const fs = require('fs');
const fetch = require('node-fetch')

let hukamnamaHTML = require('./util/hukamnamaTemplate.js');

async function getHukumnama() {
  let response = await fetch(`https://api.gurbaninow.com/v2/hukamnama/today`);
  let hukamnamaJSON = await response.json()
  let hukamnama = `<h3>${hukamnamaJSON.hukamnama[0].line.gurmukhi.unicode}</h3>`;
  hukamnamaJSON.hukamnama.shift();
  hukamnamaJSON.hukamnama.map( i => hukamnama += `<div>${i.line.gurmukhi.unicode}</div>` )

  return hukamnama;
}

getHukumnama().then((hukamnama) => {
  hukamnamaHTML = hukamnamaHTML.replace('[HUKUMNAMA]', hukamnama)
  try {
    fs.writeFileSync('public/index.html', hukamnamaHTML, 'utf8')
    console.log('----created index.html and added Hukumnama----')
  } catch(err) {
    console.error(err);
  }
});
