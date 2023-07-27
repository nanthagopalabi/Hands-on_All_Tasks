function getToy(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Not a Teddy");
            // resolve("Teddy Bear")
        }, 2000);
    });
}

async function playwithToys(){
    console.log("Let's Play with cars and blocks!!");
    try{
        const toy = await getToy();
        console.log("I got Teddy Bear")
        console.log("I am happy")
    }catch(err){
        console.log("Oops Something went Wrong", err);
    }
}
playwithToys()