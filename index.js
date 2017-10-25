const cheerio = require('cheerio')
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('examples/pointlight.html'));

const constructor = $('h2:contains("Constructor")')
const params = constructor.nextAll('div').html()

// console.log(params)

// for (const match of params.match(/$(\s+)?\[page:(\w+) (\w+)\][\s\S]+?(?=$[\s\S]+\[page)/ig)) {
//   console.log(match)
// }

for (const match of params.match(/$\s+?\[page:(\w+) (\w+)\][\s\S]+?((?=$[\s]+\[page)|(?=$\s+Creates))/igm)) {
  const [_,type,name] = match.match(/^\s+\[page:(\S+) (.+)\]/)
  const optional = /(optional)/.test(match)
  console.log({name, type, optional})
}

// [page:Integer color]
