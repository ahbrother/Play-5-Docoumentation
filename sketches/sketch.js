let data;
let winkel;

async function sketch(p){
    p.data = await p.loadJSON('/assets/output.json');
    // p.console.log(data);
    p.createCanvas(455, 600, p.WEBGL);
    p.frameRate(5);
    p.background(120,120,120);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);

    p.draw = function() {
    p.orbitControl();

    let x = p.random(p.width);
    let y = p.random(p.height);
    let z = p.random(0,200);

    let winkel = p.random(0,180);


    for (let i = 0; i < p.data.length; i++){

        // p.console.log(winkel)
        p.translate(p.width/2, p.height/2);
        p.rotate(winkel);
        if(i % 2){
            p.stroke(255,0,0);
            p.fill(0,0,0);
        } else {
            p.stroke(0,0,0);
            p.fill(255,0,0);
        }
        //lights!!!!!!! that way we would be able to get a more natural 3D Feeling.
        // ambientLight(128, 128, 128);
        // directionalLight(128, 128, 128, 0, 0, -1);

        p.strokeWeight(p.random(0,10));
        p.box(p.x,p.y,p.z, p.data[i].value/100,p.data[i].value/100);


    }
}
}




new p5(sketch, "sketch");

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('RechtEckMuster', 'jpg');
  }
}
