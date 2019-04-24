
let { array } = require('./data')

let sorted = countSort(array)
console.log(sorted)

function countSort(array) {
    let countArray = []
    array.forEach(e => {
        countArray[e] = countArray[e] ? countArray[e]++ : 1
    })

    let sortArray = []
    countArray.forEach((_, i) => {
        if (!countArray[i]) return
        sortArray.push(i)
        countArray[i]--
    })
    
    return sortArray
}

