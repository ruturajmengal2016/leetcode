function longestCommonPrefix(strs) {
  if (strs.length == 0) {
    return "";
  }
  let pref = strs[0];
  for (let i = 1; i < strs.length; i++)
    while (strs[i].indexOf(pref) !== 0) {
      pref = pref.substring(0, pref.length - 1);
      if (pref.length === 0) {
        return "";
      }
    }
  return pref;
}

let result = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(result);
