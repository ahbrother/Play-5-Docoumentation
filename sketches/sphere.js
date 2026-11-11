const sphere = (p) => {
    let winkel = 45;
    p.setup = async () => {
        p.createCanvas(455,600,p.WEBGL);
        p.angleMode(p.DEGREES);
           p.background(20);
    };

     
    p.draw = function(){
        p.updateWinkel();
        let weiss = p.color(255,255,255);
     
        p.orbitControl();
        p.fill(weiss);
        p.stroke(0);

        for(let i = 0; i<10; i++){
            p.rotateY(winkel)
            p.sphere(200,20,20);

        }

    };

    p.updateWinkel = ()=>{
        if (p.mouseIsPressed){
            winkel += 0.5;
        }
       
    }
}

new p5(sphere, "sphere");