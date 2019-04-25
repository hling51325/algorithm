let { array } = require('./data')

// array = [2, 4, 3]
let sorted = quickSort(array)
console.log(sorted)

function quickSort(array) {
    if (array.length === 1) return array

    let stack = [{
        pivot: array[0],
        start: 0,
        end: array.length
    }]

    while (1) {
        let temp = []
        stack.forEach(({ pivot, start, end }) => {
            let i = start + 1
            if (i === end) return
            for (let j = i + 1; j < end; j++) {
                if (array[j] < array[i]) {
                    swap(array, i, j)
                    i++
                }
            }
            if (array[i] < pivot) {
                swap(array, start, i)
            }

            temp.push({
                pivot: array[start],
                start: start,
                end: i
            })
            temp.push({
                pivot: array[i],
                start: i,
                end: end
            })
        })
        stack = temp
        if (!stack.length) return array
    }
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}