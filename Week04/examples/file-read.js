const
    fs = require('fs'),
    path = require('path')

// fs.readFile(path.resolve('files', 'small.txt'), 'utf8', (err, data) => {
//     if (err)
//         console.log('err', err)

//     console.log(data)
// })

const files = ['large.txt', 'medium.txt', 'small.txt']
const async = () => {
    files.forEach((file) => {
        const fullPath = path.resolve('files', file)
        fs.readFile(fullPath, 'utf8', (err, data) => {
            if (err)
                console.log(err)

            const wordcount = data.split(' ').length
            console.log(file, wordcount)
        })
    })
}
// async()

const sync = () => {
    files.forEach((file) => {
        const
            fullPath = path.resolve('files', file),
            data = fs.readFileSync(fullPath, 'utf8'),
            wordcount = data.split(' ').length

        console.log(file, wordcount)
    })
}
// sync()
















