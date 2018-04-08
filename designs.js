// Select color input
// Select size input
const table = document.getElementById('pixelCanvas') ; 
const form = document.getElementById('sizePicker');   
const para = document.getElementById('par');
const clear_Btn = document.getElementById('clear_button');
const reset_Btn = document.getElementById('reset_button');
// When size is submitted by the user, call makeGrid()


function makeGrid() {
// Your code goes here!
    //table.removeChild(tr);
    //table.parentNode.removeChild(table)
    table.innerHTML = '';
    para.innerHTML = "<em>One Click to <u>add color</u>; Double Click to <u>remove color</u></em>";
    
    // Const Var 
    const inputHeight = document.getElementById('input_height').value;
    const inputWidth = document.getElementById('input_width').value;

    // Creating cell 
    for (let i=0 ; i<inputHeight ;i++){
        var row = document.createElement('tr');
        row.setAttribute('id','tr');
        for (let j=0; j<inputWidth ;j++){
           var col = document.createElement('td');
           col.setAttribute('id','cell');
           row.appendChild(col);
        }
        table.appendChild(row);
    }

}

form.addEventListener('submit' , function(e){
    e.preventDefault();
    makeGrid();
});

// clear_Btn.addEventListener('submit', function(event) {
//     event.preventDefault();
//     document.getElementById('cell').css('backgroundColor', '#ffffff');
//   });
  
// reset_Btn.addEventListener('click',function() {
//     table.children().remove();
//   });


document.getElementById('cell').addEventListener("click",function(e){
    let colorPiked = document.getElementById('colorPicker').value;
    document.getElementById('cell').style['background-color'] = colorPiked;
});
document.getElementById('cell').addEventListener("dblclick",function(e){
    let colorPiked = document.getElementById('colorPicker').value;
    document.getElementById('cell').style['background-color'] = '' ;
});
  