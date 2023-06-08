$(document).ready(function(e){
  
    $('.text-toggle').click(function(e){
        $(this).closest('.text-box').find('.hidden-text').slideToggle(200);
        $(this).toggleClass('active');
        $(this).text() == 'Подробнее' ? $(this).text('скрыть') : $(this).text('Подробнее');
    })
 
    $('.move').click(function(e){
        $('html, body').animate({ scrollTop: $('.form').offset().top}, 400)
    })

    $('input[type=tel]').inputmask({"mask": "+7 (999) 999-99-99"});
	$('input[type=tel]').blur(function(e){
	    var val = $(this).val().slice(-1);
	    (val == '_') ?  $(this).addClass('error') : $(this).removeClass('error')
	})
	$( "form" ).submit(function( event ) {
	    event.preventDefault();
	    $.cookie('cookie_name', $(this).find('input[name=name]').val());
 		var val = $(this).find('input[type=tel]').val().slice(-1);
    	if (val == '_' || val == '') {  $(this).addClass('error')} else
    	{
    		$(this).removeClass('error')
			$(this).unbind();
			$(this).attr('action', 'thanks.php')
    		$(this).submit()
    	}
	 }) 
	 
	 var date = new Date();
	 date.setDate(date.getDate() + 2);
	 var options = {
	   month: 'long',
	   day: 'numeric'
	 };
	  var text =date.toLocaleString("ru", options);
	 $('.date-p').text('Осталось 3 места, запись до '+text);
 

})