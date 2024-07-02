let canvasWidth = 400;
let canvasHeight = 400;
let points = [];
let yPos = 0;
let xPos = 0;
let numDrops = 100;

async function setup(){
    createCanvas(canvasWidth, canvasHeight);
    xPos = random(0, canvasWidth);
    for(let i = 0; i < numDrops; i++){
        await sleep(1000);
        points.push({yPos: yPos, xPos: xPos});
    }
    
}

function draw(){
    background(220);
    raindrops();
}

function raindrops(){
    for (let point in points){
        ellipse(points[point].xPos, points[point].yPos, 5, 5);
        points[point].yPos += 5;
        if(points[point].yPos > canvasHeight){
            points[point].yPos = 0;
            points[point].xPos = random(0, canvasWidth);
        }
    }
}

function sleep(time){
    return new Promise(resolve => setTimeout(resolve, time));
}