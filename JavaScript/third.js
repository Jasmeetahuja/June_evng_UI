var city = "london"
undefined
city.toUpperCase()
"LONDON"
var city = "mumBai"
undefined
city.toLocaleLowerCase()
"mumbai"
var city = "mumBai"
undefined
city.toLowerCase()
"mumbai"
var city = "Amsterdam"
undefined
city[0]
"A"
city[5]
"r"
city.length
9
var city = " Amsterdam "
undefined
city.length
11
city.trim()
"Amsterdam"
var news = "India won the cricket match"
undefined
news.replace("India","Australia")
"Australia won the cricket match"
news.replace("won", "loose")
"India loose the cricket match"

var mytxt= "https://www.w3schools.com/icons/default.asp"
undefined
mytxt.split("/")
(5) ["https:", "", "www.w3schools.com", "icons", "default.asp"]
var out = mytxt.split("/")
undefined
out
(5) ["https:", "", "www.w3schools.com", "icons", "default.asp"]
out.join()
"https:,,www.w3schools.com,icons,default.asp"
out.join("")
"https:www.w3schools.comiconsdefault.asp"
var myname= "jasmeet"
undefined
myname.split("")
(7) ["j", "a", "s", "m", "e", "e", "t"]

var lang = "javascropt"
undefined
lang.charAt(0)
"j"
lang.charAt(3)
"a"
lang.slice(1)
"avascropt"
lang.slice(2)
"vascropt"
lang.slice(2,5)
"vas"
lang.slice(1,7)
"avascr"

var a = "jAVaSCRipt"
undefined
a.charAt(0)
"j"
a.charAt(0).toLocaleUpperCase()
"J"
a.slice(1)
"AVaSCRipt"
var out1 = a.charAt(0).toUpperCase()
undefined
var out2 = a.slice(1)
undefined
out1
"J"
out2.toLowerCase()
"avascript"
out1+out2.toLowerCase()
"Javascript"