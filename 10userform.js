const form = document.getElementById("form2");

for(let i=1;i<=10;i++){
  form.innerHTML += `
    <h4>User ${i}</h4>
    <input placeholder="Name" class="name">
    <input placeholder="Age" class="age">
    <input placeholder="Email" class="email">
    <input placeholder="Phone" class="phone">
  `;
}

form.innerHTML += `<button type="submit">Submit All</button>`;

form.addEventListener("submit", function(e){
  e.preventDefault();

  const names = document.querySelectorAll(".name");
  const ages = document.querySelectorAll(".age");
  const emails = document.querySelectorAll(".email");
  const phones = document.querySelectorAll(".phone");
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  for(let i=0;i<10;i++){
    const user = {
      name: names[i].value,
      age: ages[i].value,
      email: emails[i].value,
      phone: phones[i].value
    };

    console.log(`User ${i+1}:`, user);

    table.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>
    `;
  }
});