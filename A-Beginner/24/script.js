// 24. Skriv en funktion `isAllCaps`  som accepterar en sträng som argument 
// och returnerar `true` om argumentet bara består av stora bokstäver, annars `false`

function isAllCaps(str){
    return str === str.toUpperCase()
}

console.log(isAllCaps('HJDBE'))
console.log(isAllCaps('HJdskvn'))
console.log(isAllCaps('HJDDDE'))