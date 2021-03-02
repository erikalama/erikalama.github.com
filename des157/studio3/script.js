
        const startGame = document.getElementById('startgame');
        const game = document.getElementById('game');
        const topcomments = document.getElementById('topcomments');
        const bottomcomments = document.getElementById('bottomcomments');
        const startsound = new sound("media/oinkoink.mp3");
        const winsound = new sound("media/gamewin.mp3");

        var gameData = {
            dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
                '4die.jpg', '5die.jpg', '6die.jpg'
            ],
            players: ['player 1', 'player 2'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0, 
            gameEnd: 29
    };
        startGame.addEventListener("click", function(){
        startsound.play();
        gameData.index = Math.round(Math.random());
        gameData.score = [0,0];
        document.querySelector("#player1 .playerscore").innerHTML = 0;
        document.querySelector("#player2 .playerscore").innerHTML = 0;

        document.querySelector("#player1 .playercurrentscore > div").innerHTML = 0;
        document.querySelector("#player2 .playercurrentscore  > div").innerHTML = 0;
        game.innerHTML = "";
        document.getElementById("roll").style.display = "block";
        // topcomments.innerHTML = "Randomly pick the first player";

        setUpTurn();
    });

        document.getElementById('pass').addEventListener('click', function(){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setUpTurn();
    });
        function setUpTurn() {
            topcomments.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    }

        function throwDice() {
            bottomcomments.innerHTML = "";
            document.querySelector("#player1 .playercurrentscore > div").innerHTML = 0;
            document.querySelector("#player2 .playercurrentscore  > div").innerHTML = 0;
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            topcomments.innerHTML =`<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            game.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}">
                                <img src="${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            // console.log(gameData);

            if (gameData.rollSum === 2 ){
                // console.log("snake eyes were rolled");
                if (gameData.rollSum === 2) {
                    bottomcomments.innerHTML += '<p>OH snap! Snake eye!</p>';
                    gameData.score[gameData.index] = 0;// make player score 0
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);//Toggle player
                    showCurrentScore ();
                    setTimeout(setUpTurn, 2000);
                }
        }
            else if (gameData.roll1 === 1 || gameData.roll2 === 1){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);//Toggle player
                bottomcomments.innerHTML = `<p>Sorry one of your rolls was a one. Switching to ${gameData.players[gameData.index]}</p>`;
                setTimeout(setUpTurn, 2000);
        }
            else {
                if(gameData.index == 0) {
                    document.querySelector("#player1 .playercurrentscore > div").innerHTML = gameData.rollSum;      
                }else{
                    document.querySelector("#player2 .playercurrentscore  > div").innerHTML = gameData.rollSum;
                }
                gameData.score[gameData.index] += gameData.rollSum;
                setUpTurn();
                checkWinningCondition();
            }
        }

        function checkWinningCondition(){
            showCurrentScore ();
            if (gameData.score[gameData.index] > gameData.gameEnd){
                winsound.play();
                topcomments.innerHTML = `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h2>`;
                bottomcomments.innerHTML = "";
                startGame.innerHTML = "Start a New Game"; 
                document.getElementById("roll").style.display = "none";
            }
                
        }

        function showCurrentScore () {
            document.querySelector('#player1 .playerscore').innerHTML = gameData.score[0];
            document.querySelector('#player2 .playerscore').innerHTML = gameData.score[1];
        }



        //////////function to create soundeffect///////////

        function sound(src) {
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "none");
            this.sound.style.display = "none";
            document.body.appendChild(this.sound);
            this.play = function(){
                this.sound.play();
            }
            this.stop = function(){
                this.sound.pause();
            }    
        }