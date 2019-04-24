let { array } = require('./data')

let sorted = radixSort(array)
console.log(sorted)

// LSD 最低位开始排
function radixSort(array) {
    let buckets = [...Array(10)].map(_ => [])
    let max = Math.max(...array)
    let k = max.toString().length
    array = array.map(i => `${i}`.padStart(k, '0'))

    for (let i = k - 1; i >= 0; i--) {
        array.forEach(ele => {
            let num = ele.charAt(i)
            buckets[Number(num)].push(ele)
        })
        array = [].concat(...buckets)
        buckets = buckets.map(_ => [])
    }

    array = array.map(ele => Number(ele))
    return array
}