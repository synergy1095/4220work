## MIDTERM 03/25 - 4:00PM to 6:30PM - KH Lecture Hall 2

#### As a team create a custom node module that uses your selected API.  Create a CLI that uses the custom node module to demo interacting with module.

Students should break up into groups of 4-5 members.  Each group is responsible for selecting a web API.  Using that web API create a custom node module and CLI app to demonstrate interacting with the custom module.

---
### Custom Module Requirements

**package.json** <br/>
The module should have a package.json file that is properly filled out.
  - It should include but not limited to (name, version, author, contributors, dependencies, etc)

**Methods** <br/>
The module should export a method for searching.
  - Given a search criteria it should return an an array that represent the result set. <br/>
    (EX: game title, city, character, actor/actress or artist)

The module should export a method for fetching data by id. <br/>
  - Given an id of some item it should return an object representing the data requested) <br/>
  - (EX: game title, city, character, actor/actress or artist)

**Additional Guidelines**
  - Your custom module should use superagnet/request or similar modules to make the direct HTTP calls to your API.
  - Ideally you should be creating a config.json to hold the main portion of the url and API key (if your API requires one).

---
### CLI Requirements
Create a command line interface similar to the example ones from class.

  - The CLI app should display a help menu by typing: `node cli.js help`
  - The CLI should include a search command `node cli.js search <item to be search>`
  - The app should allow a user to select from a search result and then fetch details
  - The app should display the details formatted cleanly
  - The app should have a cli.js, app.js and package.json

**The CLI portion should not contain the API URL. The CLI should only being using your custom module (above), yargs, inquirer or color/formatting modules.*

---

### GRADING

**Preparedness**
  - Team has the correct cables, laptop, etc
  - Team knows who is covering which parts of the presentation
  - Team has code ready and able to run during the presentation

***Timing**
  - Each team member has 2 minutes to present on a portion of the module
  - Going over time loses points.
  - Going WAY under time would also lost points. (example: presenting for 30 secs)

**Code Execution**
  - Code runs during presentation
  - There are no errors
  - Code covers/includes exactly what was detailed above for both the cusotm module and CLI

**Q&A**
  - Team is able to answer questions from class or professors

---
### Example APIs <br/>
  - Review the selected API and make sure you are able to use it to fulfill the Midterm requirements.
  - Limit of 2 teams per API

TV Maze
- https://www.tvmaze.com/api

##### Group 1 - Damin, Yash, Parth, Abdullah 
---
The Movie Database API
- https://www.themoviedb.org/documentation/api

##### Group 1 - Bijan, Victor, Vitou, and Shivakumar
##### Group 2 - 1) Angie, William, Alisha, Jurelly, Daniel

---
Spotify
- https://developer.spotify.com/web-api/

##### Group 1 - Mirasol, Miguel, Matthew, Alyssa, Abbie, Chelle
##### Group 2 - Daniel, James, Victor, Tan, Francisco
---
Musikki API
- https://music-api.musikki.com/reference

---
Star Wars API
- https://swapi.co/documentation

##### Group 1 - Bryan, Patrick, Gevorg, Kevin
##### Group 2 - 1. Brian, Oz, Angelo, Juan, Julio
---

Game of Thrones API
- https://anapioficeandfire.com/Documentation

##### Group 1 - Justin, Henry, Jonathan, Daniel

---

Marvel
- https://developer.marvel.com/documentation/getting_started

##### Group 1 - Vivek, Lovepreet, Harminder, Rishabh, Mohit
##### Group 2 - Aaron, Zolangi, Davis, Gonzalo, Benjamin

---
Comic Vine
- https://comicvine.gamespot.com/api/

##### Group 1 - Allen, Ana, Maximiliano, and Leonard
##### Group 2 - Ammar, Adekola, Parth, Jaishri

---
Internet Gaming DB
- https://igdb.github.io/api/

##### Group 1 -  Jeffrey, Jose, Alan, Gabriel, Christian
##### Group 2 - Manasi, Nivedha, Tirth, Jay, Ashita

---
GiantBomb (Video Game API)
- https://www.giantbomb.com/api/documentation
---
MetaWeather API
- https://www.metaweather.com/api/

##### GROUP 1 - Russell, Hue, MingYang, Raymond Chen, Walter Carbajal

---
Reddit
- https://www.reddit.com/dev/api

##### Group 1 - Hieu, Michael, Antonio, Edwin

---
Github
- https://developer.github.com/v3/

##### Group 1 - Safa, Saba, Jose, Teky, Alvin

---
Zomato (Resturant API)
- https://developers.zomato.com/documentation#/

#### Group 1 - Dhruval, Kunal, Rajat, Ekta
##### Group 2 - Rohan, Naif, Alejandra, Benjamin, Arun

---

Yelp API
- https://www.yelp.com/developers/documentation/v3

##### Group 1 - Kevin, Cedric, Daniel, Maurice, Christopher
##### Group 2 - Barry, Jose, Juan, Xiaoye, Jesus

---

Ebay 
- http://developer.ebay.com/devzone/finding/concepts/FindingAPIGuide.html

##### Group 1 -  Calvin, Paul, Jaime, Leonardo, and Rolf

---
Gov Search
- https://search.gov/developer/jobs.html

##### Group 1 - Pranil, Karina, Ararat, Olin-mao

---

---
Open FDA
https://open.fda.gov/api/
##### Group 1 - Sharokh, Ka-Yee, Juan, Evik, Ken, and Robert

---
Oxford Dictionary
- https://developer.oxforddictionaries.com/documentation

##### Group 1 - Princy, Hiral, Khushboo, Shashikiran

---
Other APIs
- https://github.com/toddmotto/public-apis



