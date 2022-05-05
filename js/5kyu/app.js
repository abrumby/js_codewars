//www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(parens) {
  if (!parens) return true;
  if (parens.length <= 1) return false;
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    let curChar = parens[i];
    switch (curChar) {
      case "(":
        stack.push(")");
        break;
      default:
        let topElement = stack.pop();
        if (curChar !== topElement) return false;
    }
  }
  return stack.length === 0;
}

//https://www.codewars.com/kata/5541f58a944b85ce6d00006a
function productFib(prod){
  let n = 0;
  let nPlus = 1;
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}


export { validParentheses, productFib };
