

// 01 Commuting

function preload(){

}


function setup(){

	createCanvas( windowWidth, windowHeight );
}




var colorBlue	= '#3498db';
var colorBlack 	= '#2c3e50';
var colorOrange = '#f39c12';
var colorRed 	= '#e74c3c';

var changeCurrency = 10;

function draw(){	

	background(240);

	var distance = window.innerHeight / (data04.length+1);

	for (var i = 0; i < data04.length; i++){
	    
	    var f = i+1;

	    var obj = data04[i];
	    
	    //line( 0 , i*distance , window.innerWidth , i*distance  )

	    var distX = 1;
	    var direction = 0;


	    if( obj.How_much.includes( '€' ) ){
	    	distX = parseFloat( obj.How_much ) * changeCurrency;
	    }else {
	    	distX = parseFloat( obj.How_much )
	    	direction = 1;
	    }

	    distX = distX / 910;

	    switch( obj.What ){
	    	case 'Food':
	    		stroke( colorOrange );
	    	break;
	    	case 'Other':
		    	stroke( colorRed );
	    	break;
	    	case 'Groceries':
	    		stroke( colorBlue );
	    	break;
	    	case 'Drink':
				stroke( colorBlack );
	    	break;
	    } 
	    noFill();
	    strokeWeight(2);

		bezier(0, f*distance, window.innerWidth*distX, f*distance, window.innerWidth*distX, f*distance, window.innerWidth*distX, window.innerHeight*direction);
	}


	noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  loop()
}