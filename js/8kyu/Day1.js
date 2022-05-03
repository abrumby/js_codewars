function reverseString(str){
    if (str === "")
        return ""
    return reverseString(str.substring(1)) + str.charAt(0)
}

export {reverseString}