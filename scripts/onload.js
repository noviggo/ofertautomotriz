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

var accordion_modal = function(element){
  var status = Number($(element).data('status'));
  //console.log(status)
  elements = [especificaciones_tecnicas,seguridad,equipamiento];
  for(i in elements) if(elements[i] === element) elements.splice(i,1);
  //for(i in elements) console.log(elements[i].id);
  switch (status){
    case 0:
      //console.log('entro al 0');
      //aca cuando esta oculto extended y se muestra solo basic
      $(element).find('.basic, .extended').slideDown('slow');
      $(element).data('status',status+1);
      $(elements).find('.basic, .extended').slideUp('slow');
      $(elements).data('status',0);
      break;
    case 1:
      //console.log('entro al 1');
      //aca cuando esta extended y basic en show
      $(element).find('.extended').slideUp('slow');
      $(element).data('status',status-1);
      $(elements).find('.basic').slideDown('slow');
      $(elements).find('.extended').slideUp('slow');
      $(elements).data('status',status-1);
      break;
    case 2:
      //console.log('entro al 2');
      //aca cuando esta oculto extended y basic y solo se muesta el titulo
      $(element).find('.basic').slideDown('slow');
      $(element).data('status',0);
      $(elements).find('.basic').slideDown('slow');
      $(elements).find('.extended').slideUp('slow');
      $(elements).data('status',status-1);
      break;
  }
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
  $(".collapse").collapse();
  $('#open-reg-form, #close-reg-form').click(function(e) {
    e.preventDefault();
    $('#register-info').slideToggle('slow');
    $('#login-info').slideToggle('slow');
  });
  $([especificaciones_tecnicas,seguridad,equipamiento]).data('status',0);
});
