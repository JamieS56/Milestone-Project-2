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

    // code to set difficulty of game
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("difficulty-button")[i].addEventListener("click", function() {
            let difficulty = this.value
            console.log(difficulty);
            if (difficulty === "easy") {
                document.getElementById("game-box").innerHTML= 
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

        })
    }
})