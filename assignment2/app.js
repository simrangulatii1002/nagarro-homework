var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();

// 1
// 10

let x = 10;
console.log(x);
function a(){
    x=100;
    console.log(x);
}
a();
x=1000;

// 10
// 100

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();

// 100
// error: assignment to const variable

function a(){
    console.log(x);
}
a();
var x=2   

// undefined

let x;
function b(){
    console.log(x);
}
b();
x=2;
// undefined

function a(){
    console.log(x);
}
a();
let x=2 


// error: x is not defined

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);

// 10
// 20
// 30
// 2
 

 function x(){
     var a =7;
     function y(){
         console.log(a);
     }
     return y;
 }
 var z =  x();
 console.log(z);
 z();

// y(){
//     console.log(a);
// } 
// 7

function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();

// 6


function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();

// interview
// 0
// 1
// 2
// 3
// 4
// 5


const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

// question1: make copy of the object and manipulate values inthe new copied object

const copy=Object.assign({},person);
copy.name="Simran";


// question2: print all the properties using appropriate for loop 

for(let i in person){
    console.log(person[i]);
}



// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop