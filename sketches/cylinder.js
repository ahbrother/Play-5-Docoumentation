const cylinder = (p) => {
let winkel = 0;
const schritt = 100;   // distance added per cylinder
const anzahl = 3;
    p.setup = () => {
        p.createCanvas(455,600, p.WEBGL);
       
        p.angleMode(p.DEGREES);
  
  
    };


p.draw = () => {
  p.background(20);

  let farbeRot  = p.map(p.noise(winkel * 0.005), 0, 1, 0, 255);
  let farbeGrün = p.map(p.noise(winkel * 0.005 + 100), 0, 1, 0, 100);
  let farbeBlau = p.map(p.noise(winkel * 0.005 + 200), 0, 1, 0, 100);
  p.stroke(farbeRot, farbeGrün, farbeBlau);

  let abstand = 0;                       // distance from the starting point

  for (let i = 0; i < anzahl; i++) {
    p.position();                        // stacks translate, as before
    p.rotateY(winkel);                   // stacks rotation, as before

    abstand += schritt;
    let fuell = p.map(abstand, 0, anzahl * schritt, 255, 0, true);
    p.fill(fuell);                       // the further away, the whiter

    p.cylinder(50, 150, 10, 2);
  }
};

p.position = () => {
  p.translate(0, 0, schritt);
  winkel += 1;                           // kept inside, so the speed stays as you like it
};
}
new p5(cylinder, "cylinder");