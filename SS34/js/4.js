document.getElementById('changeStyleButton').addEventListener('click', function() {
    let outputElement = document.getElementById('outputText');

    if (outputElement.classList.contains('highlight')) {
        outputElement.classList.remove('highlight');
    } else {
        outputElement.classList.add('highlight');
    }
});
