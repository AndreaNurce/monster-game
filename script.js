
new Vue ({
    el: '#app',
    data : {
        showControls : false,
        showStartNewGame : true,
        playerHealth : 100,
        computerHealth : 100,
        updatePlayerUi : '',
        monsterUi : '',
        score : false,
        message : 'You lost',

    },
    methods : {

        startNewGame : function(){
            this.showControls = true ;
            this.showStartNewGame = false;
            this.score = false;

        },
        atack : function(){
            let randomPlayer = Math.floor((Math.random() * 10) + 1);
            let randomMonster = Math.floor((Math.random() * 10) + 1);
            this.playerHealth -= randomPlayer;
            this.computerHealth -= randomMonster;
            this.updatePlayerUi = `You lost ${randomPlayer}`  ;
            this.monsterUi = `You lost ${randomMonster}`;
            this.score = true;
            this.checkIfWin();



        },
        specialAtack: function () {
            let randomPlayer = Math.floor((Math.random() * 25) + 5);
            let randomMonster = Math.floor((Math.random() * 25) + 5);
            this.playerHealth -= randomPlayer;
            this.computerHealth -= randomMonster;
            this.updatePlayerUi = `You lost ${randomPlayer}`;
            this.monsterUi = `Monster lost ${randomMonster}`;
            this.score = true;
            this.checkIfWin();




        },
        heal : function(){
            let randomPlayer = Math.floor((Math.random() * 10) + 1);
            let randomHeal = Math.floor((Math.random() * 10) + 1);
            if(this.playerHealth + randomHeal - randomPlayer >= 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += randomHeal;
                this.playerHealth -= randomPlayer;

            }
            this.checkIfWin();
                        this.updatePlayerUi = `You lost ${randomPlayer}`;
            this.monsterUi = `You gained ${randomHeal}`;
            this.score = true;

        },
         checkIfWin: function(){
             if(this.playerHealth  <= 0 ){
                 let con = confirm("You lost !!!" + " New Game ???");
                 this.message = "You won";
                 if (con){
                     this.giveUp();
                     this.startNewGame();
                 }else{
                     this.giveUp();
                 }
             }if(this.computerHealth <= 0 ){
                 let con = confirm("You won !!!" + " New Game ???")
                 this.message = "You lost";
                 if (con) {
                     this.giveUp();
                     this.startNewGame();
                 } else {
                     this.giveUp();
                 }
             }
         },
         giveUp: function(){
             this.playerHealth = 100 ;
             this.computerHealth = 100 ;
             this.showControls = false;
             this.showStartNewGame = true;
             this.score = false;
         },
    }
})
