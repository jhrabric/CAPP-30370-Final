
  
  $('.listing-thumb').on('click', function(){
      console.log( 'Width: ' + (this).width());
      console.log( 'Height: ' + $(this).height());
	  console.log( 'Alt: ' + $(this).attr('alt') );
    });
	$(document).on('click', 'h1,h2', function(){
	console.log("Alt Text:" ,$(this).text() );
	console.log('color:' ,$(this).css('color'));
	console.log('font-size:', $(this).css('font-size'));
	});
 $(window).resize(function(){
      console.log( 'Width: ' + $(window).width() );
      console.log( 'Height: ' + $(window).height() );
    });
	
	  $('#hide-house').on('click', function(){
    $('#house').hide();
  });
 