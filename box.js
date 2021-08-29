class Box{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.5,
            friction : 0.1,
            density : 0.05
        }
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
World.add(world,this.body)
this.visibility = 255
    }
    display(){
        if(this.body.speed<15){
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            fill("blue")
            strokeWeight(3)
            stroke("white")
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop()
        }
        else{
            World.remove(world, this.body)
            this.visibility = this.visibility-5
        }
    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
        score++
        }
    }
}