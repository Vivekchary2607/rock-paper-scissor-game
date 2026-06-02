let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".box");

const userscorepara=document.querySelector("#human-score");
const compscorepara=document.querySelector("#Computer-score");
let resetbtn=document.querySelector("#reset-btn");

const genComputerChoice=()=>{
    let options=["rock","paper","scissor"];
   const randInd= Math.floor(Math.random()*3);
   return options[randInd];
};

const drawGame=()=>{
    msg.innerText="Game Was Drawn. Play Again";
    msg.style.backgroundColor="rgb(11, 115, 122)";
}

const resetGame=()=>{
    userscore=0;
    compscore=0;

};


const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Won!!!!Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lost. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoice)=>{
    console.log("user Choice :",userchoice);
    const compChoice=genComputerChoice();
    console.log("Computer Choice:",compChoice);

    if(userchoice===compChoice){
        drawGame();
    } else {
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if (userchoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        } else {
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("CHOICE WAS CLICKED",userchoice);
        playGame(userchoice);
    })
})

resetbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",()=>location.reload());