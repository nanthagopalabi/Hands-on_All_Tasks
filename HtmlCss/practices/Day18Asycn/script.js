function asyncTask1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 1 is Completed");
        },1000);
    });
}
function asyncTask2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 2 is Completed");
            // reject("rejected");
        },1000);
    });
}
function asyncTask3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 3 is Completed");
        },1000);
    });
}
function asyncTask4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task 4 is Completed");
        },1000);
    });
}

// asyncTask1()
//  .then((val)=>{
//     console.log(val);
//     return asyncTask2();
//  })
 
//  .then((val)=>{
//     console.log(val);
//     return asyncTask3();
//  })
//  .then((val)=>{
//     console.log(val);
//     return asyncTask4();
//  })
Promise.all([asyncTask1(),asyncTask2(),asyncTask3(),asyncTask4(),])
 .then((val)=>{
    console.log(val);
   console.log("All task completed")
 })
 
 .catch((err)=>{
    console.log("Error:", err);
 });
 