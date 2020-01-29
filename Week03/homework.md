## Week 3 Homework - Due 02/21/18 at 11:59pm
Complete all the problems below. 100 Points total.

- Use ES6 syntax. Make sure you are using let/const properly.

---

#### 1. Write a class that keeps track of groups and group members (50 pts)
The class should track names of the groups, a group leader and group members.

Each group should look like:
`{
        name: 'Group Name'
        leader: 'Leader Name'
        members: ['Name 1', Name 2']
    }`

The class should have the following methods:
- constructor: accepts an array of group objects or if nothing is passed - defaults to an empty array <br />
- addGroup(group): adds a group <br />
- removeGroup(groupName): removes a group by the name of the group <br />
- addMember(groupName, memberName): adds a member to the specified group <br />
- removeMember(groupName, memberName): removes a member from the specified group  <br />
- print: prints the groups as formatted in the example below

```
      const groups = new Groups()
        groups.addGroup({
          name: 'Justice League',
          leader: 'Wonder Woman',
          members: ['Batman', 'Superman', 'Spiderman']
        })
        groups.addGroup({
          name: 'Avengers',
          leader: 'Iron Man',
          members: ['Hulk', 'Thor', 'Captain America']
        })
        groups.print
        
        Justice League
        Leader: Wonder Woman
        Batman | Superman | Spiderman

        Avengers
        Leader: Iron Man
        Hulk | Thor | Captain America


        groups.addMember('Justice League', 'Aqua Man')
        groups.print
        
        Justice League
        Leader: Wonder Woman
        Batman | Superman | Spiderman | Aqua Man

        Avengers
        Leader: Iron Man
        Hulk | Thor | Captain America


        groups.removeGroup('avengers')
        groups.print
        
        Justice League
        Leader: Wonder Woman
        Batman | Superman | Spiderman | Aqua Man

        groups.removeMember('Justice League', 'spiderMan')
        groups.print
        
        Justice League
        Leader: Wonder Woman
        Batman | Superman | Aqua Man
```


#### 2. Write a function called displayName that takes an object as an argument and prints the person's first and last name. Use object destructuring in function argument.  Use template strings when printing the first and last name. (10 pts)
<br/>
* Note that in order to get full credit - you must use both object destructing and template strings.
<br/>

    const person = {
        first: 'Elon',
        last: 'Musk',
        twitter: '@elonmusk',
        company: 'Space X'
    }
    displayName(person)  // Elon Musk



#### 3.  Write a function called combineName that takes an object, array of keys to combine and a destination key. It returns an object with the correct keys combined. (20 pts)
    const person = {
        first: 'Elon',
        last: 'Musk',
        twitter: '@elonmusk',
        company: 'Space X'
    }
    combineName(person, ['first', 'last'], 'name')

    // Notice the object also no longer contains the keys first or last
    // and they have been combined into the new key called name
    {
      twitter: '@elonmusk',
      company: 'Space X',
      name: 'Elon Musk'
    }

#### 4. Write a function called createObject that takes an array as an argument and creates an object. (20 pts)
    const people = [[{
        key: 'name',
        value: 'Elon Musk'
    }, {
        key: 'twitter',
        value: '@elonmusk'
    }, {
        key: 'company',
        value: 'Space X'
    }],
    [{
        key: 'name',
        value: 'Tim Cook'
    }, {
        key: 'twitter',
        value: '@tim_cook'
    }, {
        key: 'company',
        value: 'Apple'
    }]]

    createObject(people)
    {
      '1': { name: 'Elon Musk', twitter: '@elonmusk', company: 'Space X' },
      '2': { name: 'Tim Cook', twitter: '@tim_cook', company: 'Apple' }
    }
