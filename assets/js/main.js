document.addEventListener("DOMContentLoaded", function(){
    console.log("hi DOM")


    // this will run after difficulty is selected and choose which dot starts to shrink
    function startGame(difficulty){
        console.log("game Started")
        let easyDotArray = [$("#dot-1"), $("#dot-2"), $("#dot-3"), $("#dot-4"), $("#dot-5"), $("#dot-6"), $("#dot-7"), $("#dot-8"), $("#dot-9")];
        let mediumDotArray = [$("#dot-1"), $("#dot-2"), $("#dot-3"), $("#dot-4"), $("#dot-5"), $("#dot-6"), $("#dot-7"), $("#dot-8"), $("#dot-9"), $("#dot-10"), $("#dot-11"), $("#dot-12"), $("#dot-13"), $("#dot-14"), $("#dot-15"), $("#dot-16")];
        let hardDotArray = [$("#dot-1"), $("#dot-2"), $("#dot-3"), $("#dot-4"), $("#dot-5"), $("#dot-6"), $("#dot-7"), $("#dot-8"), $("#dot-9"), $("#dot-10"), $("#dot-11"), $("#dot-12"), $("#dot-13"), $("#dot-14"), $("#dot-15"), $("#dot-16"), $("#dot-17"), $("#dot-18"), $("#dot-19"), $("#dot-20"), $("#dot-21"), $("#dot-22"), $("#dot-23"), $("#dot-24"), $("#dot-25")];
        
        if (difficulty === "easy"){
             
            for(let i = 0; i<9; i++){           
                let rNumber = Math.floor(Math.random() * easyDotArray.length)
                console.log(rNumber)
                //startShrink(easyDotArray[rNumber])
                easyDotArray.splice(rNumber, 1)  
                console.log(easyDotArray) 
            }    
        }else if(difficulty === "medium"){
            for(let i = 0; i<16; i++){           
                let rNumber = Math.floor(Math.random() * mediumDotArray.length)
                console.log(rNumber)
                //startShrink(mediumDotArray[rNumber])
                mediumDotArray.splice(rNumber, 1)  
                console.log(mediumDotArray) 
            }

        }else if(difficulty ==="hard"){
            for(let i = 0; i<25; i++){           
                let rNumber = Math.floor(Math.random() * hardDotArray.length)
                console.log(rNumber)
                //startShrink(hardDotArray[rNumber])
                hardDotArray.splice(rNumber, 1)  
                console.log(hardDotArray)
            } 
        }
    }
      

    function startShrink(dot) {

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
               <div id="dot-1" class = "dot"></div>
               </col>
               <col>
               <div id="dot-2" class = "dot"></div>
               </col>
               <col>
               <div id="dot-3" class = "dot"></div>
               </col>
                <col>
               <div id="dot-4" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-5" class = "dot"></div>
               </col>
               <col>
               <div id="dot6" class = "dot"></div>
               </col>
               <col>
               <div id="dot-7" class = "dot"></div>
               </col>
                <col>
               <div id="dot-8" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-9" class = "dot"></div>
               </col>
               <col>
               <div id="dot-10" class = "dot"></div>
               </col>
               <col>
               <div id="dot-11" class = "dot"></div>
               </col>
                <col>
               <div id="dot-12" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-13" class = "dot"></div>
               </col>
               <col>
               <div id="dot-14" class = "dot"></div>
               </col>
               <col>
               <div id="dot-15" class = "dot"></div>
               </col>
                <col>
               <div id="dot-16" class = "dot"></div>
               </col>
            </row>`;
            }else if(difficulty ==="hard"){
                 document.getElementById("game-box").innerHTML = 
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
                <col>
               <div id="dot-4" class = "dot"></div>
               </col>
                <col>
               <div id="dot-5" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-6" class = "dot"></div>
               </col>
               <col>
               <div id="dot-7" class = "dot"></div>
               </col>
               <col>
               <div id="dot-8" class = "dot"></div>
               </col>
                <col>
               <div id="dot-9" class = "dot"></div>
               </col>
                <col>
               <div id="dot-10" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-11" class = "dot"></div>
               </col>
               <col>
               <div id="dot-12" class = "dot"></div>
               </col>
               <col>
               <div id="dot-13" class = "dot"></div>
               </col>
                <col>
               <div id="dot-14" class = "dot"></div>
               </col>
                <col>
               <div id="dot-15" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-16" class = "dot"></div>
               </col>
               <col>
               <div id="dot-17" class = "dot"></div>
               </col>
               <col>
               <div id="dot-18" class = "dot"></div>
               </col>
                <col>
               <div id="dot-19" class = "dot"></div>
               </col>
                <col>
               <div id="dot-20" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
                <col>
               <div id="dot-21" class = "dot"></div>
               </col>
               <col>
               <div id="dot-22" class = "dot"></div>
               </col>
               <col>
               <div id="dot-23" class = "dot"></div>
               </col>
                <col>
               <div id="dot-24" class = "dot"></div>
               </col>
                <col>
               <div id="dot-25" class = "dot"></div>
               </col>
            </row>`
            
        }
        $("#difficulty-row").addClass("hidden")
        startGame(difficulty)

        })

        
    }

})
