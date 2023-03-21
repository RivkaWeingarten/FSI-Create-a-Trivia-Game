// Your Code Here
let userName = window.prompt('Please enter your name:')
    
    let playAgain=true
    function playGame() {
        let userScore=0
//create for loop questions
for(let i = 0; i < questions.length; i++){
 let question=questions[i]
 //ask question one at a time
let userAnswer= window.prompt (question.text)
    if(userAnswer === question.correctAnswer){
        userScore=userScore +10 
        //adds 10 points if correct
    }
}
    
if (userScore===100){
window.alert(`${userName} You Rock! WHOO HOO you got a PERFECT SCORE!`)
}
else{
window.alert(userName+" Your score is: " +userScore)
}
    }

    while (playAgain === true) {
        playGame()
        let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
        if(userChoice === 'yes'){
                playAgain === true
            } else {
                playAgain = false
                window.alert('Thanks for playing the game!')
            }
    }
    
