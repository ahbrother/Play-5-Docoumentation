const sphere = (p) => {
    let winkel = 45;
    let container;

    p.setup = () => {
        container = document.getElementById("sphere");
        p.createCanvas(container.clientWidth,container.clientHeight,p.WEBGL);
        p.angleMode(p.DEGREES);
        weiss = p.color(255,255,255);
        p.background(20);

           new ResizeObserver(() => {
            p.resizeCanvas(container.clientWidth, container.clientHeight)
            p.background(20);
           }).observe(container)
    };

     
    p.draw = function(){
        updateWinkel();
        
     
        p.orbitControl();
        p.fill(weiss);
        p.stroke(0);

        for(let i = 0; i<10; i++){
            p.rotateY(winkel)
            p.sphere(200,20,20);

        }

    };

    updateWinkel = ()=>{
        if (p.mouseIsPressed){
            winkel += 0.5;
        }
       
    }
}

new p5(sphere, "sphere");