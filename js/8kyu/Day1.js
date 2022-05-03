//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function reverseString(str){
    if (str === "")
        return ""
    return reverseString(str.substring(1)) + str.charAt(0)
}

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
function cockroachSpeed(s) {
    let result = Math.floor(s * 27.7778)
    return result
}

export {reverseString, cockroachSpeed}