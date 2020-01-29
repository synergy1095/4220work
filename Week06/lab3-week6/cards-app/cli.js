const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'draw',
        desc: 'draws a card from the deck',
        builder: (yargs) => {
            return yargs.option('s', {
                alias: 'shuffle',
                describe: 'shuffle the deck before drawing'
            }).option('n', {
                alias: 'number',
                describe: 'number of cards to draw'
            })
        },
        handler: (argv) => { app.draw(argv.shuffle, argv.number) }
    })
    .command({
        command: 'play',
        desc: 'shuffle and draw 5 cards',
        handler: (argv) => { 
            app.draw('shuffle', 5, true)
        }
    })
    .help('help')
    .argv