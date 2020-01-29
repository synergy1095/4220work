const
    cards = require('deckofcards'),
    express = require('express'),
    router = express.Router()

module.exports = () => {

    // localhost:8080/api/draw/?number=n&shuffle=true
    router.get('/api/draw', (req, res) => {
        const { number = 1, shuffle = 1 } = req.query

        cards.deck(parseInt(shuffle))
            .then(deck => cards.draw(deck.deck_id, parseInt(number)))
            .then(result => {
                res.json(result)
            })
    })

    router.get('/api/play', (req, res) => {
        cards.deck(true)
            .then(deck => cards.draw(deck.deck_id, 5))
            .then(result => {
                res.json(result)
            })
    })

    router.post('/api/throwaway', (req, res) => {
        const { deck, selectedCards } = req.body

        const remainingCards = deck.cards.filter(card => !selectedCards.includes(card.code))

        cards.draw(deck.deck_id, selectedCards.length)
            .then(result => {
                result.cards = remainingCards.concat(result.cards)
                res.json(result)
            })
    })

    return router
}

