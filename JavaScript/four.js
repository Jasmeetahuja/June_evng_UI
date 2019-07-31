function
if else
for

var a = 10;
if(a%2===0){
    console.log("number is even")
}else{
    console.log("numberis odd")
}

var a = 10;
if(a%2===0){
    console.log("number is even")
}else if(a%3 ===0){
    console.log("number is divisible by 3")
}else{
    console.log("number is odd")
}

var a = 9;
if(a%2===0){
    console.log("number is even")
}else if(a%3 ===0){
    console.log("number is divisible by 3")
}else{
    console.log("number is odd")
}

var a = 10;
if(a%2===0){
    console.log("number is even")
}else if(a%3===0 || a%5===0){
    console.log("number is divisible by 3 or 5")
}else{
    console.log("number is odd")
}


var output = comfirm("do you want to leave");
if(output === true){
    console.log("ok bye")
}else{
    console.log("thanks for staying")
}