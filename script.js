var DOMParser = require('xmldom').DOMParser;
let doc = {};

async function findData() {
  console.log('fetching')
  await fetch('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge')
    .then(res => res.text())
    .then(res => console.log(res))


    // .then(html => {
    //   console.log(typeof html)
    //   let parser = new DOMParser();
    //   doc = parser.parseFromString(html, 'json')
    //   console.log(doc.childNodes)
    //   return doc;
    // }).then( doc =>{
    //   let img = doc.querySelectorAll('.test')
    // })
    // .then(res => console.log(res))
}


function htmlToJson(div, obj) {
  if (!obj) { obj = [] }
  var tag = {}
  tag['tagName'] = div.tagName
  tag['children'] = []
  for (var i = 0; i < div.children.length; i++) {
    tag['children'].push(htmlToJson(div.children[i]))
  }
  for (var i = 0; i < div.attributes.length; i++) {
    var attr = div.attributes[i]
    tag['@' + attr.name] = attr.value
  }
  return tag
}

findData();
