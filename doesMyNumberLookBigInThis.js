function narcissistic(value) {
    let initValue = value
    let narcissistValue = 0
    let exponent = value.toString().length
    
    for (let i = 0; i < exponent; i++) {
        let remainder = value % 10
        narcissistValue += remainder ** exponent
        value = (value - remainder) / 10
    }

    return narcissistValue === initValue
}

console.log(narcissistic(7)) // true, "7 is narcissistic"

console.log(narcissistic(371)) // true, "371 is narcissistic"

console.log(narcissistic(1652 )) // false