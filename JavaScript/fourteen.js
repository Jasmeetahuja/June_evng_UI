// class car3 {
//     constructor(brand){
//         this.carName = brand;
//     }
//     current() {
//         return "I have a" +" " + this.carName;
//     }
// }


//mycar = new car3('Audi')

function Person(a,b,c,d) {
    this.firstName = a;
    this.lastName = b;
    this.age = c;
    this.eyecolor = d;

}

var Myperson = new Person("Jasmeet", "Ahuja", 26, "black");
document.getElementById("mainpage").innerHTML= "My Son is" +" " + Myperson.age + ".";