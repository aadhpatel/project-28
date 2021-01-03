class Mango{
    constructor(x, y, radius, bodyA){
        var options = {
            bodyA:bodyA,
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
           
            
        }
        this.body = Bodies.circle(x, y, radius);
        this.width = width/10;
        this.height = height/10;
        this.image = loadImage("Images/mango.png");
        
        World.add(world, this.body);
    }

    fly(){
        this.sling.bodyA = null;
    }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
  