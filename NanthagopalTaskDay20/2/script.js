alert("Are you sure, Do you want to read the Tirukural???");
async function fetchData() {
    const apiUrl = "https://api-thirukkural.vercel.app/api?num=1";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const parentEle=Object.values(data);
      document.getElementById("box").innerText=parentEle;      
    } catch (err) {
    document.write(`Error fetching Data: ${err}`);
      }
}
fetchData();