// Higher Order Function

// 1.Function has another function as parameter

function test1(){
    console.log("Test...")
}
test1();

function test2(t){
    t()
}
test2(test1);

function test(t){
    t();
}
test(function(){console.log("Root...")})

const arr=[2,5,6];
arr.forEach(function(a){console.log(a)});

function test11(){
    console.log("Test1...")
}

function test12(tFun){
    console.log(tFun)
    tFun();
}
test12(test11);

const array=[2,5,6]

function double(ele){
    console.log(ele*2);
}
array.forEach((ele)=>{double(ele)})
array.forEach(double)

//Function has returns another function

function printGuvi(){
    return function(){
        console.log("Guvi")
    }
}

console.log(printGuvi());

const print=printGuvi();
console.log(print)
print()

// Array Function && Array Methods

const ArrInp=[1,2,3,4,5];
console.log(ArrInp);

//Map=> The map() method of Array instances creates new array populated with the results
//  of calling a provided function on every elements in the calling array

const arrOp=ArrInp.map((ele)=>ele*ele);
console.log(arrOp)

// const ArrOp=[1,4,9,16,25];

const ArrOp=[];
for (const ele of ArrInp){
    ArrOp.push(ele*ele);
}

console.log(ArrInp);
console.log(ArrOp);


// Filter //arrop[2,4] => The filter() method of Array instances creates a shallow copy
// of a portion of a given array,filtered down to just the elements from the given array that pass 
// the test implemented by the provided function

const arrop2= ArrInp.filter(ele=>ele%2==0)
console.log(arrop2)

for(const ele of ArrInp){
    if(ele %2==0){
        ArrOp.push(ele);
    }
}
console.log(ArrOp)

// Reduce=> The reduce() method of Array instances executes a user supplied "reducer" callback fucntion on each element of the array
// in order,passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
const ari=[2,3,5,8,10]
const arrop=ari.reduce((acc,ele)=>{
    acc+=ele;
    return acc
},0)
console.log(arrop);

let sum=0;
for(const ele of ari){
    sum+=ele;
}
console.log(sum);


// Maximam find out in array

let max=0;
for(let index=0;index<ari.length;index++){
    if(ari[index]>max){
        max=ari[index];
    }
}
console.log(max);

const arrop4=ari.reduce((max,ele)=>{if(ele>max){
    max=ele;
}return max;})

console.log(arrop4)

const users=[{firstName:"Pandi",lastName:"Durai",age:29},
{firstName:"Aruna",lastName:"Pandi",age:29},
{firstName:"Siva",lastName:"Thivilan",age:1}]

const fullName=users.map(({firstName,lastName})=>`${firstName} ${lastName}`)
console.log(fullName);

const out={};

users.forEach(({age})=>{
    out[age]=out[age] ?++out[age]:1
});

console.log(out);

const out1={}
users.forEach((ele)=>{
    if(out1[ele.age]){
        out1[ele.age]=++out1[ele.age];
    }else{
        out1[ele.age]=1
    }
})
console.log(out1);

const outp=users.reduce((acc,{age})=>{
    acc[age]=acc[age]? ++acc[age]:1
    return acc;
},{});
console.log(outp);
console.log(Object.keys(outp));

const age20=users
.filter(({age})=>age>=20)
.map(({firstName,lastName})=>`${firstName} ${lastName}`)
.filter(u=>u.startsWith("P"))

console.log(age20)
