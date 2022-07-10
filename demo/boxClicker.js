import Box from '../src/index.js';

function BoxClickerGame(){

    /**
     * @type {HTMLElement} wrapper
     */
    const wrapper = document.querySelector('.wrapper');

    /**
     * @type {HTMLDivElement} boxElement
     */
    let boxElement = null;

    /**
     * @type {Box} box
     */
    let box = null;

    let isClicked = false;

    this.run = function(){
        console.log("Box Clicker is up and running...");

        init();

        handleEvents();

        let x,y;

        window.setInterval(function(){

            [x,y] = randomVector();

            updateBox(x,y);

            if(isClicked){

                alert("box clicked !");
                isClicked = false;
            }
            
        },1000);

    };

    /**
     * 
     */
    function init(){

        box = Object.create(Box);

        const [x,y] = randomVector();

        createBox(x,y);
    };

    /**
     * 
     * @returns Returns x and y cordinates of the box element.
     */
    function randomVector(){

        return [Math.abs(Math.floor(Math.random() * window.innerWidth) - 50),Math.abs(Math.floor(Math.random() * window.innerHeight) - 50)];
    }

    /**
     * 
     * @param {Box} box 
     * @param {number} x 
     * @param {number} y 
     */
    function createBox(x,y){

        boxElement = document.createElement('div');

        boxElement.classList.add('box');

        boxElement.style.position = "absolute";
        boxElement.style.left = x + "px";
        boxElement.style.top = y + "px";
        boxElement.style.width = box.size + "px";
        boxElement.style.height = box.size + "px";

        wrapper.appendChild(boxElement);
    };

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    function updateBox(x,y){

        boxElement.style.left = x + "px";
        boxElement.style.top = y + "px";
    };

    /**
     * 
     */
    function handleEvents(){

        boxElement.addEventListener('click',handleBoxClick,false);
    };

    /**
     * 
     * @param {Event} e 
     */
    function handleBoxClick(e){

        isClicked = true;
    };
};

const setup = (() => {

    window.addEventListener('load',()=>{

        window.app = new BoxClickerGame();
        window.app.run();

    });
    
})();
