const
    cards = require('deckofcards'),
    inquirer = require('inquirer')

const draw = (shuffle, n = 1) => {
    cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            console.log('-- CARDS --')
            result.cards.forEach(card => {
                console.log(`${card.value} of ${card.suit}`)
            })

            console.log('-- REMAING CARDS --')
            console.log(result.remaining)
        })
        .catch(err => console.log(err))
}

// HINT for #3 in Lab
const discardPrompt = (result) => {
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select cards to throw away',
        name: 'cards',
        choices: [],        // implement choices array - look at the inquirer documentation,
        validate: () => {}  // implement
    }])
}

// HINT for #4 in Lab
const findAndRemove = (current, throwaway) => {

}

// HINT for #6 in Lab
const print = cards => {

}

const play = () => {

}

module.exports = {
    draw
}
