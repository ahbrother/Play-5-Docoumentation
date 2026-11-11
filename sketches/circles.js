const circles = (p) => {
    let sound;
    let amp;


    p.setup = async () => {
        p.createCanvas(455,600);
        p.blendMode(p.DIFFERENCE);


    p.draw = function(){
        p.background(20);

          let breite = p.map(p.noise(p.frameCount * 0.009), 0, 1,20,400);
            
        p.fill(255,0,0);
        p.stroke(0);
        p.strokeWeight(p.random(1,10));
        p.circle(p.width/2, p.mouseY, breite);
      
        if (p.mouseY < 0){
            p.mouseY = 0;
        }
        else if(p.mouseY > p.height){
            p.mouseY = p.height;
        }
        };  
        
    };

}

new p5 (circles, "circles");
