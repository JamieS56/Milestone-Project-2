document.addEventListener("DOMContentLoaded", function(){
    console.log("hi DOM")

    $('#start-game-btn').click(function(){
        console.log('clicked')
        $("#game-over").addClass("hidden")
        chooseDifficulty()})

    

       // this will run after difficulty is selected and choose which dot starts to shrink
    function startGame(difficulty){

         $('#score').text(0)

        console.log("game Started")
        let dotArray

        if (difficulty === 'easy'){
            dotArray = ["#dot-1", "#dot-2", "#dot-3", "#dot-4", "#dot-5", "#dot-6", "#dot-7", "#dot-8", "#dot-9"];
        }else if (difficulty === 'medium'){
            dotArray = ["#dot-1", "#dot-2", "#dot-3", "#dot-4", "#dot-5", "#dot-6", "#dot-7", "#dot-8", "#dot-9", "#dot-10", "#dot-11", "#dot-12", "#dot-13", "#dot-14", "#dot-15", "#dot-16"];

        }else if (difficulty === 'hard'){
            dotArray = ["#dot-1", "#dot-2", "#dot-3", "#dot-4", "#dot-5", "#dot-6", "#dot-7", "#dot-8", "#dot-9", "#dot-10", "#dot-11", "#dot-12", "#dot-13", "#dot-14", "#dot-15", "#dot-16", "#dot-17", "#dot-18", "#dot-19", "#dot-20", "#dot-21", "#dot-22", "#dot-23", "#dot-24", "#dot-25"];
        
        }

        dotShrink(dotArray)

    }   
    
    
        
    function dotShrink(array){

        let rNumber = Math.floor(Math.random() * array.length)//chooses the random number
        let dot = array[rNumber]

        if (array.length != 0){
            array.splice(rNumber, 1)
            startShrink(dot, array, rNumber);
        }
           



    }

    function startShrink(dot, array, rNumber) {
   
        $(dot).css('backgroundColor', '#1BE00A')
         $(dot).addClass('active')

        shrink = anime({
            targets: dot,

            scale: {
                value: 0,
                duration: 1000,
                delay: 50,
                easing: 'linear'
            },
              update: function(anim) {

                $(dot).attr('shrinkage', parseInt(Math.round(anim.progress)));
            }        
        });


        $('.dot').click(dot, addScore) 

        shrink.finished.then(function(){
            if (array.length !== 0){
                dotShrink(array);
            }else{
            console.log('finnished')
            $("#game-over").removeClass("hidden")
            //$('#start-game-btn').click(chooseDifficulty())

        }

    })
        
    }
    


    function addScore(dot) {

        if ($(dot.target).hasClass('active')){// means only the selected green dot can add score.

            $(dot.target).addClass("hidden")

            let score = parseInt($('#score').text())
            score = parseInt(score) + Math.floor((1/parseInt($(dot.target).attr("shrinkage"))*1000))
            console.log("last score was " + Math.floor((1/parseInt($(dot.target).attr("shrinkage"))*1000)))
            $('#score').text(score)
            $(dot).removeClass('active')

         } 
        dot.stopImmediatePropagation()
     }


   // code to set difficulty of game

    
    
    function chooseDifficulty(){
        console.log('difficulty being chosen')

    $("#difficulty-row").removeClass("hidden")
    } 
    let i = 0
    for (i = 0;i < 3; i++) {
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
               <div id="dot-6" class = "dot"></div>
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
