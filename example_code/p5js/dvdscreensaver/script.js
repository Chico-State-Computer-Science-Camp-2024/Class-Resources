let img;
let canvasWidth = 800;
let canvasHeight = 600;
let xPos;
let yPos;
let xSpeed = 1;
let ySpeed = 1;
function preload(){
    img = loadImage('dvd.jpg');
}

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    xPos = random(0, canvasWidth-img.width);
    yPos = random(0, canvasHeight-img.height);
    
}

function draw(){
    rect(0, 0, canvasWidth, canvasHeight);
    image(img, xPos, yPos);
    xPos += xSpeed;
    yPos += ySpeed;
    if(xPos > canvasWidth - img.width || xPos < 0){
        xSpeed = xSpeed * -1;
    }
    if(yPos > canvasHeight - img.height || yPos < 0){
        ySpeed = ySpeed * -1;
    }
}