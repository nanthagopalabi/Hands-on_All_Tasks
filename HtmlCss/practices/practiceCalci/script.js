function CalciPer(opr){
const num1= Number(document.getElementById("input1").value);
const num2= Number(document.getElementById("input2").value);
// if(num1!=Number ){
//     alert("Only numbers are allowed");
// }
let result;
switch(opr){
case "add":
    result= num1+num2;
    break;
case "sub":
    result= num1-num2;
    break;
case "multi":
    result= num1*num2;
    break;
case "div" :
    result= num1/num2;
    break;
case "modulus" :
    result= num1%num2;
    break;
default:
    alert(result="Only numbers are allowed");
}
document.getElementById("result").innerText=result;
}


const addEle=document.getElementById("add");
addEle.addEventListener("click", function(){
    CalciPer("add");
});
const addEle1=document.getElementById("sub");
addEle1.addEventListener("click", function(){
    CalciPer("sub");
});
const addEle2=document.getElementById("multi");
addEle2.addEventListener("click", function(){
    CalciPer("multi");
});
const addEle3=document.getElementById("div");
addEle3.addEventListener("click", function(){
    CalciPer("div");
});
const addEle4=document.getElementById("modulus");
addEle4.addEventListener("click", function(){
    CalciPer("modulus");
});

// document.addEventListener("modulus", function() {
//     const calculateBtn = document.getElementById("modulus");
//     const numeratorInput = document.getElementById("input1");
//     const denominatorInput = document.getElementById("input2");
//     const resultParagraph = document.getElementById("result");
// });

// setInterval(function(){
//     alert("Hi. How are you??");
// },5000);
// setTimeout(function(){
//     alert("This message will be logged after 9 seconds!!!");
// },9000);