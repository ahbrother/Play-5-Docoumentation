const ambientSphere = (p) => {
    let winkel = 45;
    p.setup = async () => {
        p.createCanvas(455,600,p.WEBGL);
        p.angleMode(p.DEGREES);

    };

     
    p.draw = function(){
        p.background(20);
        let weiss = p.color(255,255,255);
        p.updateWinkel();
     
        p.orbitControl();
        p.fill(weiss, 80);
        p.stroke(255,40);
        // p.spotLight(100,10,10, p.width, 20, 5);
        p.directionalLight(100, 20, 200, 20, 50);
        // p.ambientLight(100,80, 20,90);

        // p.updateWinkel();
        p.rotateX(winkel);
        p.rotateY(winkel);
        p.sphere(80,15,7);

        }

        p.updateWinkel = () => {
            winkel += 1;
    

        }
      
    };


new p5(ambientSphere, "ambientSphere");