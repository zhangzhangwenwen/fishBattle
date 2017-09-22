var FISH_SIZE=[
	null,
	{w: 55, h: 37, collR: 17},
	{w: 78, h: 64, collR: 24},
	{w: 72, h: 56, collR: 20},
	{w: 77, h: 59, collR: 22},
	{w: 107, h: 122, collR: 29},
];
	//鱼类
	class Fish{
		constructor(type){
			this.type=type
			this.x=300
			this.y=300
			this.rotate=135
			this.cur=0
			this.speed=1
			this.move()
		}
		draw(gd){
			var w=FISH_SIZE[this.type].w
			var h=FISH_SIZE[this.type].h	
			this.collR=FISH_SIZE[this.type].collR
			gd.save()
			gd.translate(this.x,this.y)
			gd.rotate(d2a(this.rotate))
			if(this.rotate>90&&this.rotate<270){
				gd.scale(1,-1)
			}
			gd.drawImage(JSON["fish"+this.type],
			 0,this.cur*h,w,h,
		     -w/2,-h/2,w,h
      	 )
			gd.restore()
	    }
		move(){
			//移动
			this.timer=setInterval(function(){
				this.x+=Math.cos(d2a(this.rotate))*this.speed
				this.y+=Math.sin(d2a(this.rotate))*this.speed
			}.bind(this),16)
			//摆尾
			setInterval(function(){
				this.cur++
				if(this.cur==4){
					this.cur=0
				}
			}.bind(this),300)
		}
}