


function setupCards(){

	var numOfWeeks = topicList.length;

	var m = '';

	for (var i = 1; i <= numOfWeeks; i++) {

		var currNum = i;

		if ( currNum <= 9 ) {
			currNum = '0' + currNum;
		}

		m+= '<div class="row week'+currNum+'" id="week'+currNum+'">';
			
			m+= '<h2>Week #'+currNum+' – '+topicList[i-1]+'</h2>';

			for (var x = 1; x <= 2; x++) {

				var name = 'niko';

				if( x == 2 ){
					name = 'olivier';
				}

				m+= '<div class="d50 card card-of-'+name+'">';
				
					m+= '<div class="front" data-src="img/cards/'+currNum+'-'+name+'-front.jpg"></div>';
					
					m+= '<div class="back" data-src="img/cards/'+currNum+'-'+name+'-back.jpg"></div>';
				
				m+= '</div>';

			}

		m+= '</div>';

	}

	$('section.cards').append(m);




	$('.card').on('click',function(){

		var card = $(this);
		var className = 'flipped';

		if( card.hasClass(className) ){
			card.removeClass(className);
		}else{
			card.addClass(className);
		}

	});

}


function lazy(){


	$('.card .front').lazyload({
		threshold : 1000
	});
	$('.card .back').lazyload({
		threshold : 1000
	});

}



$(document).ready(function(){
	
	setupCards();

	lazy();

});