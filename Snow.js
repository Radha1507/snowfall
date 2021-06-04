class Snow{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0
            
        }
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snowIMG.png");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.position.y<350){
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,this.r,this.r);
          pop();
        }

        
        if(this.body.position.y>350){
          World.remove(world,this.body)
        }
    }

};