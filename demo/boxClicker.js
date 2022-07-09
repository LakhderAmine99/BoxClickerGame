function BoxClickerGame(){

    this.run = function(){
        console.log("Box Clicker is up and running...");
    };
};

const setup = (() => {

    window.addEventListener('load',()=>{

        window.app = new BoxClickerGame();
        window.app.run();

    });
    
})();
