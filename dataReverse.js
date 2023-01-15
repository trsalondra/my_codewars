function dataReverse(data) {
    let reversedArr = []
    data.reverse()

    for (let i = 0; i + 8 <= data.length; i += 8) {
        reversedArr = reversedArr.concat(data.slice(i, i + 8).reverse())
    }

    return reversedArr
}


const data1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

console.log(dataReverse(data1))

const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]

//  console.log(dataReverse(data3))
