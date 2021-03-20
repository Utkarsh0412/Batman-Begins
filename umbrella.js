class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,30,80,options)
        this.image=loadImage("walking_1.png")
    World.add(world,this.body)
    }
    display(){
        push()
var pos=this.body.position;
imageMode(CENTER)
image(this.image,pos.x,pos.y+70,300,300)
pop()    
}
    
}