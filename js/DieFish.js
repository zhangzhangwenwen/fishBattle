//死鱼
	class DieFish{
		constructor(type){
			this.type=type
			this.x=0
			this.y=0
			this.rotate=0
			this.cur=0
			this.speed=1
			this.move()
		}
		draw(gd){
			var w=FISH_SIZE[this.type].w
			var h=FISH_SIZE[this.type].h	
			gd.save()
			gd.translate(this.x,this.y)
			gd.rotate(d2a(this.rotate))
			if(this.rotate>90&&this.rotate<270){
				gd.scale(1,-1)
			}
			gd.drawImage(JSON["fish"+this.type],
			 0,(this.cur+4)*h,w,h,
		     -w/2,-h/2,w,h
      	 )
			gd.restore()
	    }
		move(){
			//争扎
			setInterval(function(){
				this.cur++
				if(this.cur==8){
					this.cur=4
				}
			}.bind(this),100)
		}
}

	