// Roman to Interger conversion

function Int(str) {
  const symbols = {   // symbols
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = symbols[str[i]];
    const next = symbols[str[i + 1]];

    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }
  return result;
}
