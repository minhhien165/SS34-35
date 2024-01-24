function deleteRow(button) {
    var row = button.parentNode.parentNode;
    var table = row.parentNode;
    table.deleteRow(row.rowIndex);
}
