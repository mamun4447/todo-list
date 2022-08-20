document.getElementById("create").addEventListener("click", function() {
    const inputField = document.getElementById("inputField");
    inputField.style.display = "inline";
});

let id = 0;

document.getElementById("add").addEventListener("click", function() {
    id++;
    const inputData = document.getElementById("inputField").value;

    const tableContainer = document.createElement("tr");
    if (inputData === "") {
        alert("Input data is blank!!");
    } else {
        tableContainer.innerHTML = `<th scope="row">${id}</th>
              <td>${inputData}</td>
              <td>
                <button class="btn btn-danger deleteBtn">Delete</button>
                <button class="btn btn-secondary doneBtn">Done</button>
              </td>`;

        const tableData = document.getElementById("tableData");
        tableData.appendChild(tableContainer);
    }
    document.getElementById("inputField").value = "";

    // delete item
    const deletebtn = document.getElementsByClassName("deleteBtn");
    for (let del of deletebtn) {
        del.addEventListener("click", function(event) {
            event.target.parentNode.parentNode.style.display = "none";
        });
    }

    const doneBtn = document.getElementsByClassName("doneBtn");
    for (let Btn of doneBtn) {
        Btn.addEventListener("click", function(event) {
            event.target.style.classList.toggle("checked");
        });
    }
});