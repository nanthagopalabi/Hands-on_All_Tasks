const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll('input[name="food"]:checked');
  const foodChoices = Array.from(foodcheckboxes).map(
  (checkbox) => checkbox.value);

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const newRow = table.insertRow();
  const name1Col = newRow.insertCell();
  const name2Col = newRow.insertCell();
  const addressCol = newRow.insertCell();
  const pincodeCol = newRow.insertCell();
  const genderCol = newRow.insertCell();
  const foodCol = newRow.insertCell();
  const stateCol = newRow.insertCell();
  const countryCol = newRow.insertCell();
    
  name1Col.textContent = name1;
  name2Col.textContent = name2;
  addressCol.textContent = address;
  pincodeCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  stateCol.textContent = state;
  countryCol.textContent = country;

  form.reset();
});
