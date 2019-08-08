// var a= 10
// undefined
// a
// 10
// var a= 11
// undefined
// a
// 11
// var=> we can redeclare and reassign the Value


var a = 10
console.log(a)

var b = 20
console.log(b)

if(a==10){
    let c ='my age'
    console.log(c+a)
}

for(i=0;i<10;i++){
    let d =" ok in for loop "
    console.log(d +i+b)
}

console.log('outside ', +c)

console.log('outside ', +d)


// let=> we cannot redeclare but we can reassign the value

//const=> we neither redeclare nor reassign the value

var a = 14;
a = 25;
var b = a;

console.log(a);
console.log(b);
VM133:5 25
VM133:6 25

var a;
var b;
a=14
b=a(14)
b=14
a=25

var a =[1,2,3,4,5]
console.log(a.map(Math.sqrt))

//console.log(a.map((a) => {return "hi"+a}))

Map & Filter
in Map length of array will mot change
in Filter length of array can be change

for in loop in case of objects.

var city = {"london":4675758765757,"india":6757658787}
var a="";
var b;
for(b in city){
    a+= city[b]
}

var color = ["yellow", "red", "blue","green"]
var z;
for(z in color){
    console.log(z)
}

var color = ["yellow", "red", "blue","green"]
var z;
for(z of color){
    console.log(z)
}


var i =0
while(i<10){
    i++
}
console.log(i)



for(i=0;i<10;i++){
    console.log(i)
}

0
1
2
3
4
5
6
7
8
9