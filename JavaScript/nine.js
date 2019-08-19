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

// var first = "hey"

// function welcome(name){
//     var first = "hi";
//     var out = first + name;
//     return out
// }

// console.log(first)
// welcome('john')

// function isEven(a){
//     var out;
//     if(a%2==0){
//         out = "Even"
//     }else{
//         out = "Odd"
//     }
//     return out
// }

function welcome(){
    first = "hi";
    return first;
}

function greet(name){
    var fout = welcome();
    var out = fout + name;
    return out;
}

var test = function(a,b){
    return a*b;
}

var multiply = function(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

multiply(2)(3)(4)
multiply(2,3,4) = not true
output:24

*****Function in ES6*****

const add = (a,b) => {return a+b}
add(2,3)
