function alphanumeric(string){
    const regex= /^[a-z0-9]+$/i
    
    return string.search(regex) != -1
}

console.log(alphanumeric("Mazinkaiser")) // true
console.log(alphanumeric("hello world_")) //  false
console.log(alphanumeric("PassW0rd")) //  true
console.log(alphanumeric("     ")) //  false