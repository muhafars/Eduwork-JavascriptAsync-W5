const tableContainer = document.getElementById("table-container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    const columns = [
      { title: "ID", field: "id" },
      { title: "Name", field: "name" },
      { title: "Username", field: "username" },
      { title: "Email", field: "email" },
      { title: "Address", field: "address" },
      { title: "Company", field: "company" },
    ];

    const table = generateTable(data, columns);
    tableContainer.appendChild(table);
  });

// generate table
const generateTable = function (data, columns) {
  const table = document.createElement("table");
  table.classList.add("table", "table-hover");

  const thead = document.createElement("thead");
  thead.classList.add("bg-primary", "text-light");

  const tr = document.createElement("tr");
  columns.forEach(column => {
    const th = document.createElement("th");
    th.innerText = column.title;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach(rowData => {
    const tr = document.createElement("tr");
    tr.classList.add("table-bordered", "border-dark");

    columns.forEach(column => {
      const td = document.createElement("td");
      td.classList.add("table-striped", "table-bordered", "border-dark");
      if (column.field === "address") {
        td.innerText = `${rowData.address.street}, ${rowData.address.suite}, ${rowData.address.city}`;
      } else if (column.field === "company") {
        td.innerText = rowData.company.name;
      } else {
        td.innerText = rowData[column.field];
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
};
