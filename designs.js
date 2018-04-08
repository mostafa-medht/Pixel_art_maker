// Select color input
// Select size input
const table = document.getElementById('pixelCanvas') ; 
const form = document.getElementById('sizePicker');   
const para = document.getElementById('par');
// When size is submitted by the user, call makeGrid()


function makeGrid() {
// Your code goes here!
    //table.removeChild(tr);
    //table.parentNode.removeChild(table)
    para.innerHTML = "<em>One Click to <u>add color</u>; Double Click to <u>remove color</u></em>";
    
    // Const Var 
    const inputHeight = document.getElementById('input_height');
    const inputWidth = document.getElementById('input_width');

    // Creating cell 
    for (let i=0 ; i<inputHeight ;i++){
        var row = document.createElement('tr');
        for (let j=0; j<inputWidth ;j++){
           var col = document.createElement('td');
           row.appendChild(col);
        }
        table.appendChild(row);
    }

}

form.addEventListener('submit' , function(e){
    e.preventDefault();
    makeGrid();
});
