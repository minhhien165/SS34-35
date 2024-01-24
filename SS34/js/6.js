
document.getElementById('addButton').addEventListener('click', function() {
    var inputValue = document.getElementById('inputValue').value;
    
    if (inputValue.trim() !== '') {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputValue));
    
        document.getElementById('resultList').appendChild(li);
    
        document.getElementById('inputValue').value = '';
    }
});
    