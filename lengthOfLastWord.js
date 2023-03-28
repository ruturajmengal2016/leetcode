

function fun(s){
    s = s.trim();
    return s.length - s.lastIndexOf(" ") - 1; 
}

console.log(fun("Web Application"))