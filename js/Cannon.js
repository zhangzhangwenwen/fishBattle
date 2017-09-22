var CANNON_SIZE=[
	null,
	{w: 74, h: 74},
	{w: 74, h: 76},
	{w: 74, h: 76},
	{w: 74, h: 83},
	{w: 74, h: 85},
	{w: 74, h: 90},
	{w: 74, h: 94}
];
	//炮筒
	class Cannon{
		constructor(type){
			this.type=type||1 
			this.x=431
			this.y=570
			this.rotate=0
			this.cur=0
		}
		draw(gd){
			var w=CANNON_SIZE[this.type].w
			var h=CANNON_SIZE[this.type].h
			 gd.save()
			 gd.translate(this.x,this.y)
			 gd.rotate(d2a(this.rotate))
			 gd.drawImage(JSON["cannon"+this.type],
				 0,h*this.cur,w,h,
				 -w/2,-h/2,w,h
			 )
			 gd.restore()
			
		}
		emit(){
			var timer=setInterval(function(){
		      this.cur++
		      if(this.cur==4){
		      	this.cur=0
		      	clearInterval(timer)
		      }
			}.bind(this),30)
			
		}
		
	}
	