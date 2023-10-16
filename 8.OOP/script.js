// Template litral  syntax

const message =`dfsdfds
sdfsdfksdjfop`

console.log(message);
const firstName="pandi"
const lastName="S"
const fullName=firstName+lastName;
console.log(fullName);
const a=12;
const b=24;

const FN=`${firstName} ${lastName} ${a+b}`;
console.log(FN);
const test=[1,2,3,4]
console.log(`${test}`)
console.log(typeof(test));
const obj={
    name:"pandi",
    age:"29"
}
console.log(`${obj}`);

const arr=[{name:"test "},{name:"zen"}]
console.log(`${arr[0].name}`)

//Object 

//New Line

// Variable-${variable}

//Prototype

const obje={
    name:"Pandi",
    age:12
}

obje.__proto__={
    printG: function(){
        console.log("Guvi Pandi")
    }
}

obje.printG();

const obj1={
    name:"Pandi",
    age:29
}

const obj2={
    name:"Aruna",
    age:24
}
obj1.__proto__.frintGuvi1=function(){
    console.log("Aruan join guvi")
}

obj2.__proto__.frintGuvi=function(){
    console.log("Pandi Join Guvi")
}

obj1.frintGuvi1();
obj2.frintGuvi();

// Prototype

Object.prototype.printGuvi=function(){
    console.log("Aruna Pandi")
}

const obj3={
    name:"Guvi Zen",
    age:21
}

obj3.printGuvi();


Array.prototype.printH=function(){
    console.log("Pandi Aruna")
}

const ar=[1,35]

ar.printH();


// What is Class in js

const student1={
    firstName:"Pandi",
    lastName:"S",
    printName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const student2={
    firstName:"Aruna",
    lastName:"P",
    printName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

student1.printName()
student2.printName()

// Parent,Super,Base

class Person{
    constructor(args){
        this.firstname=args.firstName;
        this.lastname=args.lastName;
    }
    printName= function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

// Child,Sub,Derived 

class Student extends Person {
// constructor(firstName,lastName,course){
//   super(firstName,lastName)
//   this.course=course  
// }
// setCourse(course){this.course=course}

   constructor(args){
    super(args)
    this.course=args.course
   }

}

//Child,Sub,Derived

class Mentor extends Person{
    constructor(args){
        super(args)
        this.batch=args.batch
    }
}

const student12=new Student({firstName:"Pandi",lastName:"S",course:"FullStack Developer"});
// student12.setCourse("Fullstack Developer")
const mentor=new Mentor({firstName:"Aruna",lastName:"P",batch:"B34"});
console.log(student12);
console.log(mentor);

student12.printName();
mentor.printName();


// Again Recap in Class

const coder1={
    firstName: "Pandi",
    lastName:"Durai",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

coder1.getFullName();

const coder2={
    firstName:"Durai",
    lastName:"Pandi",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

coder2.getFullName()

// Parent,Super,Base

class Computer{
    constructor(firstName,lastName){
        this.firstname=firstName,
        this.lastname=lastName;
    }
    getFullName=function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

class Coder extends Computer {
    constructor(firstName,lastName,language){
        super(firstName,lastName)
        this.language=language;
    }
    getCourse=function(){
        console.log(this.language)
    }
}

class Programmer extends Computer{
    constructor(firstName,lastName,program){
        super(firstName,lastName)
        this.program=program;
    }
    getCourse=function(){
        console.log(this.program)
    }
    
}

const coder3=new Coder("Arasan","P","Javascript")
console.log(coder3);
coder3.getFullName();
coder3.getCourse();
const coder4=new Coder("Aruan","Pandi","Java")
console.log(coder4);
coder4.getFullName();
coder4.getCourse();

const programmer1=new Programmer("Tamil","Sekar","C");
console.log(programmer1)
programmer1.getFullName();
programmer1.getCourse();


// Need of setters/getters

const vin={
    firstName:"Guvi",
    lastName:"Zen",
    get FullName(){
        return `${this.firstName}${this.lastName}`
    },
    set sAge(age){
        this.age=age;
    }
}
console.log(`${vin.firstName} ${vin.lastName}`)
console.log(vin.FullName);
vin.sAge=29;
console.log(vin);


// Recap class

const user1={
   firstName:"Pandi",
   lastName:"S"
}

const user2={
    firstName:"Aruna",
    lastName:"Pandi"
}

const user3={
    firstName:"Prakash",
    lastName:"T"
}

console.log(`${user1.firstName} ${user1.lastName}`);
console.log(`${user2.firstName} ${user2.lastName}`);
console.log(`${user3.firstName} ${user3.lastName}`);


class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set Age(age){
        this.age=age
    }
}


const user11=new User("Guvi","Xen");
const user22=new User("Tamil","Sekar");
const user33=new User("Test","Pandi");
user11.age=20;
console.log(user11.age);
user22.age=55;
console.log(user22.age);
console.log(user11);
console.log(user11.fullName);
console.log(user22.fullName);
console.log(user33.fullName);