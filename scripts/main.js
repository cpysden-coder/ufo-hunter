console.log("hollow world");

//get the canvas
const canvas = document.getElementById('ufoCanvas');
canvas.width=900;
canvas.height=750;

function resize() {
    //canvas should cover full height and width of window at any resolution (less 20px for scroll bar)
    const height = window.innerHeight - 20;
    //calculate proper scaled width
    const ratio = canvas.width/canvas.height;
    const width = height*ratio;

    canvas.style.width=width+'px';
    canvas.style.height=height+'px';
}

window.addEventListener('load', resize, false),
//get the drawing object of the canvas
// const ctx = canvas.getContext('2d');

//set up drawing on the canvas
//      ctx.fillStyle = 'green';
//start at 0,0 then 150 wide and 75 high
//      ctx.fillRect(0,0,150,75);

//drawing things on the canvas using 2d context 
//   ctx.font='38px Arial';
//   ctx.fillStyle='red';
//text and position x,y = 30,130
//      ctx.fillText('UFO', 30, 130);
//      ctx.strokeText('Hunter',120,130);

// //use js to put an image on the canvas
// udemy_image = new Image();
// udemy_image.src = 'images/udemy.png';

// //place image at coordinates 0,0
// udemy_image.onload = () => {
//     return ctx.drawImage(udemy_image,80,20);
// };

//Game Basics
function GameBasics(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;

    //active playing field area - coordinates from top left 0,0
    this.playBoundaries = {
        top: 150,
        bottom: 650,
        left: 100,
        right: 800
    };

    this.setting = {
        //game settings go here
    };

    //collect the different positions and states here in a stack object
    this.positionContainer = [];
}

// return to current game position, status. Always returns to the top element of positionContainer
GameBasics.prototype.presentPosition = function () {
    return this.positionContainer.length > 0 ? this.positionContainer[this.positionContainer.lenght -1] : null
};

//now move to desired position
GameBasics.prototype.goToPosition = function(position) {
    //if already in a position clear the positionContainer
    if(this.presentPosition()) {
        this.positionContainer.length = 0;
    }
    //if there is an entry in a given position call it
    if(position.entry) {
        position.entry(play);
    }
    //setting the current game position in positionContainer
    this.positionContainer.push(position);
};

//push new position into the positionContainer
GameBasics.prototype.pushPosition = function(position) {
    this.positionContainer.push(position);
};

//remove or pop the position from the positionContainer
GameBasics.prototype.popPosition = function() {
    this.positionContainer.pop();
};