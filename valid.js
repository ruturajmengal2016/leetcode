// Valid Parentheses
function valid(str) {
  let array = []; // Empty array
  const check = {
    // Conditions object
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < str.length; i++) {
    // iteration
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      // check condition of string 1st character
      array.push(str[i]);
    } else if (check[array.pop()] != str[i]) {
      // return fasle if not match each other
      return false;
    }
  }
  return array.length ? false : true; // return true if array length is 0
}

console.log(valid("{}[}"));
