
## API App (Continuation of Midterm App)

Your application should allow Users to perform a search using your selected API from the midterm.  Your App must follow the guidelines below.

### Guidelines
Your server should use the custom module built for the midterm.  Create a frontend (UI) that must allow Users to do the following:

- Indicate to the User the type of search that is available, so the User knows what to type into the input field.
    - For example if you have a Music API - indicate the search will work on song titles
- Have an input field the User types into.
- When the search results are return, present the user with a list of results.
    - ONLY display a result set that is 10 or fewer
- When the User selects the result, show the Details of the selected result.
- The details should be formatted cleanly. So that it is easily readable.
    - DO NOT display JSON structures.
- The details should include an image and if no image is present uses a default image.
- Allow the user to have the option to search again.


### Extra Credit - Synchronization (10pts)
- Whenever a search is performed add it to a list of previous searches. The UI should be display the previous searches in real-time.  This list should be clickable and take the User to a search results page.
- To receive credit - you must accomplish this with WebSockets.
