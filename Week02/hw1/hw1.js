let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower = 'abcdefghijklmnopqrstuvwxyz'

function upperCase(str) {
    let ret = new String()
    for(let i = 0; i < str.length; i++){
        let index = lower.indexOf(str[i])
        let cur = str[i]
        if(index >= 0){
            cur = upper[index]
        }
        ret += cur
    }
    return ret
}

function lowerCase(str) {
    let ret = new String()
    for (let i = 0; i < str.length; i++) {
        let index = upper.indexOf(str[i])
        let cur = str[i]
        if (index >= 0) {
            cur = lower[index]
        }
        ret += cur
    }
    return ret
}

function upperCaseFirst(word) {
    return upperCase(word[0]) + lowerCase(word.slice(1))
}

function sentenceCase(str, unconditionallyCapitalized) {
    let strArray = str.split('.').filter(item => item)
    let strArray2
    let ret = new String()

    for(let i = 0; i < strArray.length; i++){
        strArray2 = strArray[i].split(' ').filter(item => item)
        ret += upperCaseFirst(strArray2[0]) + ' '

        for(let j = 1; j < strArray2.length; j++){
            let temp = upperCaseFirst(strArray2[j])
            if (unconditionallyCapitalized.includes(temp.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))){
                ret += temp
            }else{
                ret += lowerCase(strArray2[j])
            }
            if(j < strArray2.length-1)
                ret += ' '
        }

        ret += '.'
        if(i < strArray.length-1)
            ret += ' '
    }

    return ret
}

function capitalizedCase(str){
    let strArray = str.split('.').filter(item => item)
    let strArray2
    let ret = new String()

    for (let i = 0; i < strArray.length; i++) {
        strArray2 = strArray[i].split(' ').filter(item => item)
        ret += upperCaseFirst(strArray2[0]) + ' '

        for (let j = 1; j < strArray2.length; j++) {
            ret += upperCaseFirst(strArray2[j])
            
            if (j < strArray2.length - 1)
                ret += ' '
        }

        ret += '.'
        if (i < strArray.length - 1)
            ret += ' '
    }

    return ret
}

function alternatingCase(str) {
    let ret = new String();
    for(let i = 0; i < str.length; i++){
        if(i%2 == 0){
            ret += lowerCase(str[i])
        }else{
            ret += upperCase(str[i])
        }
    }

    return ret
}

function titleCase(str, lowercaseWords) {
    let strArray = str.split('.').filter(item => item)
    let strArray2
    let ret = new String()

    for (let i = 0; i < strArray.length; i++) {
        strArray2 = strArray[i].split(' ').filter(item => item)
        ret += upperCaseFirst(strArray2[0]) + ' '

        for (let j = 1; j < strArray2.length; j++) {
            let temp = lowerCase(strArray2[j])
            if (lowercaseWords.includes(temp.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))) {
                ret += temp
            } else {
                ret += upperCaseFirst(strArray2[j])
            }
            if (j < strArray2.length - 1)
                ret += ' '
        }

        ret += '.'
        if (i < strArray.length - 1)
            ret += ' '
    }

    return ret
}

function inverseCaseWord(word) {
    return lowerCase(word[0]) + upperCase(word.slice(1))    
}

function inverseCase(str){
    let strArray = str.split(' ').filter(item => item)
    let ret = new String()

    for (let i = 0; i < strArray.length; i++) {
        ret += inverseCaseWord(strArray[i]) 
        if (i < strArray.length - 1)
            ret += ' '
    }

    return ret
}

function runStringFunctions() {
    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'

    let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
    let lowercaseWords = ['the', 'of', 'in', 'an']

    console.log('upperCase: ', upperCase(str))
    console.log('lowerCase: ', lowerCase(str))
    console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized))
    console.log('capitalizedCase: ', capitalizedCase(str))
    console.log('alternatingCase: ', alternatingCase(str))
    console.log('titleCase: ', titleCase(str, lowercaseWords))
    console.log('inverseCase: ', inverseCase(str))
}

runStringFunctions()

function getCharacterFrequency(str) {
    let ret = {}
    for(let i = 0; i < str.length; i++){
        if(lowerCase(str[i]) in ret){
            ret[lowerCase(str[i])]++
        }else if(upperCase(str[i]) in ret){
            ret[upperCase(str[i])]++
        }else{
            ret[str[i]] = 1
        }
    }
    
    return ret
}

function printCharacterFrequency(obj){
    for(let key in obj){
        if(obj[key] > 1)
            console.log('\'' + key + '\' occurs ' + obj[key] + ' times.')
        else
            console.log('\'' + key + '\' occurs ' + obj[key] + ' time.')
    }
}

function runCharacterFunctions() {

    let str = 'Hello, World!'

    let frequencyObj = getCharacterFrequency(str)

    printCharacterFrequency(frequencyObj)

}

console.log('\n\n')
runCharacterFunctions()