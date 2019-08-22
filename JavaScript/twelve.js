IIFI/ no name function/self invoking function 
(function(){
    out = 1+1
    console.log(out)
}())

function add(){
    out = 1+1
    console.log(out)
}


******Literal Way******

var city = {name:"London", country:"England", Population:567576}
var city = {name:"London", country:"England", Population:567576}
undefined
typeof(city)
"object"
city.name
"London"
city.country
"England"
city['name']
"London"
city['Population']
567576
city.majority = "Britishers"
"Britishers"
city
{name: "London", country: "England", Population: 567576, majority: "Britishers"}
city.name = "Scotland"
"Scotland"
city
{name: "Scotland", country: "England", Population: 567576, majority: "Britishers"}
delete['country']
true
city
{name: "Scotland", country: "England", Population: 567576, majority: "Britishers"}
delete city.country
true
city
{name: "Scotland", Population: 567576, majority: "Britishers"}
city.country="India"
"India"
city
{name: "Scotland", Population: 567576, majority: "Britishers", country: "India"}
city.weather="cold"
"cold"
city
{name: "Scotland", Population: 567576, majority: "Britishers", country: "India", weather: "cold"}
city.name="Mumbai"
"Mumbai"
city
{name: "Mumbai", Population: 567576, majority: "Britishers", country: "India", weather: "cold"}


city = [
    {name: "Mumbai", Population: 567576, majority: "Britishers", country: "India", weather: "cold"},
    {name: "Scotland", Population: 567576, majority: "Britishers", country: "India", weather: "cold"},
    {name: "London", country: "England", Population: 567576, majority: "Britishers"}
]

(3) [{…}, {…}, {…}]0: {name: "Mumbai", Population: 567576, majority: "Britishers", country: "India", weather: "cold"}1: {name: "Scotland", Population: 567576, majority: "Britishers", country: "India", weather: "cold"}2: {name: "London", country: "England", Population: 567576, majority: "Britishers"}length: 3__proto__: Array(0)
city[0].name
"Mumbai"
city[1].name
"Scotland"

*****Constructor Object*****

var car = new Object();
car.brand = "Audi";
car.color = "red";
car.class = "sedan"

let num = {
    sum : function(){
        return 1+1
    }
}

let calc = {
    sum : function(a,b) {
        return a+b
    }
}

this keyword 

var person = {
    firstName : "jasmeet",
    lastName : "ahuja",
    id : 13,
    fullName : function(){
        return this.firstName + " " + this.lastName
        }
}

