class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic : true,
        restitution:0,
        friction:1,
        //density:1.2,
        
        
        
        
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     this.image = loadImage("mango.png");
     //this.body.scale = 0.001;
      World.add(world, this.body);
      
    }
    display(){
      //imageMode(CENTER);
      imageMode(RADIUS);
      image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
      

      
      
    }
  }