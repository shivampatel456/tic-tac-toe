




// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// setTimeout(() =>{
//     heading1.textContent = "Hello !!!";
//     heading1.style.color = "violet";
//     setTimeout(() =>{
//         heading2.textContent = "Gungun !!!";
//         heading2.style.color = "purple";
//         setTimeout(() =>{
//             heading3.textContent = "How....";
//             heading3.style.color = "red";

//             setTimeout(() =>{
//                 heading4.textContent = "Are!!";
//                 heading4.style.color = "green";

//                 setTimeout(() =>{
//                     heading5.textContent = "You !!??";
//                     heading5.style.color = "blue";
//                 },1000)
//             },1000)

        
//         },1000)
//     },1000)

  
// },1000)


///////////////////////// tic tac toe game////////////////////////

// let boxes = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("#Reset");
// let newbtn = document.querySelector("#new-btn");
// let win = document.querySelector("#winner")

// let turn0 = true;  // player1 player2
//  const winning = [
//     [0,1,2],[3,4,5],[6,7,8],
//     [0,3,6],[1,4,7],[2,5,8],
//     [0,4,8],[2,4,6]
//  ];

// boxes.forEach((box) =>{
//     box.addEventListener("click", () =>{
//         console.log("box was clicked");
//      if (turn0){
//         box.innerText = "O"
//         turn0 = false;
    
//      }
//      else{
//         box.innerText = "X"
//         turn0 =true;

//      }
//      box.disabled = true;
//      checkwinner();
//     });
// });

// const showWinner = (Winner)=>{
//     ms.WinnerText = "congratulation you are a Winner"
// }

// const checkwinner =  () =>{
//     for(let pattern of winning){
       
//         let pos1val = boxes[pattern[0]].innerText;
//      let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//     if(pos1val != "" && pos2val != "" && pos3val != ""){
//         if(pos1val === pos2val && pos2val === pos3val){
//             console.log("winner",pos1val)
//             showWinner();
//         }
//     }
//     }
// }


//////////////////////////////////////////////

//  let a = 25;
//  let b= prompt("guess the numbers")
 
//  while(b != a){
//     let b = prompt("guess the number Again")
//  }
 
// console.log("congratulation")


// let arr = ["blooming","microsoft","uber","Google","IbM","netflix"];
// let c = arr.push("Ola")
// console.log(arr)


let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg") 



let currunt= true;
const winpattern = [
    [0,1,2],[0,3,6],
    [3,4,5],[1,4,7],
    [6,7,8],[2,5,8],
    [0,4,8],[2,4,6]
]

const resetGame = () =>{
    currunt = true;
    enabled();

    
}; 





box.forEach((box) =>{
    box.addEventListener("click",()=>{
       

        if(currunt){
            box.innerText = "O"
            box.style.color = " green"
            currunt=false;
        }
        else{
            box.innerText = "X";
            box.style.color = "blue"
            currunt = true;
        }
        box.disabled = true;

        checkwinner();
    });
});


// const showWinner = (Winner)=>{
//     msg.innerText = "congratulation you are a Winner";
//     // msgContainer.classList.remove("hide");

// }

const disabled = () =>{
    for (let bo of box){
        bo.disabled = true;
    }
}

const enabled = () =>{
    for (let bo of box){
        bo.disabled = false;
        bo.innerText = " "
    }
}


// const showWinner = (winner)=>{
//     msg.innerText = `Congratulation winner is ${winner}`
//     msgContainer.classList.remove(".hide")
// }



const checkwinner = () =>{
    for(let pattern of winpattern ){

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     box[pattern[0]].innerText,
        //     box[pattern[1]].innerText,
        //     box[pattern[2]].innerText)

            let pos1val = box[pattern[0]].innerText;
            let pos2val = box[pattern[1]].innerText;
            let pos3val = box[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val===pos2val && pos2val === pos3val){

               
            //   showWinner();
                
            
            }
            
        }



    }
}
// NewGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);











 

















 






