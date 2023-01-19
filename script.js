const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
                introScreen.classList.add('fadeOut');
                match.classList.add('fadeIn');
        });
    };
    startGame();

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';

            });
        });

        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNum = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNum];
                
                setTimeout(() => {
                compareHands(this.textContent, computerChoice);

                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;

                }, 1500)
                playerHand.style.animation = 'shakePlayer 1.5s ease';
                computerHand.style.animation = 'shakeComputer 1.5s ease';
                
            });
        });  
    }

    const updateScore = () => {
        const playerCheck = document.querySelector('.player-score p');
        const computerCheck = document.querySelector('.computer-score p');
        playerCheck.textContent = playerScore;
        computerCheck.textContent = computerScore   ;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'Its a tie';
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Computer wins';
                computerScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                playerScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                computerScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                playerScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                computerScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                playerScore++;
                updateScore();
                return;
            }
        }
    }

    playMatch();
   
}

game();



