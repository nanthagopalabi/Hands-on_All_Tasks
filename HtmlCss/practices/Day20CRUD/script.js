let data=[
    {name: "Guvi B49 Tamil",age: 30},
    {name: "Guvi B46 Telugu",age: 26},
];

function displayData(){
    const dataRows=document.getElementById("dataRows");
    dataRows.innerHTML="";

    data.forEach((value,index)=>{
        const row=`
        <tr>
            <td>${value.name}</td>
            <td>${value.age}</td>
            <td>
                <button class="btn btn-info edit-btn" data-index="${index}">Edit</button>
                <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
            </td>
        </tr>
        `;
        dataRows.insertAdjacentHTML("beforeend", row);
    });
}
function handleFormSubmit(event){
    event.preventDefault();
    const  nameInput=document.getElementById("name");
    const  ageInput=document.getElementById("age");

    const name=nameInput.value;
    const age=ageInput.value;
    
    data.push({name,age});

    nameInput.value="";
    ageInput.value="";
    displayData();
}
function handleDeleteClick(event){
    const index=event.target.getAttribute("data-index");
    data.splice(index,1);
    displayData();
}

function handleEditClick(event){
    const index=event.target.getAttribute("data-index");
    const record=data[index];

    const  nameInput=document.getElementById("name");
    const  ageInput=document.getElementById("age");

    nameInput.value=record.name;
    ageInput.value=record.age;

    data.splice(index,1);
    displayData();
}
document.getElementById("crudform").addEventListener("submit",handleFormSubmit);

document.getElementById("dataRows").addEventListener("click",(s)=>{
    if(event.target.classList.contains("delete-btn")){
        handleDeleteClick(event);
    }else if (event.target.classList.contains("edit-btn")){
    handleEditClick(event);
    }

});
displayData()
