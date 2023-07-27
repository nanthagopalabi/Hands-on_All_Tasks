var xhr = new XMLHttpRequest();

  //Define HTTP method and URL
   var method = "GET";  
   var url = "https://restcountries.com/v3.1/all";
   var lat = -14.33333333;
   var long = -170.0;
   var urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
  
   const link="https://restcountries.com/v3.1/all";

   fetch(link)
   .then((response)=>{
   if (response.status===200) {
       return response.json();
   }
   })
   .then((val)=>{
       for( var i=0; i<val.length; i++){
        if(val[i].name.common=="American Samoa"){
let data1="";
data1= `<div class="card1">
  <div class="title1"><div>Name: ${val[i].name.common}</div>Capital:${val[i].capital[0]}</div>
<div>Region:${val[i].region}</div>
<div>Country Code:${val[i].cca2}</div>
</div>Latlng:${val[i].latlng}</div>`
  document.getElementById("AmericanSamoa").innerHTML=data1;   
        }
      }
       for( var i=0; i<val.length; i++){
        if(val[i].name.common=="Peru"){
          let data2="";
data2= `<div class="card2">
  <div class="title2">Name: ${val[i].name.common}</div><div>Capital:${val[i].capital[0]}</div>
<div>Region: ${val[i].region}</div>
<div>Country Code: ${val[i].cca2}</div>
<div>Latlng: ${val[i].latlng}</div>`
  document.getElementById("Peru").innerHTML=data2;
        }
       }
       for( var i=0; i<val.length; i++){
        if(val[i].name.common=="Tonga"){
          let data2="";
data3= `<div class="card3">
  <div class="title3">Name: ${val[i].name.common}</div><div>Capital: ${val[i].capital[0]}</div>
<div>Region: ${val[i].region}</div>
<div>Country Code: ${val[i].cca2}</div>
<div>Latlng: ${val[i].latlng}</div>`
  document.getElementById("Tonga").innerHTML=data3;
        }
       }
       for( var i=0; i<val.length; i++){
        if(val[i].name.common=="Mayotte"){
          let data2="";
   data4= `<div class="card4">
  <div class="title4">Name: ${val[i].name.common}</div><div>Capital: ${val[i].capital[0]}</div>
<div>Region: ${val[i].region}</div>
<div>Country Code: ${val[i].cca2}</div>
<div>Latlng: ${val[i].latlng}</div>`
  document.getElementById("Mayotte").innerHTML=data4;
        }
      }
      });
       const nan1 = document.createElement("a");
        nan1.setAttribute("target", "_blank");
        nan1.setAttribute("href", "");
        const preEle = document.getElementById("country1");
        preEle.append(nan1);