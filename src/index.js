module.exports = function check(str, bracketsConfig) {

  const openBrackets = [];
  const closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  let stack = [];

  function checkBrackets(str) {

    for (let i = 0; i < str.length; i++) {
      let currentBracket = str[i];

      if (openBrackets.includes(currentBracket)) {
        stack.push(currentBracket);
      } else {
        if (stack.length === 0) {
          return false;
        }
      }

      let lastElement = stack[stack.length - 1];
      let equalOpenBracket = openBrackets[closeBrackets.indexOf(currentBracket)];

      if (lastElement === equalOpenBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}