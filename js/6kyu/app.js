//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function splitStrings(str){
    if (str.length === 0) {
        return [];
    }
    return str.match(/.{1,2}/g).map((out) => {
        return out.length % 2 ? out + '_' : out;
    });
}

//https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
    return arr.sort((a, b) => (a === 0) - (b === 0))
}

//https://www.codewars.com/kata/5262119038c0985a5b00029f
function isPrime(num) {
    //remove 1 and below and factors of 2
    if(num <= 1 || (num % 2 === 0 && num !== 2)) {
        return false;
    }
    const limit = Math.floor(Math.sqrt(num))
    for(let index = 3; index <= limit; index += 2) {
        if (num % index === 0) {
            return false
        }
    }
    return true
}

//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
    let odds = integers.filter(number => {
        return number % 2 !== 0
    });
    let evens = integers.filter(number => {
        return number % 2 === 0
    })
    return odds.length < evens.length ? odds[0] : evens[0]
}

//https://www.codewars.com/kata/556deca17c58da83c00002db
//0,1,1,2,4,7,13,24,44,81,149
function tribonacci(signature, n) {
    if (n > 3) {
        let s = tribonacci(signature, n - 1);
        return [...s, s[s.length - 1] + s[s.length - 2] + s[s.length - 3]];
    } else return signature.slice(0, n);
}

export {
    splitStrings, moveZeros, isPrime, findOutlier, tribonacci
}