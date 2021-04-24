class Ball{
constructor(x,y,r){

 var options={
//density:1,
isStatic:true,
//frictionAir:0.4,
   
 }
this.ball=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.ball);

}

display(){

ellipseMode(RADIUS);
ellipse(this.ball.position.x,this.ball.position.y,this.r);


}


}