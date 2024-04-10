

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('.reset-btn')
let message = document.querySelector('.msg-container')
let p = document.querySelector('p')

let turn = false;

let winningPatters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "X";
      turn = false;
    } else {
      box.innerHTML = "O";
      turn = true;
    }
    checkWin();
    box.disabled = true;
  });
});

const disableBoxes = () =>{
  for(box of boxes){
    box.disabled=true
  }
}

function checkWin() {
  for (patterns of winningPatters) {
   let pos1= boxes[patterns[0]].innerHTML 
   let pos2= boxes[patterns[1]].innerHTML 
   let pos3= boxes[patterns[2]].innerHTML

   if(pos1 != "" && pos2 != "" && pos2 != "" )
   if(pos1 === pos2 && pos2 === pos3){
    console.log("Winner", pos1)
    message.classList.remove('hide')
    p.innerHTML = `Winner is ${pos1}`
    disableBoxes()
   }
  }
}

function checkDraw(){
  for(let box of boxes){
    if(box.innerHTML = ""){
      return false
    }
  }
  return true
}

reset.addEventListener('click', ()=>{
  message.classList.add('hide')
  turn = true
  console.log("Button is clicked")
  for(box of boxes){
    box.enabled=true
    box.innerHTML = ""
  }
})

if(checkDraw()){
  console.log("Draw")
}