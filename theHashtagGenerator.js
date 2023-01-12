// function generateHashtag(str) {
//     if (str.trim().length > 0) {
//         let arr = str.split(" ")
//         let newArr = []

//         arr.map(el => {if (el.length > 0) {
//                 newArr.push(el[0].toUpperCase() + el.slice(1))
//             }
//         })
//         newArr.unshift("#")

//         let newStr = newArr.join("").toString()

//         return (newStr.length > 140 ? false : newStr)
//     } else {
//         return false
//     }
// }

// refactored 

function generateHashtag(str) {
    if (!str || !(str.trim().length > 0)) return false

      let arr = str.split(" ")
      let newArr = []
      arr.map(el => {if (el.length > 0) {
              newArr.push(el[0].toUpperCase() + el.slice(1))
          }
      })
      newArr.unshift("#")

      let newStr = newArr.join("").toString()
      return (newStr.length > 140 ? false : newStr)
}