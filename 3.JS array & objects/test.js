// Primitive data 

var name = "Guvi"; //String 
name =34;// redeclare 
var age = 20; // Number 
var age1 = "20";//String 
var Price = 12.568;//Number
var isActive =true ; //Boolean 


console.log(name);
console.log(age);
console.log(age1);
console.log(Price);
console.log(isActive);

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(age1));
console.log(typeof(Price));
console.log(typeof(isActive));


// Trivial Data 

var name2=null;
var name3;

console.log(name2);
console.log(name3);
console.log(typeof(name2));
console.log(typeof(name3));

//Composite data 

//1.Object (key,value)

var student ={
    name:"Guvi",
    age :29,
    price:12.569,
    isActive:true,
    phone:[{no:9976773262,country:"IN"},{no:8754108622,country:"US"},{no:8754964504,country:"IN"}],
    address:[{no:12,street:"Kamaraj street",pin:627851,test:[1,2,3]}]
}

console.log(student);
student.name="Zen";
student.city="Chennai";
delete student.age;// .Dot operator method
console.log(student)
student.age=27;
student["attaendence"] =23; //of operator 
var test ="age"
student[test]=24;
console.log(student);
console.log(typeof(student));
console.log(student.address[0].pin);
console.log(student["address"][0]["pin"]);
console.log(student.phone[1].no);
console.log(student.phone[0]["no"]);
console.log(student.address[0].test[2]);

//Array // Collection of multiple type of data called array

var student=["Guvi",//0
23,//1
23.56,//2
true,//3
{name:"Pandi"},//4
[1,2,3,4]//5

];
console.log(student[4].name);
student[4].name="Aruna";
console.log(student[4].name);
console.log(typeof(student));

// Array of string 
// Array of Number
// Array of Bolean
// Array of array

// 3. Funciton

// copy by value

var str1="Guvi";
var str2 =str1;

console.log(str1);// Guvi
console.log(str2);// Guvi
str2="Zen";
console.log(str1); //Guvi
console.log(str2); //Zen

// Copy by reference

var obj1={name:"Guvi"}
var obj2= obj1

console.log(obj1);
console.log(obj2);

obj2.name="Zen";
console.log(obj1)
console.log(obj2)

obj1.name="Test";

console.log(obj1);
console.log(obj2);

var array =[1,2,3]
var array1=array;

console.log(array);
console.log(array1);

array1[1]="TEST";
console.log(array);
console.log(array1);

array[0]="Guvi";
console.log(array);
console.log(array1);

// JSON -Javascript Object Notation
