const tolerance = 5;

let centerX;
let centerY;
let r;
let dists;
let t;
let error =0;
let last = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0x00);
    frameRate(60);
    centerX = width / 2;
    centerY = height / 2;
    let font = loadFont('./VPPixel-Simplified.otf');
    textFont(font)
    textSize(35)
    textAlign(CENTER, CENTER);
    t = "";
}

function draw() {
    fill(0xFF);
    circle(centerX, centerY, 5);
} 

function mousePressed() {
    background(0x00)
    redraw()
    let x = mouseX - centerX;
    let y = mouseY - centerY;
    r = Math.sqrt(x ** 2 + y ** 2);
    
    fill(0xFF);
    noStroke();
    circle(mouseX, mouseY, 5);
    
    noFill();
    stroke(0xFF);
    circle(centerX, centerY, r * 2);
    
    dists = [];
    push();
}

function getError(list, target) {
    let error = 0;
    sum = list.reduce((x, y) =>
        (x + y)
    );
    error = sum/target;
    return error;
}

function mouseDragged() {

    let x = mouseX - centerX;
    let y = mouseY - centerY;
    let d = Math.abs(r - Math.sqrt(x ** 2 + y ** 2));
    let dNorm = Math.min(2, 2 * d / r * tolerance)

    let green;
    let red;
    if (dNorm < 1) {
        green = 0xFF;
        red = Math.round(dNorm * 0xFF);
    } else
    if (dNorm == 1) {
        green = 0xFF;
        red = 0xFF
    } else
    if (dNorm > 1) {
        green = Math.round((2-dNorm) * 0xFF);
        red = 0xFF;
    }
    
    fill(red,green,0x00);
    noStroke();
    circle(mouseX, mouseY, 20-(dNorm*3));
    
    dists.push(1 - dNorm / 2);
    // console.log(1 - dNorm/2)
    last = error;
    error = getError(dists, dists.length);
    stroke(0x00);
    fill(0x00);
    text((last * 100).toFixed(2), width / 2, width / 2 - 25);
    fill(0xFF);
    t = text((error*100).toFixed(2), width / 2, width / 2 - 25);



}

