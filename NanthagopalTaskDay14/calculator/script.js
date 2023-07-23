    let outputscreeen=document.getElementById("optscreen");
    function display(num){
    outputscreeen.value += num;
    }

function calculate(){
    try{
        outputscreeen.value=eval(outputscreeen.value)
    }
    catch(err){
        alert("Only numbers are allowed")
    }
}
    const deleteButton=document.getElementById("delete");
    deleteButton.addEventListener("click", function(){
        outputscreeen.value= outputscreeen.value.slice(0,-1);
    });

    const clearButton=document.getElementById("clear");
    clearButton.addEventListener("click", function(){
        outputscreeen.value= "";
    });

    const numOne=document.getElementById("one");
    numOne.addEventListener("click", function(){
        outputscreeen.value+= ('1');
    });
    const numTwo=document.getElementById("two");
    numTwo.addEventListener("click", function(){
        outputscreeen.value+= ('2');
    });
    const numThree=document.getElementById("three");
    numThree.addEventListener("click", function(){
        outputscreeen.value+= ('3');
    });
    const numFour=document.getElementById("four");
    numFour.addEventListener("click", function(){
        outputscreeen.value+= ('4');
    });
    const numFive=document.getElementById("five");
    numFive.addEventListener("click", function(){
        outputscreeen.value+= ('5');
    });
    const numSix=document.getElementById("six");
    numSix.addEventListener("click", function(){
        outputscreeen.value+= ('6');
    });
    const numSeven=document.getElementById("seven");
    numSeven.addEventListener("click", function(){
        outputscreeen.value+= ('7');
    });
    const numEight=document.getElementById("eight");
    numEight.addEventListener("click", function(){
        outputscreeen.value+= ('8');
    });
    const numNine=document.getElementById("nine");
    numNine.addEventListener("click", function(){
        outputscreeen.value+= ('9');
    });
    const numZero=document.getElementById("zero");
    numZero.addEventListener("click", function(){
        outputscreeen.value+= ('0');
    });

    const numZero2=document.getElementById("zero2");
    numZero2.addEventListener("click", function(){
        outputscreeen.value+= ('00');
    });
    const numDot=document.getElementById("dot");
    numDot.addEventListener("click", function(){
        outputscreeen.value+= ('.');
    });
    const addEle=document.getElementById("add");
    addEle.addEventListener("click", function(){
        outputscreeen.value+= ('+');
    });
    const addmplus=document.getElementById("mplus");
    addmplus.addEventListener("click", function(){
        outputscreeen.value+= ('+');
    });

    const addmminus=document.getElementById("mminus");
    addmminus.addEventListener("click", function(){
        outputscreeen.value+= ("-");
    });

    const addmrc=document.getElementById("mrc");
    addmrc.addEventListener("click", function(){
        outputscreeen.value=eval(outputscreeen.value);
    });
    const addEle1=document.getElementById("sub");
    addEle1.addEventListener("click", function(){
        outputscreeen.value+= ('-');
    });
    const addEle2=document.getElementById("multi");
    addEle2.addEventListener("click", function(){
        outputscreeen.value+= ('*');
    });
    const addEle3=document.getElementById("div");
    addEle3.addEventListener("click", function(){
        outputscreeen.value+= ('/');
    });
    const addEle4=document.getElementById("modulus");
    addEle4.addEventListener("click", function(){
        outputscreeen.value+= ('%');
    });
    const sqreButton=document.getElementById("root");
    sqreButton.addEventListener("click", function(){
        outputscreeen.value= Math.sqrt(outputscreeen.value);
    });
    