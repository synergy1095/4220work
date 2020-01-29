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

            console.log('-- REMAINING CARDS --')
            console.log(result.remaining)
        })
        .catch(err => console.log(err))
}

const discardPrompt = (result) => {
    const displayCards = result.map(card => {
        return { name: `${card.value} of ${card.suit}`, value: card.code }
    })

    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select cards to throw away',
        name: 'cards',
        choices: displayCards,
        validate: cards => {
            if (cards.length > 4)
                return 'You may only discard up to 4 cards'
            else
                return true
        }
    }])
}

const findAndRemove = (current, throwaway) => {
    return current.filter(card => !throwaway.includes(card.code))
}

const print = (cards, remaining) => {
    console.log(`\n --- CARDS ---`)
    cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`)
    })
    console.log(`\n --- REMAINING CARDS ---`)
    console.log(remaining)
}

const play = (n = 5) => {
    let original, deckId

    cards.deck(true)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            deckId = result.deck_id
            original = result.cards
            return discardPrompt(original)
        })
        .then(throwaway => {
            original = findAndRemove(original, throwaway.cards)
            return cards.draw(deckId, throwaway.cards.length)
        })
        .then(newCards => {
            const newHand = original.concat(newCards.cards)
            print(newHand, newCards.remaining)
        })
        .catch(err => { console.log(err) })
}

module.exports = {
    draw,
    play
}