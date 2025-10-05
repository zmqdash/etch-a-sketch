
//containers
const flexContainer2 = document.querySelector('.flex-container2');

const controls = document.querySelector('.controls');

//choose gridSize

let gridSize
const Btn16x16 = document.createElement("button")
Btn16x16.style.color = "white" 
Btn16x16.style.backgroundColor = "blue"
Btn16x16.style.width = "100px" 
Btn16x16.style.height = "100px"
Btn16x16.textContent = "16x16"
Btn16x16.value = 16

const Btn32x32 = document.createElement("button")
Btn32x32.style.color = "white" 
Btn32x32.style.backgroundColor = "blue"
Btn32x32.style.width = "100px" 
Btn32x32.style.height = "100px"
Btn32x32.textContent = "32x32"
Btn32x32.value = 32

const Btn64x64 = document.createElement("button")
Btn64x64.style.color = "white" 
Btn64x64.style.backgroundColor = "blue"
Btn64x64.style.width = "100px" 
Btn64x64.style.height = "100px"
Btn64x64.textContent = "64x64"
Btn64x64.value = 64

const Btn128x128 = document.createElement("button")
Btn128x128.style.color = "white" 
Btn128x128.style.backgroundColor = "blue"
Btn128x128.style.width = "100px" 
Btn128x128.style.height = "100px"
Btn128x128.textContent = "128x128"
Btn128x128.value = 128

controls.appendChild(Btn16x16)
controls.appendChild(Btn32x32)
controls.appendChild(Btn64x64)
controls.appendChild(Btn128x128)

Btn16x16.addEventListener("click", selectSize)
Btn32x32.addEventListener("click", selectSize)
Btn64x64.addEventListener("click", selectSize)
Btn128x128.addEventListener("click", selectSize)

function deleteOldGrid(){
    flexContainer2.innerHTML = ""
}

function selectSize(event) {
    gridSize = event.target.value;
    deleteOldGrid()
    rowOfSquares(gridSize)
    repeatRows(gridSize)
    const square = document.querySelectorAll(".square")
    loopThroughSquares()
}

//row of squares

function rowOfSquares() {
const square = document.createElement("div");
square.style.display = "flex";      
    for (let i = 0; i < gridSize; i++){
    const rowOfSquares = document.createElement("div")
    rowOfSquares.style.height = "5px"
    rowOfSquares.style.width = "5px"
    rowOfSquares.style.border = "0.0033px solid black"
    rowOfSquares.classList.add("square")
    square.appendChild(rowOfSquares)
    }
flexContainer2.appendChild(square)
}

rowOfSquares()

//repeat rows (to make columns)

function repeatRows() {
    for (let i = 0; i < (gridSize - 1); i++){
    rowOfSquares()
    }
}
repeatRows()

//hover sketch logic

function loopThroughSquares(){
const square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++){
    square[i].addEventListener("mouseover", changeColor)
    }
}

function changeColor(e){
    e.target.style.backgroundColor = "red";
}








