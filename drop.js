class Drop{

    constructor(x,y){
            var options={
           friction:0.1
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,4,options)
        World.add(world,this.body)
    
    }
    update(){
    
       if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x: random(0,500),y:random(0,650)})
       }
    }
    display(){
      push()
        noStroke()
       fill(0,0,225)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,4)
     pop()  
}

}
