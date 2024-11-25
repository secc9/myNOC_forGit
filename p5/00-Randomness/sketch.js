//this is my first random walker
// Author: Ashley Sagar
// Date: 2024_11_25 - Monday 12:45


let walkerBlack; // declare my Walker object
let walkerWhite;
let walkerRed;
let walkerGreen;
let walkerBlue;


function setup() {
    // put setup code here
    createCanvas(600, 500);
    walkerBlack = new Walker(width/2, height/2, 0, 0, 0, 1);
    walkerWhite = new Walker(width/2, height/2, 255, 255, 255, 1);
    walkerRed   = new Walker(width/2, height/2, 255, 0, 0, 1);
    walkerGreen = new Walker(width/2, height/2, 0, 255, 0, 1);
    walkerBlue  = new Walker(width/2, height/2, 0, 0, 255, 1);
    background(255);
    
}

function draw() {
    // put drawing code here
    walkerBlack.step();
    walkerBlack.show();
    walkerWhite.step();
    walkerWhite.show();
    walkerRed.step();
    walkerRed.show();
    walkerGreen.step();
    walkerGreen.show();
    walkerBlue.step();
    walkerBlue.show();
    
};



class Walker{
    constructor(x, y, red, green, blue, size){
	this.x = x;
	this.y = y;
	this.red = red; //red
	this.green = green; //green
	this.blue = blue; //blue
	this.size = size;
    }

    show(){
	strokeWeight(this.size);
	stroke(this.red, this.green, this.blue);
	point(this.x, this.y);
    }

    step(){
	let choice = floor(random(4));

	if(choice === 0){
	    this.x++;
	}else if(choice === 1){
	    this.x--;
	}else if(choice === 2){
	    this.y++;
	}else{
	    this.y--;
	}
    }
    
}
