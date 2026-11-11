let data;

async function setup(){
    data = await loadJSON('/assets/output.json');
    // if your JSON is an object, not an array, use Object.values(data)
    data = Array.from(data).filter(d =>
    d.trend != null && d.value != null && d.incValue != null
  );

    console.log(data);
    createCanvas(800,600);
    background(120);
    angleMode(DEGREES);

}

function draw(){




    for (let i = 0; i < data.length; i++){
        let x = random (width);
        let y = random(height);
        let yStagnant = random (height/3, height/3 + 200);
        let yRising = random (0, height/3);
        let ySinking = random (height / 3 + 200, height);
        let endX = random(width);
        let endY = random(height);

        if(data[i].trend == "stagnant"){
            stroke(180, 80);
            endY = yStagnant;
            line(x,yStagnant,endX, endY);
        } else if (data[i].trend == "rising"){
            stroke(0,255,0, 80);
            endY = yRising;
            push();
            rotate(30);
            line(x,yRising, endX, endY);
            pop();
        } else if (data[i].trend == "falling") {
            stroke(255,0,0, 80);
            endY = ySinking;
            line(x,ySinking, endX, endY);
        }
        // strokeWeight(5);
        strokeWeight(data[i].incValue);
        // line(x,y,endX, endY);
        console.log(data[i].trend);
    }

}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('LinesMuster', 'jpg');
  }
}