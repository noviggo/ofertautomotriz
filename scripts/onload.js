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
var menu_follow = {
 el: $('#vehicle-details'),
 animate: function(){
   console.log(this.el);
   if(this.el.css('left') == 'auto'){this.el.css('left',0)}
   this.el.animate({left: parseInt(this.el.css('left')) === 0 ? - this.el.outerWidth() :0});
 }
 }
$(function(){

  $('#myCarousel').on('slid', function(){set_active_item_when_slide();})
  $('#myCarousel').carousel();
  $('#modalCarousel').carousel();
  $('#car-modal').modal('hide');
  $('.slide-btn').click(function() {
      menu_follow.animate();
  });
  $('.dropdown-toggle').dropdown()
})