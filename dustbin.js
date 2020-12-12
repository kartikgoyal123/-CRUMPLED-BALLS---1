class dustbin
{
	constructor(x,y,width,height)
	{
	   var options={
	     isStatic:true
         }
         this.x=x;
         this.y=y;
         this.width=width;
         this.height=height;
         this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

	}
	display()
	{
                var dustbinpos=this.body.position;		

                push()
                translate(dustbinpos.x, dustbinpos.y);
                rectMode(CENTER)
                strokeWeight(3);
                fill(255)
                rect(0,0,this.width,this.height);
		pop()	
	}

}