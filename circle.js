const tolerance = 7;

let centerX;
let centerY;
let r;
let dists;

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
    
    dists.push(d);

    

}

