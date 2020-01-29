
//{ name: 'Group Name' leader: 'Leader Name' members: ['Name 1', Name 2'] }
class Groups {
    constructor(grps = []){
        this.groups = grps.slice(0)
    }
    addGroup(group){
        this.groups.push(group)
    }
    findGroup(groupName){
        let index = -1;
        for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i]['name'].toLowerCase() == groupName.toLowerCase())
                index = i
        }
        return index
    }
    removeGroup(groupName){
        let index = this.findGroup(groupName)
        if(index > -1){
            this.groups.splice(index, 1)
        }
    }
    findMember(index, memberName){
        if(index > -1){
            let mIndex = -1
            for(let i = 0; i < this.groups[index]['members'].length; i++){
                if(this.groups[index]['members'][i].toLowerCase() == memberName.toLowerCase()){
                    mIndex = i
                }
            }
            return mIndex
        }
        return -1
    }
    addMember(groupName, memberName){
        let index = this.findGroup(groupName)
        if (index > -1) {
            this.groups[index]['members'].push(memberName)
        }
    }
    removeMember(groupName, memberName){
        let index = this.findGroup(groupName)
        if (index > -1) {
            let mIndex = this.findMember(index, memberName)
            if(mIndex > -1){
                this.groups[index]['members'].splice(mIndex, 1)
            }
        }
    }
    get print(){
        for(let i = 0; i < this.groups.length; i++){
            console.log(this.groups[i]['name'])
            console.log('Leader: ' + this.groups[i]['leader'])
            let str = ''
            for(let j = 0; j < this.groups[i]['members'].length; j++){
                str += this.groups[i]['members'][j]
                if (j < (this.groups[i]['members'].length - 1))
                    str += ' | '
            }
            console.log(str + '\n')
        }
    }
}

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
groups.addMember('Justice League', 'Aqua Man')
groups.print
groups.removeGroup('avengers')
groups.print
groups.removeMember('Justice League', 'spiderMan')
groups.print


function displayName(person){
    const{ first, last } = person
    console.log(`${first} ${last}`)
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
displayName(person)  // Elon Musk

function combineName(obj, keys = [], newKey){
    if(keys.length <= 0)
        return obj

    let values = ''
    let newObj = Object.assign({}, obj)

    for(let i = 0; i < keys.length; i++){
        values += obj[keys[i]]
        if(i < keys.length-1)
            values += ' '

        delete newObj[keys[i]]
    }
    newObj[newKey] = values

    return newObj
}

console.log()
console.log(person)
console.log(combineName(person, ['first', 'last'], 'name'))

function createObject(people){
    let obj = {}

    for(let i = 0; i < people.length; i++){
        obj[i+1] = {}
        for(let j = 0; j < people[i].length; j++){
            obj[i+1][people[i][j]['key']] = people[i][j]['value']
        }
    }

    return obj
}

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

console.log()
console.log(createObject(people))