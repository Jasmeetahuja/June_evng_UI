for(i=0; i<10; i++){
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

var city = ['london','venice','austria','mumbai','amsterdam']
for(i=0; i<city.length; i++){
    console.log(city[i])
}
VM47:3 london
VM47:3 venice
VM47:3 austria
VM47:3 mumbai
VM47:3 amsterdam

var num = [2,6,76,546,67,89,76576,546545,76,34,55]
for(i=0; i<num.length; i++){
    if(num[i]%2===0){
        console.log('even>>> ', num[i])
    }else{
        console.log('odd>>>> ', num[i])
    }
}
VM59:4 even>>>  2
VM59:4 even>>>  6
VM59:4 even>>>  76
VM59:4 even>>>  546
VM59:6 odd>>>>  67
VM59:6 odd>>>>  89
VM59:4 even>>>  76576
VM59:6 odd>>>>  546545
VM59:4 even>>>  76
VM59:4 even>>>  34
VM59:6 odd>>>>  55