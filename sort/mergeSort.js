let arr = [5, 2, 4, 3, 9, 7, 8, 11, 47, 32, 22, 33]

let sorted = mergeSort(arr)
console.log(sorted)

function mergeSort(array) {
    let nestArray = array.map(i => [i])
    while (1) {
        nestArray = job(nestArray)
        if (nestArray.length === 1) {
            return nestArray[0]
        }
    }

    // input: [ [], [], [], [] ]
    // output: [ [, , ], [, , ] ]
    function job(nestArray) {
        let newArray = []
        for (let i = 0; i < nestArray.length; i = i + 2) {
            let left = nestArray[i] || []
            let right = nestArray[i + 1] || []
            let merged = merge(left, right)
            newArray.push(merged)
        }

        return newArray

        function merge(left, right) {
            let merged = []

            while (1) {
                if (left[0] && right[0]) {
                    if (left[0] < right[0]) {
                        merged.push(left[0])
                        left.shift()
                    } else {
                        merged.push(right[0])
                        right.shift()
                    }
                } else if (left[0]) {
                    merged.push(left[0])
                    left.shift()
                } else if (right[0]) {
                    merged.push(right[0])
                    right.shift()
                } else {
                    return merged
                }
            }
        }
    }
}
