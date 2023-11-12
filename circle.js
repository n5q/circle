let centerX;
let centerY;
let r;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0x00);
    frameRate(60);
    centerX = width / 2;
    centerY = height/2;
}

function draw() {
    fill(0xFF);
    circle(centerX, centerY, 5);
} 

function mousePressed() {
    let x = mouseX - centerX;
    let y = mouseY - centerY;
    r = Math.sqrt(x ** 2 + y ** 2);
    
    fill(0xFF);
    noStroke();
    circle(mouseX, mouseY, 5);
    
    noFill();
    stroke(0xFF);
    circle(centerX, centerY, r*2);
}


function mouseDragged() {
    let x = mouseX - centerX;
    let y = mouseY - centerY;
    let d = Math.abs(r - Math.sqrt(x ** 2 + y ** 2));
    fill(0xFF, 0xFF, 0x00);
    noStroke();
    circle(mouseX, mouseY, 20);
    console.log(d)
}

