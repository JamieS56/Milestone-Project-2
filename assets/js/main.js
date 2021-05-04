document.addEventListener("DOMContentLoaded", function() {
    console.log("hi DOM")

    function startGame(){
        console.log("game Started")
    }

    function startShrink() {

    }

    function stopShrink() {

    }

    function addScore() {

    }

    // code to set difficulty of game

    document.getElementById("start-game-btn").addEventListener("click", function(){
    $("#difficulty-row").removeClass("hidden")
    } )

    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("difficulty-button")[i].addEventListener("click", function() {
            let difficulty = this.value
            console.log(difficulty);
            if (difficulty === "easy") {
                document.getElementById("game-box").innerHTML= 
            `<row class = "dot-row">
               <col>
               <div id="dot-1" class = "dot"></div>
               </col>
               <col>
               <div id="dot-2" class = "dot"></div>
               </col>
               <col>
               <div id="dot-3" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
               <col>
               <div id="dot-4" class = "dot"></div>
               </col>
               <col>
               <div id="dot-5" class = "dot"></div>
               </col>
               <col>
               <div id="dot-6" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
               <col>
               <div id="dot-7" class = "dot"></div>
               </col>
               <col>
               <div id="dot-8" class = "dot"></div>
               </col>
               <col>
               <div id="dot-9" class = "dot"></div>
               </col>
            </row>`;

            }else if(difficulty ==="medium"){
                 document.getElementById("game-box").innerHTML = 
            `<row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>`;
            }else if(difficulty ==="hard"){
                 document.getElementById("game-box").innerHTML = 
                 `<row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
               <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
                <col>
               <div class = "dot"></div>
               </col>
            </row>`
            
        }
        $("#difficulty-row").addClass("hidden")
        startGame()

        })

        
    }
})