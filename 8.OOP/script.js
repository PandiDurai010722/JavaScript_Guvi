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