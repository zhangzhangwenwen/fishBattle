class Score{
	constructor(){
		this.numSi=9
		this.numFi=9
		this.numFo=9
		this.numT=9
		this.numS=9
		this.numF=9
	}
    drawF(gd){
    	gd.save()
    	
	    gd.drawImage(JSON["number_black"],
	        0,24*this.numF,20,24,
		    20,575,20,24
	   )
	    gd.restore()
    }
    drawS(gd){
      gd.save()
	    gd.drawImage(JSON["number_black"],
	        0,24*this.numS,20,24,
		    43,575,20,24
	   )
	    gd.restore()
    }
    drawT(gd){
       gd.save()
       gd.drawImage(JSON["number_black"],
	        0,24*this.numT,20,24,
		    66,575,20,24
	   )
       gd.restore()
    }
    drawFo(gd){
       gd.save()
       gd.drawImage(JSON["number_black"],
	        0,24*this.numFo,20,24,
		    89,575,20,24
	   )
       gd.restore()
    }
    drawFi(gd){
       gd.save()
       gd.drawImage(JSON["number_black"],
	        0,24*this.numFi,20,24,
		    112,575,20,24
	   )
       gd.restore()
    }
    drawSi(gd){
       gd.save()
       
       gd.drawImage(JSON["number_black"],
	        0,24*this.numSi,20,24,
		    135,575,20,24
	   )
       gd.restore()
    }
}