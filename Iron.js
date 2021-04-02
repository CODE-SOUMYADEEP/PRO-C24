class Iron {
    constructor(x, y) {
        var options = {
          'density':30,
          'friction': 3,
          'restitution':0.8
        };
        this.body = Bodies.rectangle(x, y, 150, 70, options);
        this.width = 150;
        this.height = 70;
        World.add(world, this.body);
      };
      display(){
        var stonepos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(stonepos.x, stonepos.y);
        rotate(angle);
        strokeWeight(4);
        stroke('orange')
        fill('grey')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}