function CalciOpe(opr){
    // const num1=Number(document.getElementById("num1").value);
    // const num2=Number(document.getElementById("num2").value);
    const num1=Number(prompt("Enter the value of num1:"));
    const num2=Number(prompt("Enter the value of num2:"));
    let result;
    switch(opr){
        case "add":
            result= num1 + num2;
            break;
        case "sub":
            result= num1 - num2;
              break;
        case "mul":
            result= num1 * num2;
            break;
        case "div":
             result= num1 / num2;
           break;
          default:
         result="Invalid";

    }
    const msg=confirm("do you want to continue to the result?");
    if(msg){
        document.getElementById("result").innerText=result;
    }else{
        document.getElementById("result").innerText="Result can not be shown!!"; 
    }
    // alert(result);
    // document.getElementById("result").innerText=result;
}