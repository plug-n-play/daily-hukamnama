const fs = require('fs');
const HukamnamaUtil = require('./util/Hukamnama');
let hukamnamaHTMLTemplate = require('./util/hukamnamaTemplate.js');

HukamnamaUtil.getHukamHTML().then( (hukamnamaHTML) => {
  const hukamnamaPage = hukamnamaHTMLTemplate.replace('[HUKUMNAMA]', hukamnamaHTML)
  try {
    fs.writeFileSync('public/index.html', hukamnamaPage, 'utf8')
    console.log('----created index.html and added Hukumnama----')
  } catch(err) {
    console.error(err);
  }
});
