const cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');

console.log('Before manipulation: ', $.html());

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log('After manipulation: ', $.html());
//