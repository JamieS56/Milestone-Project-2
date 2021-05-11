document.addEventListener("DOMContentLoaded", function(){
    console.log("hi DOM")

    
    
        // this will run after difficulty is selected and choose which dot starts to shrink
    function startGame(difficulty){

        let score = 0

        console.log("game Started")
        let dotArray

        if (difficulty === 'easy'){
            dotArray = ["#dot-1", "#dot-2", "#dot-3", "#dot-4", "#dot-5", "#dot-6", "#dot-7", "#dot-8", "#dot-9"];
        }else if (difficulty === 'medium'){
            dotArray = ["#dot-1", "#dot-2", "#dot-3", "#dot-4", "#dot-5", "#dot-6", "#dot-7", "#dot-8", "#dot-9", "#dot-10", "#dot-11", "#dot-12", "#dot-13", "#dot-14", "#dot-15", "#dot-16"];

        }else if (difficulty === 'hard'){
            dotArray = ["#dot-1", "#dot-2", "#dot-3", "#dot-4", "#dot-5", "#dot-6", "#dot-7", "#dot-8", "#dot-9", "#dot-10", "#dot-11", "#dot-12", "#dot-13", "#dot-14", "#dot-15", "#dot-16", "#dot-17", "#dot-18", "#dot-19", "#dot-20", "#dot-21", "#dot-22", "#dot-23", "#dot-24", "#dot-25"];
        
        }

        dotShrink(dotArray, score)

    }   
        
    function dotShrink(array, score){
        console.log(array) 
        
        let rNumber = Math.floor(Math.random() * array.length)//chooses the random number
        let dot = array[rNumber]
        console.log(rNumber)
        startShrink(dot, array, rNumber)                                       
    }

    function startShrink(dot, array, rNumber) {
        console.log("shrink")
        $(dot).css('backgroundColor', 'green')


        shrink = anime({
            targets: dot,

            scale: {
                value: 0,
                duration: 2000,
                delay: 500,
                easing: 'linear'
            },
              update: function(anim) {
                console.log(Math.round(anim.progress))

                $(dot).attr('shrinkage', parseInt(Math.round(anim.progress)));
            }        
        });


        $('.dot').click(addScore)

        shrink.finished.then(function(){
            if (array.length !=0){
            array.splice(rNumber, 1)
            dotShrink(array)
        }})
    }
    

    function addScore() {

        console.log('score is being processed')

            if (this.css("background-color") === green){

                this.addClass("hidden")

                let score = parseInt($('#score').text())
                score = score + (this.attr("shrinkage")/100 - 1)
                $('#score').text(score)

            }


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
               <div id="dot-1" value = "0" class = "dot"></div>
               </col>
               <col>
               <div id="dot-2" value = "0" class = "dot"></div>
               </col>
               <col>
               <div id="dot-3" value = "0" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
               <col>
               <div id="dot-4" value = "0" class = "dot"></div>
               </col>
               <col>
               <div id="dot-5" value = "0" class = "dot"></div>
               </col>
               <col>
               <div id="dot-6" value = "0" class = "dot"></div>
               </col>
            </row>
            <row class = "dot-row">
               <col>
               <div id="dot-7" value = "0" class = "dot"></div>
               </col>
               <col>
               <div id="dot-8" value = "0" class = "dot"></div>
               </col>
               <col>
               <div id="dot-9" value = "0" class = "dot"></div>
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
