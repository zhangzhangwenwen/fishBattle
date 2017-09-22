var SHARK_SIZE=[
	null,
	{w: 509, h:272, collR: 49},
	{w: 509, h:272, collR: 49},
];	
//死鲨鱼
class DieShark{
	constructor(type){
		this.type=type||1
		this.x=0
		this.y=0
		this.rotate=0
		this.cur=0
		this.speed=1
		this.move()
	}
	draw(gd){
		var w=SHARK_SIZE[this.type].w
 		var h=SHARK_SIZE[this.type].h
 		gd.save()
		gd.translate(this.x,this.y)
		gd.rotate(d2a(this.rotate))
		if(this.rotate>90&&this.rotate<270){
			gd.scale(1,-1)
		}
			gd.drawImage(JSON["shark"+this.type],
			0,(this.cur+6)*h,w,h,
		    -w/2,-h/2,w,h
      	)
			gd.restore()
	}
	move(){
		var timer=setInterval(function(){
				this.cur++
				if(this.cur==12){
					this.cur=6
					clearInterval(timer)
				}
			}.bind(this),300)
    }
}
	
	