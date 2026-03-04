const baseURL = "https://jsonplaceholder.typicode.com/users";

// Get form values as JSON object
function getFormData() {
    return {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };
}

// SAVE (POST)
function saveData() {
    const data = getFormData();

    fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => alert("Data Saved Successfully"))
    .catch(err => console.error(err));
}

// UPDATE (PUT)
function updateData() {
    const data = getFormData();

    fetch(`${baseURL}/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => alert("Data Updated Successfully"))
    .catch(err => console.error(err));
}

// VIEW (GET)
function viewData() {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";

        data.forEach(user => {
            const row = tableBody.insertRow();
            row.insertCell(0).innerText = user.id;
            row.insertCell(1).innerText = user.name;
            row.insertCell(2).innerText = user.email;
        });
    })
    .catch(err => console.error(err));
}