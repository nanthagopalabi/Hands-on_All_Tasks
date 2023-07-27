function foodMenu(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject("Not a Teddy");
            resolve("Pizza");
        }, 2000);
    });
}

async function welcomeDrink(){
    console.log("Welcome with mocktail!!");
    try{
        const toy = await foodMenu();
        console.log("Your Pizza is ready")
        console.log("Finish with cocktail")
    }catch(err){
        console.log("Your Oredr is not available", err);
    }
}
welcomeDrink()