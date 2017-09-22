//金币
class Coin{
	constructor(type){
		this.type=type
		this.x=0
		this.y=0
        this.cur=0

	}
	draw(gd){
		var timer=setInterval(function(){
			gd.drawImage(JSON["coinAni"+this.type],
				0,this.cur*60,60,60,
				this.x,this.y,60,60
			)
			this.cur++
			if(this.cur==10){
				this.cur=0
				clearInterval(timer)
			}
			
			this.x+=(0-this.x)/20
			this.y+=(600-this.y)/20
	  }.bind(this),16)

  }
}
