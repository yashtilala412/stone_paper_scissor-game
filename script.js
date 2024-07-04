let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let printres = document.getElementById("msg");
let usercurr = document.getElementById("userScore");
let compcurr = document.getElementById("compScore");



let playGame = (userChoice) => {
    let array = ['rock','paper','scissors'];
    let randgen = Math.floor(Math.random() * 3);
    let compChoice = array[randgen];
    
    let userWin = false;
    if(userChoice === compChoice)
    {
        Draw();
    }
    else if(userChoice === "paper")
    {
        userWin = compChoice === "scissors" ? false : true; 
    }
    else if(userChoice === "scissors")
    {
        userWin = compChoice === "rock" ? false : true; 
    }
    else
    {
        userWin = compChoice === "paper" ? false : true; 
    }

    showWinner(userWin);

}

let Draw = () => {
    printres.innerText = "Draw";   
}

let showWinner = (userWin) => {
    if(userWin=== true)
    {
        printres.innerText = "You Win";
        printres.style.backgroundColor = "green";
        userScore++;
        usercurr.innerText = userScore;
    }
    else
    {
        printres.innerText = "You Lose";
        printres.style.backgroundColor = "red";
        compScore++;
        compcurr.innerText = compScore;
    }

    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // important line we can get attribute of any class like name and id of that particular class
        playGame(userChoice);
    });
})