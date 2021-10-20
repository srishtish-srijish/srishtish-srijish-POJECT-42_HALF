class Drops {
    constructor(x, y) {
        var options = {
            friction: 0.1,
        }
        this.body = Bodies.circle(x, y, 5, options);
        
        World.add(world, this.body);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400)})
        }
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
    }

};
