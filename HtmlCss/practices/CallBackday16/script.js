function tempo(callback){
    console.log("stopped playing cricket")
    setTimeout(() => {
    console.log("Tempo left!!!");
callback();
}, 2000);
}

function afterTempo(){
    console.log("lets go play cricket!!!")
}

tempo(afterTempo);