// Valid Parentheses 
function valid(str){
    let array = []
    const check ={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for (let i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            array.push(str[i])
        }else if(check[array.pop()] != str[i]){
            return false
        }
        
    }
    return array.length ? false : true
}


console.log(valid("{}[}"))