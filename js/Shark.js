
//鲨鱼	
 class Shark{
 	constructor(type){
 		this.type=type
 		this.x=0
 		this.y=0
 		this.cur=0
 		this.rotate=0
 		this.speed=1
 		this.move()
 	}
 	draw(gd){
 		var w=SHARK_SIZE[this.type].w
 		var h=SHARK_SIZE[this.type].h
 		this.collR=SHARK_SIZE[this.type].collR
 		gd.save()
			gd.translate(this.x,this.y)
			gd.rotate(d2a(this.rotate))
			if(this.rotate>90&&this.rotate<270){
				gd.scale(1,-1)
			}
			gd.drawImage(JSON["shark"+this.type],
			 0,this.cur*h,w,h,
		     -w/2,-h/2,w,h
      	 )
			gd.restore()
 	}
 	
 	move(){
 		//鲨鱼移动
			this.timer=setInterval(function(){
				this.x+=Math.cos(d2a(this.rotate))*this.speed
				this.y+=Math.sin(d2a(this.rotate))*this.speed
			}.bind(this),16)
		//鲨鱼摆尾
			var timer=setInterval(function(){
				this.cur++
				if(this.cur==6){
					this.cur=0
					//clearInterval(timer)
				}
			}.bind(this),300)
 	}
 	
 }
