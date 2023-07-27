// function add(a,b){
//     try{
//         if(b>a){
//             throw new Error("B is  greater than A!!!"); //Error Handling
//         }
//         const result=a - b;
//         console.log("Result:", result);
//     }catch(err) {
//         console.log("Error occured:", err);
//     }
// }
// add(5,15);

function present(status){
    try{
        if(val<0){
            throw new Error("Value is negative");
        }
        const result=true;
        console.log("Result:", result);
    }catch(err){
        console.log("Error occured:", err);
    }
}
present(true);