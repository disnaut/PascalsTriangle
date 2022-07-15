function init() {
    let renderer = document.getElementById('content');
    renderer.innerHTML = " ";
        
    let rows = document.getElementById('numOfRows').value;
    let regex = /\D/;
    if(regex.test(rows) == true) {
        alert("Please enter a whole number.");
        return -1;
    }
    
    rows = parseInt(rows);
    renderTriangle(rows, renderer);
}

function renderTriangle(rows, renderer) {
    let line = '';

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y <= x; y++) {
            line = line + ' ' + calculatePascal(x,y);
        }
        printHTML(line, renderer);
        line = '';
    }
}

//Pascal Recursive function
function calculatePascal(row, column) {
    if(column == 0 || column == row) { //base cases: Either we are at column 0, or we are at the end of the row.
        return 1;
    }
    else {
        return calculatePascal(row - 1, column - 1) + calculatePascal(row - 1, column); //return pascal value up and to the left + pascal value directly above
    }
}
function printHTML(s, renderer) {
    renderer.innerHTML += '<p>' + s + '</p>';
}