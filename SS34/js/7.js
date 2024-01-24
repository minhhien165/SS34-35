document.getElementById('addRowButton').addEventListener('click', function() {
    let table = document.getElementById('myTable');

    let newRow = table.insertRow();

    let cellsCount = table.rows[table.rows.length - 2].cells.length;

    for (let i = 0; i < cellsCount; i++) {
        let cell = newRow.insertCell(i);
        let previousRow = table.rows[table.rows.length - 2];
        cell.textContent = previousRow.cells[i].textContent;
    }
});
