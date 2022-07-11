import Box from '../src/index.js';

function BoxClickerGame(){

    /**
     * @type {HTMLElement} wrapper
     */
    const wrapper = document.querySelector('.wrapper');

    /**
     * @type {HTMLDivElement} pauseScreen
     */
    const pauseScreen = document.querySelector('.pause-screen');

    /**
     * @type {HTMLDivElement} scorePanel
     */
    const scorePanel = document.querySelector('.score');

    /**
     * @type {HTMLButtonElement} playBtn
     */
    const playBtn = document.getElementById('play-btn');

    /**
     * @type {HTMLDivElement} boxElement
     */
    let boxElement = null;

    /**
     * @type {number}
     */
    let playingTimeOut = null;
    
    /**
     * @type {number}
     */
    let stopingTimeOut = null;

    /**
     * @type {Box} box
     */
    let box = null;

    /**
     * @type {number} score
     */
    let score = 0;

    this.run = function(){
        console.log("Box Clicker is up and running...");

        init();

        handleEvents();
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
     */
    function startPlaying(){

        let x,y;
        let randNumber = Math.floor(Math.random()*3000);

        boxElement.style.opacity = 0;

        playingTimeOut = window.setTimeout(function(){
            
            [x,y] = randomVector();

            updateBox(x,y);
            
        },randNumber);

        score += 10;
        scorePanel.innerHTML = "Score : "+score;

        return;
    }

    /**
     * 
     */
    function stopPlaying(){
        
        window.clearTimeout(playingTimeOut);
        window.clearTimeout(stopingTimeOut);

        pauseScreen.style.display = "block"
        playBtn.classList.add('visible');
        
        score = 0;
        scorePanel.innerHTML = "Score : "+score;
    }

    /**
     * 
     * @returns Returns x and y cordinates of the box element.
     */
    function randomVector(){

        return [Math.abs(Math.floor(Math.random() * window.innerWidth) - box.size),Math.abs(Math.floor(Math.random() * window.innerHeight) - box.size)];
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
        boxElement.style.opacity = 1;
    };

    /**
     * 
     */
    function handleEvents(){

        playBtn.addEventListener('click',handleGameStart,false);
        window.addEventListener('dblclick',handleGamePause,false);
        boxElement.addEventListener('click',handleBoxClick,false);
    };

    /**
     * 
     * @param {Event} e
     * @handler
     */
    function handleBoxClick(e){

        window.clearTimeout(playingTimeOut);

        startPlaying();
    };

    /**
     * 
     * @param {Event} e 
     * @handler
     */
    function handleGameStart(e){

        pauseScreen.style.display = "none"
        playBtn.classList.remove('visible');

        startPlaying();
    }

    /**
     * 
     * @param {Event} e
     * @handler
     */
     function handleGamePause(e){

        pauseScreen.style.display = "block"
        playBtn.classList.add('visible');

        stopPlaying();
    };
};

const setup = (() => {

    window.addEventListener('load',()=>{

        window.app = new BoxClickerGame();
        window.app.run();

    });
    
})();
