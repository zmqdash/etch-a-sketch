
//containers
const flexContainer2 = document.querySelector('.flex-container2');

const controls = document.querySelector('.controls');

//choose gridSize

let gridSize

const btn16x16 = document.createElement("button")
btn16x16.style.color = "white" 
btn16x16.style.backgroundColor = "blue"
btn16x16.style.width = "100px" 
btn16x16.style.height = "50px"
btn16x16.textContent = "16x16"
btn16x16.value = 16

const btn32x32 = document.createElement("button")
btn32x32.style.color = "white" 
btn32x32.style.backgroundColor = "blue"
btn32x32.style.width = "100px" 
btn32x32.style.height = "50px"
btn32x32.textContent = "32x32"
btn32x32.value = 32

const btn64x64 = document.createElement("button")
btn64x64.style.color = "white" 
btn64x64.style.backgroundColor = "blue"
btn64x64.style.width = "100px" 
btn64x64.style.height = "50px"
btn64x64.textContent = "64x64"
btn64x64.value = 64

const btn128x128 = document.createElement("button")
btn128x128.style.color = "white" 
btn128x128.style.backgroundColor = "blue"
btn128x128.style.width = "100px" 
btn128x128.style.height = "50px"
btn128x128.textContent = "128x128"
btn128x128.value = 128

controls.appendChild(btn16x16)
controls.appendChild(btn32x32)
controls.appendChild(btn64x64)
controls.appendChild(btn128x128)

btn16x16.addEventListener("click", selectSize)
btn32x32.addEventListener("click", selectSize)
btn64x64.addEventListener("click", selectSize)
btn128x128.addEventListener("click", selectSize)

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

//hover to sketch

function loopThroughSquares(){
const square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++){
    square[i].addEventListener("mouseover", sketch)
    }
}

const redBtn = document.createElement("button")
redBtn.style.color = "black" 
redBtn.style.backgroundColor = "red"
redBtn.style.width = "50px" 
redBtn.style.height = "25px"
redBtn.textContent = "red"
redBtn.value = "red"

const orangeBtn = document.createElement("button")
orangeBtn.style.color = "black" 
orangeBtn.style.backgroundColor = "orange"
orangeBtn.style.width = "50px" 
orangeBtn.style.height = "25px"
orangeBtn.textContent = "orange"
orangeBtn.value = "orange"

const greenBtn = document.createElement("button")
greenBtn.style.color = "black" 
greenBtn.style.backgroundColor = "green"
greenBtn.style.width = "50px" 
greenBtn.style.height = "25px"
greenBtn.textContent = "green"
greenBtn.value = "green"

const indigoBtn = document.createElement("button")
indigoBtn.style.color = "white" 
indigoBtn.style.backgroundColor = "indigo"
indigoBtn.style.width = "50px" 
indigoBtn.style.height = "25px"
indigoBtn.textContent = "indigo"
indigoBtn.value = "indigo"

const blackBtn = document.createElement("button")
blackBtn.style.color = "white" 
blackBtn.style.backgroundColor = "black"
blackBtn.style.width = "50px" 
blackBtn.style.height = "25px"
blackBtn.textContent = "black"
blackBtn.value = "black"

const brownBtn = document.createElement("button")
brownBtn.style.color = "white" 
brownBtn.style.backgroundColor = "brown"
brownBtn.style.width = "50px" 
brownBtn.style.height = "25px"
brownBtn.textContent = "brown"
brownBtn.value = "brown"

const eraseBtn = document.createElement("button")
eraseBtn.style.color = "black" 
eraseBtn.style.backgroundColor = "gray"
eraseBtn.style.width = "50px" 
eraseBtn.style.height = "25px"
eraseBtn.textContent = "erase"
eraseBtn.value = "white"

const noColor = document.createElement("button")
noColor.style.color = "black" 
noColor.style.backgroundColor = "lightgray"
noColor.style.width = "50px" 
noColor.style.height = "25px"
noColor.textContent = "none"
noColor.value = 0

controls.appendChild(redBtn)
controls.appendChild(orangeBtn)
controls.appendChild(greenBtn)
controls.appendChild(indigoBtn)
controls.appendChild(blackBtn)
controls.appendChild(brownBtn)
controls.appendChild(eraseBtn)
controls.appendChild(noColor)

redBtn.addEventListener("click", changeColor)
orangeBtn.addEventListener("click", changeColor)
greenBtn.addEventListener("click", changeColor)
indigoBtn.addEventListener("click", changeColor)
blackBtn.addEventListener("click", changeColor)
brownBtn.addEventListener("click", changeColor)
eraseBtn.addEventListener("click", changeColor)
noColor.addEventListener("click", changeColor)

function changeColor(event){
    color = event.target.value
}

function sketch(event){
    event.target.style.backgroundColor = color
}