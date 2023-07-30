alert("Happy World Poetry Day!!!");
async function fetchData() {
    const apiUrl = "https://poetrydb.org/title/Ozymandias/lines.json";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json(); 
      const array=Object.values(data);
      for(const element of array){
      const parentEle=Object.values(element);
      document.getElementById("box").innerText=parentEle;
      }
    } catch (err) {
    document.write(`Error fetching Data: ${err}`);
      }
}
fetchData();