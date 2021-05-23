const NO_OF_DOTS_BY_LEVEL = {// constant of number of dots for each level
    easy: 9,
    medium: 16,
    hard: 25,
};
let shrinkAnimationRef;// global refrence for animation code is set in startShrink function

document.addEventListener("DOMContentLoaded", function () { // makes sure nothing is done before the DOM is fully loaded
    addStartButtonClickHandler(); // sets the start button's functions
    rulesButtonClickHandler(); // sets the rule button's functions
    emailButtonClickHandler(); // sets contact us button's functions
    displayHighScore(); // handles the high score
    initialiseLevelClickHandlers(); // sets the difficulty buttons function
    restart(); // restart button's function
});
//-----------------------------a buunch of general functions used throughout the code to add and remove classes to divs---------------------//
function addGreyOutClass(greyoutTarget) {
    greyoutTarget.addClass("grey-out");
}
function removeGreyOutClass(greyoutTarget) {
    greyoutTarget.removeClass("grey-out");
}
function hide(element) {
    element.addClass("hidden");
}
function show(element) {
    element.removeClass("hidden");
}
function noDisplay(element) {
    element.addClass("display-none");
}
function display(element) {
    element.removeClass("display-none");
}
//--------------------------------------------------------------click handlers------------------------------------------//
function initialiseLevelClickHandlers() {
    // handles all the functions of the difficulty levels.
    for (i = 0; i < 3; i++) {
        document.getElementsByClassName("difficulty-button")[i].addEventListener("click", function () {
            let difficulty = this.value;
            const dotsHTML = generateDotsHTML(difficulty);
            document.getElementById("game-box").innerHTML = dotsHTML;
            setRowHeight(difficulty);
            removeGreyOutClass($("#game-box"));
            hide($("#difficulty-row"));
            startGame(difficulty);
        });
    }
}
function addStartButtonClickHandler() {  // When the start button gets clicked this function is called which checks if a game is currently in progress and shows up the difficulty UI.
    $("#start-game-btn").click(function () {
        hide($("#game-over"));
        hide($("#rules"));
        hide($("#email-popup"));
        addGreyOutClass($("#game-box"));
        showDifficultySelectionUI();
    });
}
function rulesButtonClickHandler() {
    // shows the rules
    $("#rules-button").click(function () {  // if rules is hidden it shows
        if ($("#rules").hasClass("hidden")) {
            if ($("#game-box").attr("begun") == "true") {  //pauses if there's a game in progress
                shrinkAnimationRef.pause();
            }
            show($("#rules"));
            hide($("#difficulty-row"));
            hide($("#email-popup"));
            addGreyOutClass($("#game-box"));
        } else { //if rules are already up it hides
            hide($("#rules"));
            removeGreyOutClass($("#game-box"));
            if ($("#game-box").attr("begun") == "true") {
                shrinkAnimationRef.play(); //plays if there's a game in progress
            }
        }
    });
    $("#close-rules").click(function () { // code for the close button on the popup
        hide($("#rules"));
        removeGreyOutClass($("#game-box"));
        if ($("#game-box").attr("begun") == "true") {
            shrinkAnimationRef.play();
        }
    });
}
function restart() {
    $("#restart-game-btn").click(function () {  // the restart button just pauses the game and then acts as if the start button has been clicked again.
        shrinkAnimationRef.pause();
        $("#start-game-btn").click();
    });
}
function emailButtonClickHandler() { // this code is very similar to the rules button click handler just swaps in contact us form for rules.
    $("#email-button").click(function () {
        if ($("#email-popup").hasClass("hidden")) {
            if ($("#game-box").attr("begun") == "true") {
                shrinkAnimationRef.pause();
            }
            show($("#email-popup"));
            hide($("#difficulty-row"));
            hide($("#rules"));
            addGreyOutClass($("#game-box"));
        } else {
            hide($("#email-popup"));
            removeGreyOutClass($("#game-box"));
            if ($("#game-box").attr("begun") == "true") {
                shrinkAnimationRef.play();
            }
        }
    });
    $("#close-email").click(function () {
        hide($("#email-popup"));
        removeGreyOutClass($("#game-box"));
        if ($("#game-box").attr("begun") == "true") {
            shrinkAnimationRef.play();
        }
    });
}
function setScore(score) {  //sets the score
    $("#score").text(score);
}
function getScore() {
    let score = $("#score").text();
    return score;
}
function calculateScoreForDot(dot) {
    return Math.floor((1 / parseInt($(dot).attr("shrinkage"))) * 1000); // calculates score using the progress of the animation in this formula.
}
function setHighScore(currentScore) { // takes score of last played game compares it to the high score and will set it if it's needed.
    currentScore = parseInt(currentScore);
    if (currentScore >= localStorage.getItem("highScore")) {
        localStorage.setItem("highScore", currentScore);
        $("#high-score").text(localStorage.getItem("highScore"));
    }
}
function displayHighScore() { // displays high score if local storage is available
    if (storageAvailable("localStorage")) {
        show($("#high-score-box"));
        checkForHighScore();
    }
}
function generateDots(difficulty) {  // this function generates the array of dots depending on the difficulty using the constant at the top of the page and difficulty put into it.
    const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
    let dotsArray = [];
    for (let i = 1; i <= noOfDots; i++) {
        dotsArray.push(`#dot-${i}`);
    }
    return dotsArray;
}
function startGame(difficulty) {  // this will run after difficulty is selected and choose which dot starts to shrink.
    noDisplay($("#start-game-btn"));
    display($("#restart-game-btn"));
    setScore(0);
    let dotsArray = generateDots(difficulty);
    checkForDotsAndShrink(dotsArray);
}
function startShrink(dot, dotArray) {
    // all the animation code is here.
    let dotClicked = false; //checks if a dot hasn't been clicked so code will carry on if no dot is clicked.
    $(dot).css("backgroundColor", "#1BE00A");
    shrinkAnimationRef = anime({  // anime.js code       
        targets: dot,
        scale: {
            value: 0,
            duration: 1500,
            delay: 80,
            easing: "linear",
        },
        update: function (anim) {
            $(dot).attr("shrinkage", parseInt(Math.floor(anim.progress))); // uses anime.js's progress feature to woek out how quickly the dot is clicked.
        },
        begin: function (anim) { // tells us when the animation has begun
            $(dot).attr("begun", anim.began);
            $("#game-box").attr("begun", true);
        },
    }); // end of anime.js code
    $(dot).click(function () {
        // if dot is clicked       
        onDotClick(dot, dotArray);
        dotClicked = true;
    });
    shrinkAnimationRef.finished.then(function () {
        // You cannot swith around 'shrinkAnimationRef.finished.then' with if below otherwise click missfires and bubbling occurs
        if (dotClicked == false) {
            checkNextDot(dotArray);
        }
    });
}
function onDotClick(dot, dotArray) {
    if ($(dot).attr("begun") == "true") {
        // means only the dot that is in the animation will score.
        // Hide the dot
        hide($(dot));
        let newScore = parseInt($("#score").text()) + calculateScoreForDot(dot);
        setScore(newScore);
    }
    checkNextDot(dotArray);
}

function checkForDotsAndShrink(dotArray) {
    let rNumber = Math.floor(Math.random() * dotArray.length); //chooses the random number
    let dot = dotArray[rNumber];
    if (dotArray.length != 0) {
        dotArray.splice(rNumber, 1); // removes dot from array
        startShrink(dot, dotArray);
    }
}

function checkNextDot(dotArray) {
    // checks if there are any more dots left in the array and if not, ends the game.
    if (dotArray.length !== 0) {
        checkForDotsAndShrink(dotArray);
    } else {
        let score = getScore();
        setHighScore(score);
        show($("#game-over"));
        noDisplay($("#restart-game-btn"));
        display($("#start-game-btn"));
        $("#game-box").attr("begun", "false");
    }
}
function showDifficultySelectionUI() {// code to show the difficulty buttons
    show($("#difficulty-row"));
}
function setRowHeight(difficulty) {// sets the height of the row depending on the difficulty so that the dots apear round no matter the screen size or how many dots are on screen.  
    const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
    const noOfRows = Math.sqrt(noOfDots);
    let newHeight = 100 / noOfRows + "%"; // sets the height to a percentage that can be used in css
    $(".dot-row").height(newHeight);
}
function generateDotsHTML(difficulty) {
    const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
    const noOfRows = Math.sqrt(noOfDots);
    const noOfCols = Math.sqrt(noOfDots);
    let dotCounter = 1;
    let dotsHTML = "";
    for (let row = 1; row <= noOfRows; row++) {  //loops through adding html to the and loops through the number of times depending on difficulty       
        dotsHTML += `<div class = "row dot-row">`;
        for (let col = 1; col <= noOfCols; col++) {
            dotsHTML += `<div id="dot-${dotCounter}" class="col dot"></div> `;
            dotCounter++;
        }
        dotsHTML += "</div>";
    }
    return dotsHTML;
}
//---------------taken directly from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API--------------//
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}
function checkForHighScore() { // sets high score
    if (localStorage.length === 0) { // if no high score present it sets it to 0
        setHighScore(0);
    } else { // if high score is present it sets the high score.
        let currentHighScore = localStorage.getItem("highScore");
        setHighScore(currentHighScore);
    }
}
/*---------------------------------------------------------*/
