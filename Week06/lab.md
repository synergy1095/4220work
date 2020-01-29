
## Week 06 Lab 03/25 - Due 03/04 6:30PM - KH Lecture Hall 2 (50 pts)

#### Build a new feature called play() in the Cards App example from Lecture. The cards-app CLI will have two commands, draw and play. The draw command use the draw() method that was implemented in class. Do not modify this method.  Add a new command play that uses your implementation of a play() method following the instructions below.

---

**(1) Create a command on the cli.js called play**
  - Run by typing: node cli.js play

**(2) Automatically Shuffle and draw 5 cards**
  - Use the deck() and draw() methods from the deckofcards module already created in the class example
  - ***DO NOT*** modify the draw() method in the app.js - there is no reason to touch that function

**(3) Prompt the user and allow them to throw away up to 4 cards**
  - Use inquirer to create a prompt with a checkbox selection feature

**(4) Remove the cards the user selects from the players current hand**
  - Create a function called `removeCards(currentHand, throwawayCards)`
  - This function returns the remaining cards with the throwaway cards removed

**(5) Draw new cards to replace the thrown away ones**
  - For example if the user selected to remove 3 cards, then replace those with 3 new cards from the **SAME** deck

**(6) Print the new hand and print the number of cards remaining in the deck**

#### Example Output
    --- CARDS ---
    5 of SPADES
    3 of HEARTS
    5 of HEARTS
    QUEEN of HEARTS
    ACE of SPADES

    --- REMAINING CARDS ---
    45

