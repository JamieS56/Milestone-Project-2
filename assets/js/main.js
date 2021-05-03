document.addEventListener("DOMContentLoaded", function() {
            console.log("hi")
            function startGame() {
            

            }

            function startShrink() {

            }

            function stopShrink() {

            }

            function addScore() {

            }

            function changeDifficulty(difficulty){
                console.log(difficulty);


            }
            for(let i = 0; i < 3; i++){
                
                document.getElementsByClassName("difficulty-button")[i].addEventListener("click", function(){
                    let difficulty = this.value
                    console.log(difficulty);
                }) 
            }
        })
