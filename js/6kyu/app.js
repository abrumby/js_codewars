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


export {
    splitStrings, moveZeros
}