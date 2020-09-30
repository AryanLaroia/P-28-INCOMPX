class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
        restitution:0,
        friction:1,
        density:1
        
        
        
        
        
        
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     this.image = loadImage("stone.png");


     //this.body.scale = 0.00001;
     
      World.add(world, this.body);
      
    }
    display(){
      ellipseMode(RADIUS);
      imageMode(RADIUS);
      image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

      
      
    }
  }