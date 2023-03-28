function fun(haystack, needle) {
  if (needle.length == 0) return 0;             // needle length is 0 it will 0
  for (let i = 0; i < haystack.length; i++) {       // iteration loop upto length of haystack
    let k = i,j = 0;                                            // variable assign by values
    while (haystack[k] == needle[j] && j < needle.length) {     // check condition and update k and j variables
      k++, j++;
    }
    if (j == needle.length) return i;                           // return index value if j equal to needle length
  }
  return -1;                                                    // otherwise it returns -1
}

console.log(fun("HelloWorld","World"))