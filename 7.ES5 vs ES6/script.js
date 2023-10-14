// var name ="Guvi"
//console.log(window);

//var global object 

//let block scope

let name= "Guvi";

if (true){
    let name="Zen"
    console.log("Inside Block",name);
}

console.log("Outside Block",name);

function setName(){
    let name="class";
    console.log(name)
}
setName();
console.log("Outside Block",name);

//variable Hoisting

name1="Guvi"// window.name="Guvi";
var name1;//window.name=undefinded

console.log(name1);

let na1="Guvi";
na1="Zen"

console.log(na1);

//var - Redeclare/Reintialize or(Reassgin)
//let - Not Redeclare/Reintialize
//const - Not Redecalre /Not Reintialize

// Spread operator

var obj={City:"Alangulam",Pincode:627851}
var obj1={name:"Guvi",age:20};
var obj2={...obj1,age:12,test:"tamil"}//Object.assign({city:"Chennai",age:18},obj1)
obj1.name="Zen";
console.log(obj)
console.log(obj1);
console.log(obj2);

var ans=Object.assign({city:"Chennai",age:18},obj1)
console.log(ans);

var arr1=[1,2,3,4];
var arr2=[5,6,7,8];

var arr3=[...arr1,...arr2];
arr2=[1]

console.log(arr1);
console.log(arr2)
console.log(arr3);


// Rest Parameter

function sum(...ar){
    let sum=0;
    ar.forEach(a=>sum=a+sum)
    return sum;
}
var arr=[10,34,45,54,57]
console.log(arr);
console.log(...arr);
console.log(sum(...arr))


// Destructuring 
// Object 

var user={
    names:"Guvi",
    age:21,
    city:"Chennai"
}

var nameu=user.names;
var ageu=user.age;
var cityu=user.city;
console.log(nameu,ageu,cityu);
var {names:uname,age:uage,city:ucity}=user;
console.log(uname,ucity,uage)




var us = [{
    color: "red",
    value: "#f00"
},
{
    color: "green",
    value: "#0f0"
},
{
    color: "blue",
    value: "#00f"
},
{
    color: "cyan",
    value: "#0ff"
},
{
    color: "magenta",
    value: "#f0f"
},
{
    color: "yellow",
    value: "#ff0"
},
{
    color: "black",
    value: "#000"
}
];
us.forEach(({color,value})=>{console.log(color,value)})

//  Array Desturcturing

var ary=[
    [1,2,3],
    [4,5,6]
];
ary.forEach(([fE,sE])=>{
    console.log(fE,sE)
})


const api = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [
            { "id": "1001", "type": "Regular" },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }
        ]
    },
    "topping": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
    ]
}
const {id,batters:{batter}}=api
console.log(id,batter[2].type);

const num=[[1,2,3],[5,6,7]]

num.forEach(([n1])=>console.log(n1));
console.log(num[0][0])