// Frontend <=> Backend <=> Database
// Netlify   Heroku  Mongo Atlas

//Variables
// var<name>=<value>

var user=[1,"asdas",{}, [],true,null,undefined]
var user={name:"Guvi",
           age:12  }

console.log(typeof("Guvi"));//String
console.log(typeof(1));//number
console.log(typeof(true));//boolean
console.log(typeof({}));//object
console.log(typeof([]));//object
console.log(typeof(function test(){}));//function
console.log(typeof(null));//object
console.log(typeof(undefined));//undefined

// Arthmatic Operator

// + => Addition
// - => Subtraction
// * => Multiplication
// / => Divition //quation
// % => Module // Remainder


console.log(1+2);
console.log(3-1);
console.log(4*3);
console.log(10/4);
console.log(10%4);
console.log(5**2);
console.log(5**3);


// Increment Operator

var i =10;
//i=i+1;
//i++
console.log(i++);//post increment//10
console.log(i);//11
console.log(++i);//Pre Increment//12
console.log(i);//12


//Decrement Operator
var j=20;
// --j
console.log(j--);//Post Decrement //20
console.log(j);//19
console.log(--j);//18
console.log(j);//18

//Post Increment
var m=1;
//m=m+1;
m++;
console.log(m);
m+=4;//(m=m+4);
console.log(m)

// Asignment Operator =

var k=1;
k=k+1;
console.log(k);
k+=2;
console.log(k);
k++;
console.log(k);

// for(intializtion;condition ;iterator){}

for (var i=1;i<10 &&i%2;i++){
    console.log(i);
}

// i=1=> 1 < 10 && 1 % 2; true , true=>1
// i=2=> 2 < 10 && 2 % 2; true , false=>x
// i=3=> 3 < 10 && 3 % 2; true , textUnderlinePosition:

// + => Addition
// - => Subtraction
// * => Multiplication
// / => Devision
// % => Reminder


// While //infintinty loop

var i =0;
while (i<10){
    console.log(i);
    i++;
}


// for in loop in array => it is print only array index position

var arr=[1,2,3];
for (var index in arr){
    console.log(index)
    console.log(arr[index])
}

// for in loop in object => it is print only object key value

var data={name:"Pandi",age:29}
for (var index in data){
    console.log(index,data[index])
    }

// for of  only used to Iterate an array also print the array index value 

var value=[3,4,5]
for(var i of value){
    console.log(i)
}

// do while

var k =5;
do{
    console.log(k);
    k++;
}while(k<=10)

// Iteration/Looping Statement 

// For(initilzation;condition;iterator)
// For in(Array -index ,object - key)
// For of 
// While 
// Do While

// Arithmatic Operators

// =>Sum(+)
// =>Difference (-)
// =>Product(*)
// =>Quotient(/)
// =>Reminder(%)
// =>Power(**)

//Comparative Operators
// >  - Greater Than
// <  - Lesser Than
// >= - Greater Than Equal To
// <= - Lesser Than Equal To
// == - Value  Check (No Deep Check)
// === - Value and Type Check(Deep Check)
// != - Not Equals to value Check
// !== - Not Equals to Value and Type Check

//  Ternary Operator 

//  ?:

 var Ternary=(-5>0)?console.log("Five is greater"):console.log("Five is Lesser")

 function find(a,b){
    return a>b?console.log("A is greater than B"):console.log("A is Lesser than B")
 }
find(5,10);
find(5,2);

//Conditional Statements

var i =1;

if(i>=1){
    console.log(i)
}else{
    console.log("Guvi")
}

var t= true; 
//""-false,
// 0-false,
// null-false,
// undefined-false, 
// NaN-false
// " "- true

if(!t){  //(!t)=> not true or false
    console.log("Test")
}else{
    console.log("Pass")
}

var q =4;

if (q==1){
    console.log("One")
}else if (q==2){
    console.log("Two")
}else if (q==3){
    console.log("Three")
}else if (q==4){
    console.log("Four")
}else{
    console.log("Else")
}

var f =4;
if(f>5 && f<=10){
    console.log(f)
}
if(f>=25 || f<=10){
    console.log(f)
}

// Type Conversion

var test ="1256"
console.log(test)

test =Number(test);//Number()
console.log(test);
test =String(test);//String()
test=Boolean(test);//Boolean()
test=parseInt(test);//parseInt()
test=parseFloat(test);//parseFloat();

console.log(test);
console.log(typeof(test));

var user = `{

    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }

}
`
console.log(typeof(user));
user=JSON.parse(user);
console.log(user.name)
console.log(typeof(user))

// JSON array of object 


var users = `[    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
}]`
console.log(typeof(users));
users=JSON.parse(users);
console.log(typeof(users));

for(var i of users){
    console.log(i.name)
}

function printData(users){
    console.log(users.website);
}
users.forEach(printData)

users.forEach(d=>printData(d));
