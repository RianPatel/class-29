class Slingshot{
  constructor(body,point){
      var Option={
        length:30,
        stiffness:0.04,
        bodyA:body,
        pointB:point  
      }
    this.sling = Matter.Constraint.create(Option)
    World.add(world, this.sling);

    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
  }
  
  display(){
   
    
    image(this.sling2,170,20)

    if(this.sling.bodyA){ //bodyA is not empty
      push();
      strokeWeight(7)
      

      //When the bird is on the left side of the sling
      if(this.sling.bodyA.position.x<220){
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y, this.sling.pointB.x-20 , this.sling.pointB.y);
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y, this.sling.pointB.x+20 , this.sling.pointB.y);
        image(this.sling3,this.sling.bodyA.position.x-25,this.sling.bodyA.position.y-10,15,30)
      }
      //When the bird is on the right side of the sling
      else{
        line(this.sling.bodyA.position.x+20,this.sling.bodyA.position.y, this.sling.pointB.x-20 , this.sling.pointB.y);
        line(this.sling.bodyA.position.x+20,this.sling.bodyA.position.y, this.sling.pointB.x+20 , this.sling.pointB.y);
        image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)
      }

      pop();

    }

    image(this.sling1,200,20)
  }
  
  
  fly(){
    //bodyA should not be bird anymore
    //bodyA should be empty - null
    this.sling.bodyA=null;
  }


}


//m - modified --> old file in which changes are made
//u - untracked --> new file