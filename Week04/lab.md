## Week 4 LAB - Due 02/22/18 at 11:59pm
Complete all the problems below. 50 Points total.

- Use ES6 syntax. Make sure you are using let/const properly.
- Use the built in http api.  Do not use any npm modules.

---

#### 1. Using callbacks print the URLs and their response time. (25 pts)
Requirements
- Use Callbacks - Do not block or make a synchronous function for getting times. Just use `http.get`
- getTimes(argument, callback)
This function gets the response time from the http request. it calls back to the the calling function.
- printTimes(sample)
This function should call getTimes(...) and after all response times are gathered - it should then print the times.
- HINT: use new Date()

<br />
Note - The exact times do not matter - only make sure they are ordered low to high.

```
    const sample = [
        'http://www.google.com/',
        'http://www.spotify.com/us/',
        'http://twitter.com/',
        'http://google.com/nothing'
    ]
    // Example Printout
    // [
    //     {  url: ''http://google.com/nothing', time: 18 },
    //     {  url: 'https://www.google.com/', time: 21 },
    //     {  url: 'https://twitter.com/', time: 31 }
    //     {  url: 'https://www.spotify.com/us/', time: 279 }
    // ]
```

#### 2. Using Promises print an object that has success and error keys where the value is the URLs that results in success (200 or 300) or errors (400 or 500).

    // Example Printout
    // {
    //     success: ['https://www.google.com/', 'https://www.spotify.com/us/', 'https://twitter.com /' ],
    //     error: [''http://google.com/nothing']
    // }
