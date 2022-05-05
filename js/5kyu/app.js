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

export { validParentheses };
