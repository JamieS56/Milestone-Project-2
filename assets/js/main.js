let isGameInProgress = false
const NO_OF_DOTS_BY_LEVEL = {
  easy: 9,
  medium: 16,
  hard: 25
}
// When the start button gets clicked this function is called which checks if a game is currently in progress and shows up the difficulty UI.
function addStartButtonClickHandler() {
  $('#start-game-btn').click(function(){
    console.log('clicked')
    if (isGameInProgress === false){
      isGameInProgress = true
      $("#game-over").addClass("hidden")
      showDifficultUI()
    }
  })
}
//sets the score
function setScore(score) {
  $('#score').text(score);
}
//this function generates the array of dots depending on the difficulty using the constant at the top of the page and difficulty put into it.
function generateDots(difficulty) {
  const noOfDots = NO_OF_DOTS_BY_LEVEL[difficulty];
  let dotsArray = [];
  for(let i=1; i<=noOfDots;i++) {
    dotsArray.push(`#dot-${i}`);
  }
  return dotsArray;
}
// this will run after difficulty is selected and choose which dot starts to shrink.
function startGame(difficulty){
  setScore(0);
  let dotsArray = generateDots(difficulty);
  checkForDotsAndShrink(dotsArray)
}
function checkForDotsAndShrink(dotArray){
  let rNumber = Math.floor(Math.random() * dotArray.length)//chooses the random number
  let dot = dotArray[rNumber]
  if (dotArray.length != 0){
    dotArray.splice(rNumber, 1)
    startShrink(dot, dotArray, rNumber);
  }
}
function startShrink(dot, dotArray, rNumber) {
  $(dot).css('backgroundColor', '#1BE00A')
  shrink = anime({
    targets: dot,
    scale: {
      value: 0,
      duration: 2000,
      delay: 50,
      easing: 'linear'
    },
    update: function(anim) {
      $(dot).attr('shrinkage', parseInt(Math.floor(anim.progress)));
    },
    begin: function(anim){
      $(dot).attr('begun', anim.began)
    }
  });
  $('.dot').click(dot, onDotClick)
  shrink.finished.then(function(){
    if (dotArray.length !== 0){
      checkForDotsAndShrink(dotArray);
    }else{
      $("#game-over").removeClass("hidden")
      isGameInProgress = false
    }
  })
}
function calculateScoreForDot(dot) {
  return Math.floor((1/parseInt($(dot.target).attr("shrinkage"))*1000))
}
function onDotClick(dot) {
  if ($(dot.target).attr('begun') == 'true'){// means only the dot that is in the animation will score.
    // Hide the dot
    $(dot.target).addClass("hidden")
    let newScore = parseInt($('#score').text()) + calculateScoreForDot(dot);
    setScore(newScore)
  }
  dot.stopImmediatePropagation()
}
// code to set difficulty of game
function showDifficultUI(){
  $("#difficulty-row").removeClass("hidden")
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


document.addEventListener("DOMContentLoaded", function () {
  addStartButtonClickHandler();
  for (i = 0; i < 3; i++) {
    document.getElementsByClassName("difficulty-button")[i].addEventListener("click", function () {
      let difficulty = this.value;
      const dotsHTML = generateDotsHTML(difficulty);
      document.getElementById("game-box").innerHTML = dotsHTML;
      $("#difficulty-row").addClass("hidden");
      startGame(difficulty);
    });
  }
});