$(".js-dropdown-toggle").click(function() {
    if ( $(this).hasClass("js-dropdown-toggle--active") ) {
       $(this).removeClass('js-dropdown-toggle--active');
       $('.js-dropdown-sub-nav--active').removeClass('js-dropdown-sub-nav--active');
       $( "body" ).removeClass( "nav-toggle-active" );
    }
    else {
        $(this).addClass('js-dropdown-toggle--active');
        $( "body" ).addClass( "nav-toggle-active " );
    }              
});

$(".js-dropdown-sub-nav").click(function() {
	if ( $(this).hasClass("js-dropdown-sub-nav--active") ) {
       $(this).removeClass('js-dropdown-sub-nav--active');
    }
    else {
        $(this).addClass('js-dropdown-sub-nav--active');
    }              
});

$(".js-dropdown-box").click(function() {
	if ( $(this).hasClass("js-dropdown-box--active") ) {
       $(this).removeClass('js-dropdown-box--active');
    }
    else {
        $(this).addClass('js-dropdown-box--active');         
    }              
});



$(".sub-nav-stores-toggle").click(function() {
  $(this).addClass('sub-nav-stores-toggle--active');
  $( "body" ).addClass( "sub-nav-stores-toggle-active" );

  $( "body" ).removeClass( "sub-nav-website-toggle-active" );
  $( ".sub-nav-website-toggle--active" ).removeClass( "sub-nav-website-toggle--active" );
});

$(".sub-nav-website-toggle").click(function() {
  $(this).addClass('sub-nav-website-toggle--active');
  $( "body" ).addClass( "sub-nav-website-toggle-active" );

  $( "body" ).removeClass( "sub-nav-stores-toggle-active" );
  $( ".sub-nav-stores-toggle--active" ).removeClass( "sub-nav-stores-toggle--active" );
});

