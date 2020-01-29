const
    cards = require('deckofcards'),
    inquirer = require('inquirer')

const draw = (shuffle, n = 1, isPlay = false) => {
    cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            print(result)
            
            if(isPlay){
                play(result)
            }
        })
        .catch(err => console.log(err))
}

// HINT for #3 in Lab
const discardPrompt = (result) => {
    let choiceArr = []
    result.cards.forEach(card =>{
        choiceArr.push({'name' : card.value + ' of ' + card.suit})
    })

    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select up to 4 cards to throw away',
        name: 'cards',
        choices: choiceArr,        // implement choices array - look at the inquirer documentation,
        validate: (input) => {
            // setTimeout(() => {
            //     console.log(input.length)
            // }, 0);
            if(input.length > 4)
                return false
            else
                return true
        }  // implement
    }])
}

// HINT for #4 in Lab
const findAndRemove = (current, throwaway) => {
    let cur = current.slice(0)
    for (let i = 0; i < cur.length; i++){
        if (throwaway.includes(cur[i].value + ' of ' + cur[i].suit)){
            cur.splice(i, 1)
            i--
        }
    }
    return cur
}

// HINT for #6 in Lab
const print = result => {
    console.log('-- CARDS --')
    result.cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`)
    })

    console.log('-- REMAING CARDS --')
    console.log(result.remaining)
}

const play = (result) => {
    discardPrompt(result).then((answers) => {
        // console.log(answers)
        let curHand = findAndRemove(result.cards, answers.cards)
        // console.log(curHand)
        cards.draw(result.deck_id, 5-curHand.length)
        .then(result => {
            curHand.forEach(card => {
                result.cards.push(card)
            })

            // console.log(result)
            print(result)
        })
    })
}

module.exports = {
    draw
}
