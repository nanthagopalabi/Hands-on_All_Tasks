const link="https://restcountries.com/v3.1/all";

fetch(link)
.then((response)=>{
if (response.status===200) {
    return response.json();
}
})
.then((val)=>{
    console.log(val);
    for (var i=0; i<val.length; i++){
        console.log(val[i].flag);
    }
})
.catch((err)=>{
    console.log("Error: ", err);
});