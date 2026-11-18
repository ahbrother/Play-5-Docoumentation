const sphereSVG = (p) => {
    let container;

p.setup = () => {
    container = document.getElementById("sphereSVG")
    p.createCanvas(container.clientWidth,container.clientHeight, p.WEBGL);

    new ResizeObserver(() => {
    p.resizeCanvas(container.clientWidth, container.clientHeight)
    }).observe(container)
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