//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function splitStrings(str) {
  if (str.length === 0) {
    return [];
  }
  return str.match(/.{1,2}/g).map((out) => {
    return out.length % 2 ? out + "_" : out;
  });
}

//https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  return arr.sort((a, b) => (a === 0) - (b === 0));
}

//https://www.codewars.com/kata/5262119038c0985a5b00029f
function isPrime(num) {
  //remove 1 and below and factors of 2
  if (num <= 1 || (num % 2 === 0 && num !== 2)) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(num));
  for (let index = 3; index <= limit; index += 2) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers) {
  let odds = integers.filter((number) => {
    return number % 2 !== 0;
  });
  let evens = integers.filter((number) => {
    return number % 2 === 0;
  });
  return odds.length < evens.length ? odds[0] : evens[0];
}

//https://www.codewars.com/kata/556deca17c58da83c00002db
//0,1,1,2,4,7,13,24,44,81,149
function tribonacci(signature, n) {
  if (n > 3) {
    let s = tribonacci(signature, n - 1);
    return [...s, s[s.length - 1] + s[s.length - 2] + s[s.length - 3]];
  } else return signature.slice(0, n);
}

//https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
  if (seconds < 0 || seconds > 360000) return null;

  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  if (hours < 10) hours = "0" + hours;

  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  return hours + ":" + minutes + ":" + seconds;
}

//https://www.codewars.com/kata/550498447451fbbd7600041c //Are they the "same"?
function comp(array1, array2) {
  if (!array1 || !array2) return false;
  return array1.map(x => x * x).sort().toString() === array2.sort().toString();
}

//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/
function findMissingLetter(array)
{
  if(!array || array.length < 1)
    return ''
  for (let i = 1; i < array.length; i++) {
    let prev = array[i -1].charCodeAt()
    let current = array[i].charCodeAt()
    if(current - prev !== 1)
      return String.fromCharCode(prev + 1)
  }
}

export {
  splitStrings,
  moveZeros,
  isPrime,
  findOutlier,
  tribonacci,
  humanReadable,
  comp,
  findMissingLetter
};
