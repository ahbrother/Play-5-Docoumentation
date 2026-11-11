let lData;
let tileWidth;
let tileHeight;

async function newLines(p){
    const raw = await p.loadJSON('/assets/output.json');
    lData = Array.from(raw).filter(d =>
    d.trend != null ); 
    
    
    p.createCanvas(455,600);
        p.angleMode(p.DEGREES);
    p.textMode(p.CENTER,p.CENTER);
    p.background(20);

    tileWidth = p.width/30;
    tileHeight = p.height/3.5;

    p.draw = function(){

    let x = 0;
    let y = 0;
    for (let i = 0; i < lData.length; i++){
        //beschriftung
        // noStroke();
        // fill(255);
        // text(i, x + tileWidth/2,y + tileHeight/2);
        
        // //grid
        // fill(0,90);
        // stroke(0);
        // strokeWeight(0.1);
        // rect(x,y, tileWidth, tileHeight);
        p.stroke(255);
        //  blendMode(DIFFERENCE);
        if (i % 2){
            p.stroke(255,0,0);
            // line(0,y,mouseX,y);
            // stroke(0,0,255);
            // line(x,0,x,mouseY);
        }; //modulo
        
         if (lData[i].trend == "rising"){
            p.strokeWeight(10);
            // stroke(0,255,0);
            p.line(x,y + tileHeight, x + tileWidth, y);
        // } else if (data[i].trend == "stagnant"){
        //     strokeWeight(4);
        //     stroke(0);
        //     line(x,y + tileHeight/2, x + tileWidth, y + tileHeight/2);
         } else if (lData[i].trend == "falling"){
            p.strokeWeight(4);
            // stroke(255,0,0);
            p.line(x,y, x + tileWidth, y + tileHeight);
        };

        x = x + tileWidth;
        

        if ( x > p.width){
            x = 0;
            y = y + tileHeight/2;
        }

        // console.log(lData);

    };
  
}
}

new p5(newLines, "newLines")

function keyPressed(){
    if (key == 's' || key == 'S'){
        saveCanvas ("NeueLinien", 'jpg');
    }

}