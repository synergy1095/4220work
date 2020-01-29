const
    request = require('request'),
    cheerio = require('cheerio')


request('http://albertcervantes.com/hello.html', (error, response, body) => {

    const $ = cheerio.load(body);

    // Number of paragraphs
    const numOfParagraphs = $('p').length
    console.log(`Number of Paragraphs: ${numOfParagraphs}`)

    // How many images
    const numOfImages = $('img').length

    console.log(`Number of Images: ${numOfImages}`)

    // What are the URLs of all images?
    let imgUrls = []
    $('img').map((index, img) => {
        // Convert image to a cheerio (jQuery) object
        const $img = $(img);
        // Get the value of the src attribute
        imgUrls.push( $img.attr('src') )
        
    })
    console.log(imgUrls)

    // What is the average length of all paragraphs?
    $('p').map((index, paragrph) => {
        const length = $(paragrph).text().length
        console.log(`Paragraph ${index}: ${length}`)
    })

    // What is the average word count of all paragraphs?
    // To-Do...
});