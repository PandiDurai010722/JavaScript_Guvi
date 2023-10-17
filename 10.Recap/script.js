// Array Methods 

 // Map
 // Reduce
 // filter 
//  ForEach
//  join
//  Push
//  Pop
//  Splice 
//  toString 
//  Shift 
//  Unshift 
//  find 
//  findIndex 
//  Concat
//  Every
//  Values


//  The built - in array method in javascript 

//  At = The at() method take an integer value and returns the item at that index.allowing for positive and negative integers.
//     Negative integers count back from the last item in the array.

const arr1=["Durai",{name:"Pandi"},52,12]
console.log("At() Method of Array")
console.log(arr1[2]);
console.log(arr1.at(2));
console.log(arr1.at(-3));


//  concat():The concat() method is used to merge two or more arrays. This method does not change the existing arrays,but instead returns a new array.

const arr2=[1,2,3,4];
const arr3=[5,6,7,8];
const arr4=[9,10,11,12];
const arr5=arr2.concat(arr3,arr4);
console.log("Concat() Method of Array");
console.log(arr5);

console.log(arr3);// does not change the existing array

console.log("Spread Operator")
const arr6=[0,...arr2,...arr3,...arr4];
console.log(arr6);

//copyWithin(): Copies a squence of elements within the array to the position starting at the target index.

const arr7=[10,20,30,40,50]

console.log(arr7.copyWithin(0,2,4));

//entries(): Returns an iterator object that contains the key - value pairs
//for each index in the array

const arr8=[1,2,3,4,5];
const iterator=arr8.entries();
console.log("entries()")
console.log(iterator)
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// every(): The every() method tests whether all elements in the array pass the test implemented by the provided function.It returns a Boolean value.
const arr9=[5,9,10,11,12,13];
const arr10=[];

arr9.forEach(a=>{
    if(a>6){
        return arr10.push(a)
    }
})
console.log(arr10)
console.log("every()")

const isgreaterthan6=arr9.every((a)=>a>6);
console.log(isgreaterthan6)

// filter(): Creates a new array with all elements that pass a certain test.
const arr12=[11,22,33,333,444]
const ans1=arr12.filter((a)=>a>50);
console.log("filter");
console.log(ans1);

// find(): Returns the value of the first element in an array that passes certain test.
const arr13=[1,25,3,4,3,9];
const test1=arr13.find((a)=>a>4);
console.log("find()");
console.log(test1);

// findIndex(): Returns the index of the first element in an array that passes a certain test.

const arr14=[9,34,544,3499,35];
const test2=arr14.findIndex((a)=>a>500);
console.log("findIndex()");
console.log(test2);

// flat(): Creates a new array with all sub -array elements concatented into it recursively up to the specified depth.
const arr15=[0,1,2,[4,5]];
const an2=arr15.flat()
console.log(an2);

//  flatMap(): Creates a new array with the results of calling provided

const arr16=[1,2,1,2];
const results=arr16.flatMap((num)=>(num===2?{name:"pandi"}:1));
console.log(results);

// function on every element in the array,and then flattening  the result by one level.

// forEach(): The forEach() method of array instances executes a provided function once for each element
const arr17=["a","b","c"];
arr17.forEach((ele)=>console.log(ele));

// includes(): Determine  whether an array includes a certain element 
const arr18=[1,354,35,69,78];
console.log("includes()");
console.log(arr18.includes(8));

// indexOf(): Returns the first index at which a given element can be found in the array,or -1 
// if it is not present.
const arr19=[45,23,89,79,23];
console.log("indexOf")
console.log(arr19.indexOf(23));

//join(): Join all elements of an array into a string 
const obj={name:"Guvi"};
const obj1=[21,878];
console.log(obj1.toString());
console.log(obj.toString());
console.log("Join()");

const arr=["Guvi",[23,56],52,12];
console.log(arr.join(" "));
console.log(arr.join());
console.log(arr.join(""));

// keys(): Returns an iterator object that contains the keys 

// for each index in the array 

const arr20=[23,45,75,68];
console.log("keys");
console.log(arr20.keys());
const ts=arr20.keys();
console.log(ts.next().value);
console.log(ts.next().value);
console.log(ts.next().value);
console.log(ts.next().value);

// lastIndexOf(): Returns the last index at which a given element can be found in the array,or -1
// if it is not present.

const arr21=[38,78,29,37,38];
console.log("lastIndexOf()");
console.log(arr21.lastIndexOf(38));

// map(): Creates a new array with the results of calling provided
const arr22=[2,4,5,6,7,8];
console.log("map()");
console.log(arr22.map((a)=>a*2));
console.log(arr22);

// function on every element in the array 

// reduce(): Applies a function against an accumulator and each element in the array to reduce it to  single value.
const  arr25=[2,3,4,6,8,9];
console.log("reduce");
const ans5=arr25.reduce((acc,cur)=>{acc=acc*cur;
return acc;
},10);
console.log(ans5);

//reduceRight(): Applies a function against an accumulator and each element in the arry(from right to left)to reduce it to a single value.
const arr26=[[0,1],[2,3],[4,5]];
console.log("reduceRight");
const res7=arr26.reduceRight((acc,cur)=>acc.concat(cur));
console.log(res7);

// slice(): Return a shallow copy of a portion of an array into a new array object selected from start to end
//            (end nto included).


const names1=["Pandi","Durai","SivaThivilan","Aruna"];
console.log("slice()");
names1.slice(1);
console.log(names1);
console.log(names1.slice(1));
console.log(names1.slice(1,4));
console.log(names1.slice(2,3));
console.log(names1.slice(-1));
console.log(names1.slice(1,-1));
console.log(names1.slice(-4));
console.log(names1.slice(-4,-1));

// some(): Checks if at least one element in the array passes a certain test. It will return boolean value.

const arr28=[1,23,35,76,85,65,95];
console.log("some()");
console.log(arr28.some((a)=>a>20));
console.log(arr28.some((a)=>a>90));

// every(): Checks if every element in the array passes a certain test. It will return boolean value.
console.log("every()");
console.log(arr28.every((a)=>a>90));
console.log(arr28.every((e)=>e>1));
console.log(arr28.every((c)=>c>0));

//toLocaleString(): Returns a string representing the array.
const array1=[1,"a",new Date('17 Oct 2023 09:22:00 UTC')];
const localestring=array1.toLocaleString("en",{timeZone:'UTC'});
console.log(localestring);

//toString(): Returns a string representing the array.
const array2=[1,2,'a','1a'];
console.log(array2.toString());

//values(): Returns an iterator object that contains the values for each index in the array.
const ar=[1,2,3,5];
const ar1=ar.values();
console.log(ar1.next().value);
console.log(ar1.next().value);
console.log(ar1.next().value);
console.log(ar1.next().value);


// Modify methods in original array

// pop(): Removes the last element from an array and returns that element.

const arr23=[12,38,76,83];
console.log("pop()");
console.log(arr23);
console.log(arr23.pop());//83
console.log(arr23);//[12,38,76];

// push(): Adds on or more elements to end of an array,and returns the new length of the array.
const arr24=[2,3489,9830,238];
console.log("push()");
console.log(arr24);
arr24.push(123);
console.log(arr24);

// shift(): Removes the first element from an array and returns  that elements.
const names=["Tami","Guvi","Zen","Test"];
console.log("shift()");
names.shift();
console.log(names);

// reverse(): Reverses the order of the elements in an array.
const arr27=[1,2,3,45,65];
console.log("reverse()");
// console.log(arr27.reverse());
arr27.reverse();
console.log(arr27);

//  sort(): Sorts the elements of an array.

const months=["March","Jan","Feb","Dec"];
months.sort();
console.log(months);

const numbers=[1,3,45,4,7,38,89,45];
numbers.sort(((a,b)=>{return a-b}));
console.log(numbers);

// splice(): Adds or removes elements from an array.

const names3=["Aruna","SivaThivilan","Pandidurai","Thivies"];
//difference so use slice():
console.log(names3.slice(2));//["Pandidurai","Thivies"]
console.log(names3.slice(2,3));//["Pandidurai"]
console.log(names3.slice(3,4));//["Thivies"]
console.log(names3.slice(3));//["Thivies"]
console.log(names3.slice(0,2))//["Aruna","SivaThivilan"];
console.log(names3.slice(-3,-2));//["SivaThivilan"];
console.log(names3.length);
console.log(names3.slice(1,4));//["SivaThivilan","Pandidurai","Thivies"];
console.log(names3.slice(0,4));//["Aruna","SivaThivilan","Pandidurai","Thivies"];

const month=['Jan','March','April','June'];
month.splice(3,0,"may");
month.splice(1,0,"feb");
month.splice(6,0,"Dec");
month.splice(6,1,"jully")
console.log(month);


//unshift(): Adds one or more elements to the beginning of an array,and returns the new length of the array.

const array3=[1,2,3];
array3.unshift(4,5,6,7,8)
console.log(array3);

// fill() Fills all the elements in array with a static value.
const arr11=[44,55,66,77];
ans=arr11.fill(0,1,4);
console.log(ans);

//Object Methods

// entries => {key,value}

const user={
    name:"Guvi",
    age:20,
    city:"Alangulam"
}

console.log(Object.entries(user));//output=>[["name","Guvi"],['age',20],['city','Alangulam']]
console.log(Object.keys(user));//output=>['name','age','city']
console.log(Object.values(user));//output=>['Guvi','20','Alangulam']


//Keys => keys
//values=>values

const numbe=[1,2,3,4,5];
const eIt=numbe.entries();
for(const it of eIt){
    console.log(it)
}

const KIt=numbe.keys();
for (const kt of KIt){
 console.log(kt)
}

//Recall leason

//var => Can Reassigned and Redeclared
var name ="Guvi";
name="Test";
var name="Ane";
name="Tamil";
console.log(name);

// let=> Can Reassigned Can't Redeclared

let name1="Aruna";
name1="Pandi";
console.log(name1);

// Const=> Can't Reassigned  also Can't Redeclared 
const name2="SivaThivilan";
//name2="Thivies"; Can't Reassigne
// const name2// Through error can't Redecalre
console.log(name2);

// block Scoping
function print(){
    if(true){
        var tr="Guvi"
    }
    console.log(tr);
}
print();

// spread Operator 

// Speread => Object and array

const ob1={name:"Guvi"};
const ob2={...ob1}

ob2.name="Zen";
console.log(ob1.name);
console.log(ob2.name);

const arrr1=[25,845,464,848];
const arrr2=[12,42,53,43];
const arrr3=[100,...arrr2,100,...arrr1];

arrr3.push(987);
console.log(arrr1);
console.log(arrr2);
console.log(arrr3);

//Rest parameter

const sum=(...num)=>console.log(num.reduce((acc,num)=>acc+num));
sum(10,20,30,40,50);
sum(2,4,6,8);
sum(1,2,3);

// Array & Object Destructure

const ari=[{name:"Guvi",age:20},{name:"Zen",age:30},{name:"Test",age:40}]
console.log(ari.map(({name})=>name));

// const name10=ary[0];
// const name20=ary[2];
// console.log(name10);   // => Old Method
// console.log(name20);

const [name10,name20,_,name40]=["Tamil","Xrn","Guvi","Test"];
console.log(name10,name20,name40);

//Object property Shorthand

const ob ={name:"Sivathivilan"}
console.log(ob.name)
console.log(ob["name"]);

// Template literals => new line adding string ; concat

const great =`Hello tamil
how are you`

console.log(great);

const fname="Tami";
const lname="Durai";
console.log(`${fname} ${lname} ${Lname="da"}`)

