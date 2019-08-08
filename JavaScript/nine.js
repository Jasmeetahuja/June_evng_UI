// function add(a,b){
//     var out = a+b
//     return out
// }

// add(1,2)

// function add(a,b,c){
//     var out = a+b+c
//     return out
// }

// add(1,6,"hi")

var first = "hey"

function welcome(name){
    var first = "hi";
    var out = first + name;
    return out
}

console.log(first)
welcome('john')

function isEven(a){
    var out;
    if(a%2==0){
        out = "Even"
    }else{
        out = "Odd"
    }
    return out
}