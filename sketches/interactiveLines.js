const interactiveLines = (p) => {
let lineData;
let maxLength;
let eX = 400;
let eY = 300;

p.setup = async () => {
    lineData = await p.loadJSON('/assets/output.json');
    p.createCanvas(455,600);

}

p.draw = function(){
    p.background(10);
    let x = 0;
    let y = 0;

    maxLength = 20;

    drawCircle();
    updateCircle();

    for (let i = 0; i < 1500; i++){
        let r = p.map(p.noise(p.frameCount * 0.02), -1, 1, 0, 255);
        let g = p.map(p.noise(p.frameCount * 0.02 + 2), -1, 1, 0, 255);
        let b = p.map(p.noise(p.frameCount * 0.02 + 4), -1, 1, 0, 255);
        let farbe = p.color(r,g,b);
        p.strokeWeight(1);
        p.stroke(farbe);
        p.strokeCap(p.SQUARE);
        // here we set the direction of the line, based on the mouse pos. now circle pos.
        let dir = p.createVector(eX -x, eY - y);
        // here we define the length of the line
        dir.setMag(maxLength);
        
        p.strokeWeight(5);
        p.line(x,y,x + dir.x,y + dir.y);
        x = x + 20;

        if ( x > p.width){
            x = 0;
            y = y + 20;
        }
     
    }

};
function drawCircle(){
    p.fill(255,0,0,0);
    p.noStroke();
    p.circle(eX, eY, 50);
};
function updateCircle(){
    eX = p.map(p.noise(p.frameCount * 0.005), 0, 1, 0, p.width);
    //here we give an offset to the y pos, otherwise it would be equal to x and only move on a straight line
    eY = p.map(p.noise(p.frameCount * 0.005 + 1000), 0, 1, 0, p.height);
};

}




new p5(interactiveLines, "interactiveLines")

// function keyPressed (){
//     if (key == 's' || 'S'){
//         saveCanvas("interactiveLines", 'jpg');
//     }
// }


