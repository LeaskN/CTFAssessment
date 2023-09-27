const cheerio = require("cheerio");
var DOMParser = require('xmldom').DOMParser;

function htmlToJSON(html) {
  const $ = cheerio.load(html);

  function processElement(element) {
    const result = {};
    result.class = element.attr('class');
    result.value = element.attr('value');
    result.data = {};

    const dataAttributes = element.get(0).attribs;
    for (const attr in dataAttributes) {
      if (attr.startsWith('data-')) {
        const key = attr.replace('data-', '');
        result.data[key] = dataAttributes[attr];
      }
    }

    const children = element.children();
    if (children.length > 0) {
      result.children = [];
      children.each(function () {
        result.children.push(processElement($(this)));
      });
    }

    return result;
  }

  const topLevelElement = $('section.ramp');
  if (topLevelElement.length === 0) {
    return null;
  }

  return processElement(topLevelElement);
}

function findHiddenURL(node, result) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const tagName = node.getAttribute('data-tag');
    if (tagName) {
      // Process the tag name, replacing '*' with a wildcard regex
      const regexPattern = tagName.replace(/\*/g, '.*');

      // Create a regex to match the tag pattern
      const regex = new RegExp(`^${regexPattern}$`);

      // Check if the current node matches the tag pattern
      if (regex.test(node.tagName)) {
        // If it matches, traverse its children
        for (let i = 0; i < node.childNodes.length; i++) {
          findHiddenURL(node.childNodes[i], result);
        }
      }
    }
  } else if (node.nodeType === Node.TEXT_NODE) {
    // If it's a text node, append its text content to the result
    result.push(node.textContent);
  }
}

function extractHiddenURL(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const result = [];

  findHiddenURL(doc.documentElement, result);

  // Join the result to get the hidden URL
  const hiddenURL = result.join('').replace(/\*/g, '');

  return hiddenURL;
}

async function findData() {
  console.log('fetching')
  await fetch('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge')
    .then(res => res.text())
    .then(html => htmlToJSON(html))
    .then(json => JSON.stringify(json, null, 2))
    // .then(res => JSON.parse(res))
    // .then(res => console.log(res))
    .then(res => console.log(extractHiddenURL(res)))
}

findData()

