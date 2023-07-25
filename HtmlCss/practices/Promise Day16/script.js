let promiseObj= new Promise((resolve, reject)=>{
console.log("Check for the stock!!!");
// resolve("Place the order");
reject("Outof Stock");
});
console.log(promiseObj);

promiseObj.then(
    (val)=>{
        console.log("Order status----", val);
    },
    (err)=>{
        console.log("Order status----", err)
    }
);