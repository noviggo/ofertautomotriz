var set_active_item= function(element,carousel){
  $el =  $(element);
  $(carousel).carousel(parseInt($el.attr('rel')));
  $el.parent().find('span').removeClass('active');
  $el.addClass('active');
}
var set_active_item_when_slide= function(carousel){
  number = $(carousel).find('div.item.active').attr('rel');
  el = $('.pag-item[rel='+ number +']')[0]
  set_active_item(el,carousel);
}
var menu_follow = function(el){
  var $btn = $(el);
  var $el = $(el).parent();
  var diff = parseInt($btn.outerWidth());
  var state = parseInt($el.css('left')) === 0 ? true :  false;
  $el.animate({left: state ? - (parseInt($el.outerWidth()) - diff) : 0 })
  state ? $btn.removeClass('arrow-rigth').addClass('arrow-left') : $btn.removeClass('arrow-left').addClass('arrow-rigth');
}

$(function(){
  $('#myCarousel, #carousel-about').carousel();
  $('#myCarousel').on('slid', function(){set_active_item_when_slide(this);})
  $('#modalCarousel').carousel();
  $('#car-modal, #login-modal', '#confirm-modal').modal('hide');
  $('.slide-btn').click(function() {
      menu_follow(this);
      $('.teach-message').hide();
  });
  $('.dropdown-toggle').dropdown();
  $('.container a').tooltip();
  $(".collapse").collapse()
})
