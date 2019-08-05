var marks=[45,67,7,777,987];
var names=['john', 'rahul', 'jassi']

var a = ['fdgf',5,87768,676,'fdgfdgf',true,false,'ghghj',5,'hgfhg',8]
undefined
a.length
11
a[0]
"fdgf"
a[5]
true
a[565]
undefined
a.length
11
a.length-1
10
a[a.length-1]
8

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
city.push('Mumbai')
6
city
(6) ["London", "New York", "Delhi", "Amsterdam", "Poland", "Mumbai"]
city.pop()
"Mumbai"
city
(5) ["London", "New York", "Delhi", "Amsterdam", "Poland"]
city.pop(3)
"Poland"
city
(4) ["London", "New York", "Delhi", "Amsterdam"]

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
city.shift()
"London"
city
(4) ["New York", "Delhi", "Amsterdam", "Poland"]
city.shift()
"New York"
city
(3) ["Delhi", "Amsterdam", "Poland"]

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
city.unshift('Sydney')
6
city
(6) ["Sydney", "London", "New York", "Delhi", "Amsterdam", "Poland"]
city.unshift('Pune')
7
city
(7) ["Pune", "Sydney", "London", "New York", "Delhi", "Amsterdam", "Poland"]

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
city.slice(2,4)
(2) ["Delhi", "Amsterdam"]
city
(5) ["London", "New York", "Delhi", "Amsterdam", "Poland"]
city.slice(2,6)
(3) ["Delhi", "Amsterdam", "Poland"]
city.slice(2,5)
(3) ["Delhi", "Amsterdam", "Poland"]

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
city.splice(2,0,'Mumbai')
[]
city
(6) ["London", "New York", "Mumbai", "Delhi", "Amsterdam", "Poland"]
city.splice(2,1,'Scotland','Paris')
["Mumbai"]
city
(7) ["London", "New York", "Scotland", "Paris", "Delhi", "Amsterdam", "Poland"]
city.splice(1,3,'Nagpur','Rome','Warsaw')
(3) ["New York", "Scotland", "Paris"]
city
(7) ["London", "Nagpur", "Rome", "Warsaw", "Delhi", "Amsterdam", "Poland"]

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
city.indexOf('Delhi')
2
city.indexOf('Poland')
4
city.indexOf('Warsaw')
-1
city.indexOf('Pune')
-1

var city =['London', 'New York', 'Delhi', 'Amsterdam', 'Poland']
undefined
var number= [1,2,3,4,5]
undefined
city+number
"London,New York,Delhi,Amsterdam,Poland1,2,3,4,5"
city.concat(number)
(10) ["London", "New York", "Delhi", "Amsterdam", "Poland", 1, 2, 3, 4, 5]

var city = ["London", "Nagpur", "Rome", "Warsaw", "Delhi", "Amsterdam", "Poland"]
undefined
city.sort()
(7) ["Amsterdam", "Delhi", "London", "Nagpur", "Poland", "Rome", "Warsaw"]
var out = city.sort()
undefined
out.reverse()
(7) ["Warsaw", "Rome", "Poland", "Nagpur", "London", "Delhi", "Amsterdam"]
city.reverse()
(7) ["Amsterdam", "Delhi", "London", "Nagpur", "Poland", "Rome", "Warsaw"]
var city = ["London", "Nagpur", "Rome", "Warsaw", "Delhi", "Amsterdam", "Poland"]
undefined
city.reverse()
(7) ["Poland", "Amsterdam", "Delhi", "Warsaw", "Rome", "Nagpur", "London"]

var final = ["London", "New York", "Delhi", "Amsterdam", "Poland", 1, 2, 3, 4, 5]
undefined
final.sort()
(10) [1, 2, 3, 4, 5, "Amsterdam", "Delhi", "London", "New York", "Poland"]
var final = ["London", "New York", "Delhi", "Amsterdam", "Poland", 1, 2, 3, 4, 5]
undefined
final.reverse()
(10) [5, 4, 3, 2, 1, "Poland", "Amsterdam", "Delhi", "New York", "London"]

var inter= ['hi', 'i', 'am', 'doing']
undefined
inter.join()
"hi,i,am,doing"
var inter= ['hi', 'i', 'am', 'doing']
undefined
inter.toString()
"hi,i,am,doing"
var inter= ['hi', 'i', 'am', 'doing']
undefined
inter.lastIndexOf('i')
1
var inter= ['hi', 'i', 'am', 'doing', 'i', 'vgh', 'i']
undefined
inter.lastIndexOf('i')
6