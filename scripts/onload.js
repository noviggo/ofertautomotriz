var set_active_item= function(element){
  $el =  $(element);
  $('#myCarousel').carousel(parseInt($el.attr('rel')));
  $el.parent().find('span').removeClass('active');
  $el.addClass('active');
}
var set_active_item_when_slide= function(){
  number = $('#myCarousel div.item.active').attr('rel');
  el = $('.pag-item[rel='+ number +']')[0]
  set_active_item(el);
} 
var set_active_item= function(element){
  $el =  $(element);
  $('#modalCarousel').carousel(parseInt($el.attr('rel')));
  $el.parent().find('span').removeClass('active');
  $el.addClass('active');
}
var set_active_item_when_slide= function(){
  number = $('#modalCarousel div.item.active').attr('rel');
  el = $('.pag-item[rel='+ number +']')[0]
  set_active_item(el);
}
$(function(){
  
  $('#myCarousel').on('slid', function(){set_active_item_when_slide();})
  $('#myCarousel').carousel();
  $('#modalCarousel').carousel();
  $('#car-modal').modal('hide');
  $('.slide-btn').click(function() {
      $('.vehicle-details').animate({width: 'toggle'});
  });
})