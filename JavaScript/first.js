*******ES5********

String
Number
Boolean

var a ='javascript'
var a ="javascript"
var a ='javascript"

var b ="7584384"
var c = 8478327
var d =true
var e = false
var f ="true"

var a = "javascript"
undefined
a
"javascript"
var b = 3423
undefined
b
3423
var c = true
undefined
c
true
typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"
var d ="232445"
undefined
typeof(d)
"string"
var e ='jfejf"
VM345:1 Uncaught SyntaxError: Invalid or unexpected token
var f ="true"
undefined
typeof(f)
"string"

=> Anything between the quotes is String
=> Numeric value is number
=> true/false is boolean


*****Operators in JavaScript******
+, -, *, /, %

var a = 10
undefined
var b = 20
undefined
a+b
30
a-b
-10
a*b
200
a/b
0.5

var a ="hi"
undefined
var b =" JavaScript"
undefined
a+b
"hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN

var a ="hi"
undefined
var b = 10
undefined
a+b
"hi10"
a-b
NaN


string+string= string
string+number= string
number+number= number


10+10+10=30
10+"10"+10=101010
"10"+10+10=101010
10+10+"10"=2010

10+10+10
30
10+"10"+10
"101010"
"10"+10+10
"101010"
10+10+"10"
"2010"

true+true+1=3
"1"+true+true=1truetrue

true==1
true
true+true
2
false==0
true
true+true+false
2
false+false
0
true+true+1
3
"1"=true+true
VM1034:1 Uncaught ReferenceError: Invalid left-hand side in assignment
"1"+true+true
"1truetrue"


modules

var a = 10
undefined
10%2
0
10%3
1

console.log()
prompt
confirm
alert

var a = 10
undefined
console.log(a)
VM175:1 10
undefined
alert("done")
undefined
confirm("do you like this?")
true
confirm("do you like this?")
false
prompt("what is your name?")
"jasmeet"
var a = prompt("what is your name?")
undefined
a
"jsasmeert"