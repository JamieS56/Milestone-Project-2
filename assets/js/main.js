const NO_OF_DOTS_BY_LEVEL = {
    easy: 9,
    medium: 16,
    hard: 25
};
let isGameInProgress = false
let shrinkAnimationRef;
document.addEventListener("DOMContentLoaded", function() {
    //cd
    addStartButtonClickHandler();
    // Comment
    rulesButtonClickHandler()
    closeRules();
    displayHighScore();
    initialiseLevelClickHandlers();
    restart()
});
function initialiseLevelClickHandlers() {
    for (i = 0; i < 3; i++) {
        document.getElementsByClassName("difficulty-button")[i].addEventListener("click", function() {
            let difficulty = this.value;
            const dotsHTML = generateDotsHTML(difficulty);
            document.getElementById("game-box").innerHTML = dotsHTML;
            setRowHeight(difficulty)
            removeGreyOutClass($('#game-box'))
            hide($("#difficulty-row"));
            startGame(difficulty);
        });
    }
}
// When the start button gets clicked this function is called which checks if a game is currently in progress and shows up the difficulty UI.
function addStartButtonClickHandler() {
    $('#start-game-btn').click(function() {
        isGameInProgress = true
        hide($("#game-over"))
        // Hide start and rules button
        // Show restart and quit button
        addGreyOutClass($('#game-box'))
        showDifficultySelectionUI()
    })
}
function hide(element){
    element.addClass('hidden')
}
function show(element){
    element.removeClass('hidden')
}
function noDisplay(element){
    element.addClass('display-none')
}
function display(element){
    element.removeClass('display-none')
}
function rulesButtonClickHandler(){
    $("#rules-button").click(function(){
        if ($("#rules").hasClass('hidden')){
            show($('#rules'))
            addGreyOutClass($('#game-box'))    
        }else{        
            hide($('#rules'))
            removeGreyOutClass($('#game-box'))  
        }
    })
}
//sets the score
function setScore(score) {
    $('#score').text(score);
}
function getScore(){
    let score = $('#score').text()
    return score
}
//this function generates the array of dots depending on the difficulty using the constant at the top of the page and difficulty put into it.
function generateDots(difficulty) {
    const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
    let dotsArray = [];
    for (let i = 1; i <= noOfDots; i++) {
        dotsArray.push(`#dot-${i}`);
    }
    return dotsArray;
}
// this will run after difficulty is selected and choose which dot starts to shrink.
function startGame(difficulty) {
    noDisplay($('#start-game-btn'))
    display($('#restart-game-btn'))
    setScore(0);
    let dotsArray = generateDots(difficulty);
    checkForDotsAndShrink(dotsArray);
}
function displayHighScore(){
     if(storageAvailable('localStorage')){
        show($('#high-score-box'));
        checkForHighScore();
    }
}

function startShrink(dot, dotArray) {
    let dotClicked = false
    $(dot).css('backgroundColor', '#1BE00A')
    shrinkAnimationRef = anime({
        targets: dot,
        scale: {
            value: 0,
            duration: 1500,
            delay: 50,
            easing: 'linear'
        },
        update: function(anim) {
            $(dot).attr('shrinkage', parseInt(Math.floor(anim.progress)));
        },
        begin: function(anim) {
            $(dot).attr('begun', anim.began)
        }
    });
    $(dot).click(function(){
        onDotClick(dot, dotArray)
        dotClicked = true
    })
    shrinkAnimationRef.finished.then(function() {
        if (dotClicked == false){
            checkNextDot(dotArray)
        }
    })
}

function calculateScoreForDot(dot) {
    return Math.floor((1 / parseInt($(dot).attr("shrinkage")) * 1000))
}

function checkForDotsAndShrink(dotArray) {
    let rNumber = Math.floor(Math.random() * dotArray.length) //chooses the random number
    let dot = dotArray[rNumber]
    if (dotArray.length != 0) {
        dotArray.splice(rNumber, 1)
        startShrink(dot, dotArray);
    }
}
function onDotClick(dot, dotArray) {
    if ($(dot).attr('begun') == 'true') { // means only the dot that is in the animation will score.
        // Hide the dot
        hide($(dot))
        let newScore = parseInt($('#score').text()) + calculateScoreForDot(dot);
        setScore(newScore)
    }
    checkNextDot(dotArray)

}
function checkNextDot(dotArray) {
        
        if (dotArray.length !== 0) {
             checkForDotsAndShrink(dotArray);
         } else {
             score = getScore()
             setHighScore(score)
             show($("#game-over"))
             noDisplay($('#restart-game-btn'))
            display($('#start-game-btn'))
             isGameInProgress = false
         }

}
// code to set difficulty of game
function showDifficultySelectionUI() {
    show($("#difficulty-row"))
}
function setRowHeight(difficulty) {
    const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
    const noOfRows = Math.sqrt(noOfDots);
    newHeight = (100 / noOfRows) + '%'
    $('.dot-row').height(newHeight)
}
function generateDotsHTML(difficulty) {
    const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
    const noOfRows = Math.sqrt(noOfDots);
    const noOfCols = Math.sqrt(noOfDots);
    let dotCounter = 1;
    let dotsHTML = '';
    for (let row = 1; row <= noOfRows; row++) {
        dotsHTML += `<div class = "row dot-row">`;
        for (let col = 1; col <= noOfCols; col++) {
            dotsHTML +=
                `<div id="dot-${dotCounter}" class="col dot"></div> `;
            dotCounter++;
        }
        dotsHTML += "</div>";
    }
    return dotsHTML;
}
function addGreyOutClass(greyoutTarget) {
    greyoutTarget.addClass('grey-out')
}
function removeGreyOutClass(greyoutTarget) {
    greyoutTarget.removeClass('grey-out')
}
function closeRules(){
    $('#close-rules').click(function(){
        hide($('#rules'))
        removeGreyOutClass($('#game-box'))  
    })
}
//---------high score--------------//
//---------------taken directly from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API--------------//
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
function checkForHighScore(){
    if(!localStorage.length === 0) {
        setHighScore(0);
    } else {
        let currentHighScore = localStorage.getItem('highScore')
        setHighScore(currentHighScore);
    }
}
function setHighScore(currentScore){
    currentScore = parseInt(currentScore)
    if (currentScore >= localStorage.getItem('highScore')){
    localStorage.setItem('highScore', currentScore)
    $('#high-score').text(localStorage.getItem('highScore'))
    }
}
function restart() {
    $('#restart-game-btn').click(function(){
        shrinkAnimationRef.pause();
        $('#start-game-btn').click()
    });
    
    
}