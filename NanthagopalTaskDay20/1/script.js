alert("Are you sure, Do you want to read the Bible???");
async function fetchData() {
    const apiUrl = "https://bible-api.com/john%203:16";
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