//creates a varible for the submit button
let enterGridSize = document.getElementById('submitButton');
//creates a variable for the canvas/board
let newTable = document.getElementById('pixelCanvas');
//adds click event listerner for the submit button, will run makeGrid function when clicked
enterGridSize.addEventListener('click', makeGrid);
//creates variables that store the numeric value of the grid height and width
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');


function makeGrid(enterGridSize) {
    let row = inputHeight.value;
    let col = inputWidth.value;
    //removes the existing table when new values are indicated by user
    while (newTable.hasChildNodes()) {
        newTable.removeChild(newTable.firstChild);
        //loop that creates number of rows(height) indicated by user
    }
    for (let n = 0; n < row; n++) {
        let createRow = document.createElement('tr');
        newTable.appendChild(createRow);
        //loop that adds a cell(width) for each numeric value indicated by user in each row
        for (let m = 0; m < col; m++) {
            let createCol = document.createElement('td');
            createRow.appendChild(createCol);
            //prevents grid from disappearing            
            enterGridSize.preventDefault();
            //event listener for each cell so user can change colors when clicked
            createCol.addEventListener('click', function onClick() {
                //variable that stores color chosen by user
                let color = document.getElementById('colorPicker').value;
                //changes color of each cell clicked
                createCol.style.backgroundColor = color;
            });
        }
    }
}


