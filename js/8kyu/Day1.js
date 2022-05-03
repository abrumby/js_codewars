//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function reverseString(str){
    if (str === "")
        return ""
    return reverseString(str.substring(1)) + str.charAt(0)
}

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
function cockroachSpeed(s) {
    return Math.floor(s * 27.7778)
}

//https://www.codewars.com/kata/577ff15ad648a14b780000e7
function greet(language) {
    if(language !== "" || language !== "IP_ADDRESS_INVALID" || language !== "IP_ADDRESS_NOT_FOUND" || language !== "IP_ADDRESS_REQUIRED") {
        let result = languages.find(obj => {
            return obj.language === language
        })
        if (result)
            return result.greeting
    }
    return 'Welcome'
}
let languages = [
    { language: 'english', greeting: 'Welcome'},
    { language: 'czech', greeting: 'Vitejte'},
    { language: 'danish', greeting: 'Velkomst'},
    { language: 'dutch', greeting: 'Welkom'},
    { language: 'estonian', greeting: 'Tere tulemast'},
    { language: 'finnish', greeting: 'Tervetuloa'},
    { language: 'flemish', greeting: 'Welgekomen'},
    { language: 'french', greeting: 'Bienvenue'},
    { language: 'german', greeting: 'Willkommen'},
    { language: 'irish', greeting: 'Failte'},
    { language: 'italian', greeting: 'Benvenuto'},
    { language: 'latvian', greeting: 'Gaidits'},
    { language: 'lithuanian', greeting: 'Laukiamas'},
    { language: 'polish', greeting: 'Witamy'},
    { language: 'spanish', greeting: 'Bienvenido'},
    { language: 'swedish', greeting: 'Valkommen'},
    { language: 'welsh', greeting: 'Croeso'}
]

//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
function isPalindrome(x) {
    return x.toLowerCase() === reverseString(x.toLowerCase())
}

//https://www.codewars.com/kata/55cbc3586671f6aa070000fb
function checkForFactor (base, factor) {
    return base % factor === 0
}

export {
    reverseString, cockroachSpeed, greet,
    isPalindrome, checkForFactor
}