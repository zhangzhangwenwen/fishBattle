//渔网
var WEB_SIZE=[
	null,
	{x:332,y:373,w:87,h:87},
	{x:14,y:412,w:111,h:111},
	{x:178,y:370,w:126,h:126},
	{x:256,y:200,w:147,h:147},
	{x:0,y:246,w:162,h:152},
	{x:242,y:0,w:182,h:182},
	{x:20,y:22,w:200,h:200}
];
class Web{
	constructor(type){
		this.type=type
		this.x=0
		this.y=0
		this.scale=1
		this.move()
	}
	draw(gd){
	var w=WEB_SIZE[this.type].w
	var h=WEB_SIZE[this.type].h
	var x=WEB_SIZE[this.type].x
	var y=WEB_SIZE[this.type].y
	 gd.save()
	 gd.translate(this.x,this.y)
	 gd.scale(this.scale,this.scale)
	 gd.drawImage(JSON["web"],
	  x,y,w,h,
	  -w/2,-h/2,w,h
	)
	 gd.restore()	
	}
	
	 move(){
	 	var timer=setInterval(function(){
		  	this.scale+=0.03
		  	if(this.scale==1){
		  		clearInterval(timer)
		  	}
	 	}.bind(this),30)
	 }
}
	
