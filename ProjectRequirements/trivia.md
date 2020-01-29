## Real-Time Trivia

The real-time trivia application should have the functionality outlined below. Some good examples of real-time trivia apps are Cash Show and HQ.

### Question Bank

- The question bank is the database of questions stored in your trivia application.
    - You are not required to use a database.  It is okay for the question bank to reside in memory on your server.
- Your application should be pre-populated with a minimum of 5 questions so that, upon an application restart, there are questions in your question bank.
- Allow an administrator to add and remove questions from the question bank.
- You can assume an administrator is anyone who visits the admin view of your application.
- Each trivia question should contain 3 answers; 1 correct, and two incorrect.

### Game
- The User should be presented with a view that shows a new question at a regular interval.  Consider every 30 seconds.
- The User should be given a shorter interval to answer the question.  Consider 15 seconds.
- The remaining time should be used to report the number of Users who selected each of the answers for the given question along with the correct answer.
- NOTE:  This is not a running total. Your application is a real-time trivia application, so other Users will have been asked the same question at the same time. This, the totals reported are for the current question being asked.

### Extra Credit- Synchronization (10 pts)
- Your game should be synchronized for all players.
    - Assume each question is asked at the start of ever minute. So, if a User enters the game 25 seconds after the start of the minute, they will not be able to participate in answering until the next question begins.
- To receive credit - you must accomplish this with WebSockets.
