const game = () => {
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;
    let nRound = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
    
    const updateRound = () => {
        const numberRound = document.querySelector(".round");
        numberRound.textContent = nRound;
    }
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      const tieScore = document.querySelector(".tie-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      tieScore.textContent = tScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        tScore++;
        nRound++;
        updateScore();
        updateRound();
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          nRound++;
          updateScore();
          updateRound();
          return;
        } else {
          winner.textContent = "AI Wins";
          cScore++;
          nRound++;
          updateScore();
          updateRound();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "AI Wins";
          cScore++;
          nRound++;
          updateScore();
          updateRound();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          nRound++;
          updateScore();
          updateRound();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "AI Wins";
          cScore++;
          nRound++;
          updateScore();
          updateRound();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          nRound++;
          updateScore();
          updateRound();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();

  