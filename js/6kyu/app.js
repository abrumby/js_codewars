//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function splitStrings(str){
    if (str.length === 0) {
        return [];
    }
    return str.match(/.{1,2}/g).map((out) => {
        return out.length % 2 ? out + '_' : out;
    });
}


export {splitStrings}