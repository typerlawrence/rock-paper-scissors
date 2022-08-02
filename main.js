const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else {
      console.log( "Error! Try again" );
    }
    }

    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      
    if (randomNumber === 0) 
        return ('rock');
     if (randomNumber === 1) 
    return ('paper');
     if (randomNumber === 2) 
return ('scissor'); 

    };

    const determineWinner = (userChoice , computerChoice) => {
        if (userChoice === computerChoice) {
            return "It's a tie";
          } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
              return 'Computer Won';
            } else {
              return 'You won';
           }
          } else if (userChoice === 'paper') {
             if(computerChoice === 'scissors') {
               return 'Computer Won';
             } else {
               return 'You won';
            }
          } else if (userChoice === 'scissors') {
             if (computerChoice === 'rock') {
               return 'Computer Won';
             } else {
               return 'You won';
            }
          } }

    
    const playGame = () => {
      const userChoice = getUserChoice('scissors');
      const computerChoice = getComputerChoice() ;
      console.log('You threw: ' + userChoice);
      console.log('The computer threw: ' + computerChoice);
    
    console.log(determineWinner(userChoice, computerChoice));
    };
    
    
    playGame();
