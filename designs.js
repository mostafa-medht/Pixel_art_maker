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
    const colorPiked = document.getElementById('colorPicker').value;
    
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = colorPiked;
        });
    }


    let removeEvent = function(cell) {
        cell.addEventListener('dblclick', function() {
            cell.style.backgroundColor = '';
        });
    }
    // Creating cell 
    for (let i=0 ; i<inputHeight ;i++){
        var row = document.createElement('tr');
        row.setAttribute('class','tr');
        for (let j=0; j<inputWidth ;j++){
           var cell = document.createElement('td');
           cell.setAttribute('class','cell');
           row.appendChild(cell);
           cell.addEventListener('click',addEvent(cell));
           cell.addEventListener('dblclick',removeEvent(cell));
        }
        table.appendChild(row);
    }

}

const create_table =document.querySelector('#create_table');
create_table.addEventListener('click' , function(e){
    e.preventDefault();
    makeGrid();
    
    // cell.addEventListener("dblclick",function(e){
    //     let colorPiked = document.getElementById('colorPicker').value;
    //     cell.style.backgroundColor = '' ;
    // });
});

clear_Btn.addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.cell').style.backgroundColor =  '#ffffff';
  });
  
reset_Btn.addEventListener('click',function() {
    table.innerHTML = '';
  });

// let cell = document.querySelector('.cell');  
// cell.addEventListener("click",function(e){
//     let colorPiked = document.getElementById('colorPicker').value;
//     e.target.style.backgroundColor = colorPiked;
// });