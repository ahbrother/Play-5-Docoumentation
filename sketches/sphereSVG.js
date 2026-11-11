const sphereSVG = (p) => {

p.setup = () => {
    p.createCanvas(455,600, p.WEBGL);
}

p.draw = () => {
    p.orbitControl();
    p.background(20);
    p.noFill();
    p.stroke(255);
    p.sphere(100,22,5);
}

p.keyPressed = () => {
    if (p.key === 's' || p.key === 'S'){
        p.saveCanvas("sphereSVG", 'svg');
    }
}
}



new p5(sphereSVG, "sphereSVG");