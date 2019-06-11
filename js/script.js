jQuery(document).ready(function($) {

    /*меню гамбургер*/
  $('#menu-burger').click(function() {
    var overlayMenu = $('#overlay-menu2'),
        menuIconLines = $('#menu-burger .menu-icon'),
        menuBurger = $('#menu-burger'),
        overflowBody = $( "body" );
    
    if(overlayMenu.hasClass('open')) {
       overlayMenu.removeClass('open');
       menuIconLines.removeClass('open');
       menuBurger.removeClass('open');
       overflowBody.removeClass('overflowHidden');
    }else{    
          overlayMenu.addClass('open');
          menuIconLines.addClass('open');
          menuBurger.addClass('open');
          overflowBody.addClass('overflowHidden');
    };
  });

});