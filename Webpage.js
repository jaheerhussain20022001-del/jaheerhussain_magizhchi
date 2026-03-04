 document.getElementById("name").addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name").value;
              const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = course;

    document.getElementById("myForm").reset();
        
 });     