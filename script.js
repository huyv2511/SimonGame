var gameStart = false;
var level = 0;
var sequence=[];
var answer = [];
var curIndex = 0;
$(".btn").click(function(){
    if(gameStart){
        if(sequence.length > 0){
            let btnName = this.className;
            let answerLetter;
            switch(btnName){
                case "btn red":
                    answer.push('R');
                    answerLetter = 'R';
                    break;
                case "btn yellow":
                    answer.push('Y');
                    answerLetter = 'Y';
                    break;
                case "btn green":
                    answer.push('G');
                    answerLetter = 'G';
                    break;
                case "btn blue":
                    answer.push('B');
                    answerLetter = 'B';
                    break;
            }
            if(answerLetter === sequence[curIndex]){
                audioAnimation(btnName);
                curIndex++;
                if(answer.length == sequence.length){
                    curIndex = 0;
                    setTimeout(increaseLevel,1000);
                    // increaseLevel(++level);
                    answer=[];
                }
            }
            else {
                //the answer is wrong
                wrongAnswer();
            }
 
        }
    }
});
function audioAnimation(x){
    switch(x){
        case "btn red":
            playAudio('R');
            $(".red").fadeOut(100).fadeIn(100);
            break;
        case "btn yellow":
            playAudio('Y');
            $(".yellow").fadeOut(100).fadeIn(100);
            break;
        case "btn green":
            $(".green").fadeOut(100).fadeIn(100);
            playAudio('G');
            break;
        case "btn blue":
            playAudio('B');
            $(".blue").fadeOut(100).fadeIn(100);
            break;
    }
}

function wrongAnswer(){
    $("#title").text("You lost. Press any key to restart the game ");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    level = 0;
    gameStart = false;
    sequence=[];
    answer=[];
    curIndex = 0;

}


document.addEventListener("keypress",function(){
    if(level == 0 && !gameStart){
        startTheGame();
    }
});
function startTheGame(){
    gameStart = true;
    level = 1;
    $("#title").text("Level 1");
    FlashingButtons(level);
    
}
function increaseLevel(){
    level++;
    $("#title").text(`Level ${level}`);
    FlashingButtons(level);
}
function FlashingButtons(level){
    //this function is to flash the buttons
    var randomNumber = Math.floor(Math.random()*4)+1;
    whichButton(randomNumber);
}
function playAudio(x){
    switch(x){
        case 'G':
            var audio = new Audio("sounds/green.mp3");
            audio.play();
        case 'R':
            var audio = new Audio("sounds/red.mp3");
            audio.play();
        case 'B':
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
        case 'Y':
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
    }
}
function whichButton(x){
    //this function is to determine which button is being select
    switch(x){
        case 1:
            $(".green").fadeOut(100).fadeIn(100);
            playAudio('G');
            sequence.push('G');
            break;
        case 2:
            $(".red").fadeOut(100).fadeIn(100);
            playAudio('R');
            sequence.push('R');
            break;
        case 3:
            $(".yellow").fadeOut(100).fadeIn(100);
            playAudio('Y');
            sequence.push('Y');
            break;
        case 4:
            $(".blue").fadeOut(100).fadeIn(100);
            playAudio('B');
            sequence.push('B');
            break;
    }
}

